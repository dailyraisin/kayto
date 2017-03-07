#!/bin/bash

git checkout -b tmp && \
  rm -fr node_modules/ && \
  pkgcache install npm && \
  gulp build && \
  git add -f dist && \
  git commit && \
  echo "\n\nNow git tag -a vX.X.X; git push origin vX.X.X; git checkout master && git branch -D tmp"
