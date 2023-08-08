#!/usr/bin/env bash
npx cdk bootstrap
TS_NODE_SKIP_IGNORE=true npx cdk deploy Scratch