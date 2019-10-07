#!/bin/bash
REPOS=$*

function fatal() {
  echo "Fatal error: $*" >&2
  exit 1
}

[[ -d checkouts ]] || mkdir checkouts || fatal "mkdir checkouts failed"
pushd checkouts
for repo in $REPOS
do
  folder=$(echo $repo | sed 's/.*\///' | sed 's/\.git//')
  echo "Git repo: $repo"
  if [[ -d $folder ]] 
  then
    pushd $folder
    git pull origin master || fatal "git pull origin master failed at $folder"
  else
    git clone $repo || fatal "git clone $repo failed"
    pushd $folder
  fi
  echo "******** TESTING $(basename $(pwd))"
  npm install . || fatal "npm install failed"
  npm test || fatal "npm test failed"
  popd
done
popd