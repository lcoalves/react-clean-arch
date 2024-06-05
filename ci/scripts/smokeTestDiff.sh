#!/bin/bash

PATH_FILTER="smoke-test/"
CHANGED_FILES=$(git diff HEAD HEAD~ --name-only)
MATCH_COUNT=0

echo "Checking for file changes..."
for FILE in $CHANGED_FILES
do
 if [[ $FILE == *$PATH_FILTER* ]]; then
    echo "MATCH:  ${FILE} changed"
    MATCH_FOUND=true
    MATCH_COUNT=$(($MATCH_COUNT+1))
  else
    echo "IGNORE: ${FILE} changed"
  fi
done

echo "$MATCH_COUNT match(es) for filter '$PATH_FILTER' found."
if [[ $MATCH_COUNT -gt 0 ]]; then
  echo "##vso[task.setvariable variable=SOURCE_CODE_CHANGED;isOutput=true]true"
else
  echo "##vso[task.setvariable variable=SOURCE_CODE_CHANGED;isOutput=true]false"
fi