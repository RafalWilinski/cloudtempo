#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CloudTempoLicensingAPI } from "../cdk/cloudtempoLicensingAPIStack";

const app = new cdk.App();

new CloudTempoLicensingAPI(app, "CloudTempoLicensingAPI", {
  env: {
    region: "us-east-1",
    account: "847163508457",
  },
});
