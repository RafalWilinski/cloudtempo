#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SearchServiceStack } from "../lib/service-stack";

const app = new cdk.App();
new SearchServiceStack(app, "SearchServiceStack", {});
