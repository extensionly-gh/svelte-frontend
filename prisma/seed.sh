#!/bin/sh
# -e Exit immediately when a command returns a non-zero status.
# -x Print commands before they are executed
set -x
# Seeding command
if type doppler >/dev/null 2>&1
  then 
    doppler run -- node --experimental-specifier-resolution=node --loader ts-node/esm prisma/seed.ts
  else
    node --experimental-specifier-resolution=node --loader ts-node/esm prisma/seed.ts
fi