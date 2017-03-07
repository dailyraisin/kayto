#!/bin/bash

git checkout -b tmp && \
  rm -fr node_modules/ && \
  pkgcache install npm && \
  gulp build && \
  git add -f dist && \
  git commit && \
  echo "\n\nNow git tag -a vX.X.X\n" && \
  echo "\ngit push origin vX.X.X\n" && \
  echo "\nnpm publish\n" && \
  echo "\ngit checkout master\n" && \
  echo "\ngit branch -D tmp\n"
