#!/bin/bash

git checkout -b tmp && \
  rm -fr node_modules/ && \
  pkgcache install npm && \
  gulp build && \
  git add -f dist && \
  git commit && \
  echo -n "\nNow git tag -a vX.X.X\n" && \
  echo -n "\ngit push origin vX.X.X\n" && \
  echo -n "\nnpm publish\n" && \
  echo -n "\ngit checkout master\n" && \
  echo -n "\ngit branch -D tmp\n"
