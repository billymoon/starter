# starter

It's understood that whislt deno should be getting more stable as it reached
version 1, Aleph is very unstable, and has been making regular api breaking
changes. As such, this is an experiment to taste a bit of the future, not to
replace current methods.

## Get going

Firstly, you need to have [deno](https://deno.land/) installed, and then you can
install aleph globally like this...

    deno install --allow-read --allow-write --allow-net --allow-env --allow-run -f -n aleph https://deno.land/x/aleph/cli.ts

This repo was created with

    aleph init starter

And versions used were

    starter [main] aleph --version                                                                                                         
    aleph.js 0.3.0-alpha.28
    deno 1.8.3
    v8 9.0.257.3
    typescript 4.2.2

## Development

Make sure you have a project created in sanity, so you can consum the data by
providing config in an env var

    SANITY_CONFIG='{"projectId":"XXXXXXXX"}' aleph dev

## Code hygene

Format code with deno to keep whitespace issues out of git

    deno --unstable fmt --ignore=.aleph
