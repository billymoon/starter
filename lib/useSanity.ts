import { useCallback, useEffect, useState } from "react";

type SanityClientOptions = {
  projectId: string;
  dataset: string;
  token?: string;
  useCdn?: boolean;
};

type QueryParameters = Record<string, string | number>;

const sanityClient = (options: SanityClientOptions) => {
  const { useCdn, projectId, dataset, token } = options;
  const hasToken = token && token.length > 0;
  const baseHost = useCdn && !hasToken ? "apicdn.sanity.io" : "api.sanity.io";
  const endpoint = `https://${projectId}.${baseHost}/v1/data/query/${dataset}`;

  // Parse JSON and throw on bad responses
  const responseHandler = (response: Response) => {
    if (response.status >= 400) {
      throw new Error([response.status, response.statusText].join(" "));
    }
    return response.json();
  };

  // We need to prefix groq query params with `$` and quote the strings
  const transformedParams = (parameters: QueryParameters) =>
    Object.keys(parameters).reduce<QueryParameters>((prev, key) => {
      prev[`$${key}`] = JSON.stringify(parameters[key]);
      return prev;
    }, {});

  return {
    fetch: async (query: string, parameters?: QueryParameters) => {
      const urlParams = new URLSearchParams({
        query,
        ...(parameters && transformedParams(parameters)),
      });

      const url = new URL([endpoint, urlParams].join("?"));
      const request = new Request(url.toString());

      if (hasToken) {
        request.headers.set("Authorization", `Bearer ${token}`);
      }

      return (
        fetch(request)
          .then(responseHandler)
          // The query results are in the `result` property
          .then((json) => json.result)
      );
    },
  };
};

export default function useSanity() {
  const { SANITY_CONFIG } = Deno.env.toObject();

  const sanityConfig = {
    // projectId: "XXXXXX",
    dataset: "production",
    token: "",
    useCdn: true,
    ...JSON.parse(SANITY_CONFIG),
  };

  const client = sanityClient(sanityConfig);

  const sanity = useCallback(
    (query, params = {}) => client.fetch(query, params),
    [],
  );
  console.log({ sanity });
  return sanity;
}
