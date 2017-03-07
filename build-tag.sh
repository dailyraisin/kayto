#!/bin/bash

git checkout -b tmp && \
  rm -fr node_modules/ && \
  pkgcache install npm && \
  gulp build && \
  git add -f dist && \
  git commit && \
  echo -ne "\nNow git tag -a vX.X.X\n" && \
  echo -ne "\ngit push origin vX.X.X\n" && \
  echo -ne "\nnpm publish\n" && \
  echo -ne "\ngit checkout master\n" && \
  echo -ne "\ngit branch -D tmp\n"
