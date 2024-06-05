#!/bin/bash

cd app

rm -rf ./pact
GIT_SHA=$(git rev-parse --short HEAD)

echo "Publishing main pact"
yarn --silent jest -t="^((?!wip:).)*$" --silent 

yarn pact-broker \
    publish ./pact/pacts \
    --consumer-app-version=$GIT_SHA-$DEPLOY_VERSION-main \
    --tag main \
    --broker-base-url=$PACT_BROKER_URL \
    --broker-token=$PACT_BROKER_TOKEN \
|| { echo 'ERROR while publishing the main pact' ; exit 1; }

cat src/config/featureToggles.ts | grep -oP "(?<=')[a-zA-Z0-9\.-]*(?=')" | while read -r ft ; do
    echo "\n\n\nLooking for wip pacts for feature $ft"

    rm -rf ./pact

    WIP_PACTS_COUNT=$(find src -type f -print0 | xargs -0 grep  -l "wip:$ft:" | wc -l)

    if [ $WIP_PACTS_COUNT -gt 0 ]
    then
        echo "Publishing pacts of feature $ft"
        yarn --silent jest -t="wip:$ft:" --silent
        yarn pact-broker \
            publish ./pact/pacts \
            --consumer-app-version=$GIT_SHA-$DEPLOY_VERSION-wip-$ft \
            --tag "wip-$ft" \
            --tag "wip" \
            --broker-base-url=$PACT_BROKER_URL \
            --broker-token=$PACT_BROKER_TOKEN \
        || { echo "ERROR while publishing the wip-$ft pact" ; exit 1; }
    else
        echo "No wip pacts for feature $ft"
    fi
done
