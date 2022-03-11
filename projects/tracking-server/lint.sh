#!/bin/bash

badStuff=$(cat $(find tests/ -type f) | grep 'it.only\|describe.only')
if [[ ! -z $badStuff ]]; then
  echo "some test contains it.only or describe.only: $badStuff"
  exit 1
fi

npx eslint src/ --ignore-path .gitignore
