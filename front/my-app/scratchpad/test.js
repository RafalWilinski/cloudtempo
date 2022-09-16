const credentials = {
  accessKeyId: "ASIARHUGWZCWH6HDZMSM",
  secretAccessKey: "2lkm/jRKmWMQRw4mFBirIJlZnocVJJsHCeXbobEh",
  sessionToken:
    "IQoJb3JpZ2luX2VjEFwaCXVzLWVhc3QtMSJHMEUCIHsIrcTqn5zNESWUahivWF8Ju+rnhukJwXE9ehNYVQXrAiEA0guaWfMwDw9lbL87EAMtqi5YPfkOGN7wdTj1LWxgNBwqpQII9f//////////ARAEGgwwODUxMDgxMTU2MjgiDCcYPIRHpZ1CkzvIvir5AUzJLVDmpIefn9/eh59nYWtEhBtWym96efwF+cjl0QSTrux2LdkLLdTXIMgz5Ottp1UIv651XdJf8HPFrPFxMWFAGU+1kSuFlByxhCjEl4aJxIfZid8kCoZmr0A8sXMU7A6tfs0AAtnncoB0x/avDn0dA80bZiMU4cn9+VNJ5CQnYcDs3knt18bEPVBplXnHk7NMrQfP1DjC3pWl+z14vR/qPqAasJBCYFnYROFKrsm3eUYwod6kpqY+4/WUrvhM5j5zbWqwhNem1XNr6EO4YdtjHoLf2bAamZJ7gnJbYuRqxQzKhPV3hd/snO2fAvxR1TGkmpbUqJC/OTDlnZOZBjrfAWbf/vbC7YbGhxeH6mt/Z6npHFZn466hu1A8XCvRSLviHAcY/aFAV02nRf66OrOHl+dZhUOcWWOSiMF5K+oyi+aXe5Q43Iwiur8VZ8DJSzi/wuItA/IfwG2gfYwxkBVGi+DXoAxh0YTPWQj1Q+oRmnIaiFAp47GbJzqmdnhbQXY6KOvrl3CT3bNNnCdwOxjuB7woE2TkAsugwhr+O4xHMtcHdQQ0Q1p7PbFxrjmF3eUP8b5XzzUuD3gxgHJpQmWCorAhDhqFPbKcG2i711sq4n/A9OQ4HwapNPj7saelm3g=",
  expiration: "2022-09-16T19:59:00.000Z",
};

const AWS = require("aws-sdk");

// DOES NOT WORK WITH ECS CREDS
// const dynamodb = new AWS.DynamoDB({
//   region: "us-east-1",
//   credentials,
// });

// dynamodb
//   .listTables({
//     Limit: 1,
//   })
//   .promise()
//   .then(console.log)
//   .catch(console.error);

// WORKS
// const lambda = new AWS.Lambda({
//   region: "us-east-1",
//   credentials,
// });

// lambda.listFunctions({}).promise().then(console.log).catch(console.error);

// WORKS
// const ec2 = new AWS.EC2({
//   region: "ap-southeast-2",
//   credentials,
// });

// ec2.describeInstances({}).promise().then(console.log).catch(console.error);

// ec2.describeSecurityGroups({}).promise().then(console.log).catch(console.error);

// does not work
// const rds = new AWS.RDS({
//   region: "us-east-1",
//   credentials,
// });

// rds.describeDBClusters({}).promise().then(console.log).catch(console.error);

// const iam = new AWS.IAM({
//   region: "us-east-1",
//   credentials,
// });

// iam.listRoles({}).promise().then(console.log).catch(console.error);

// const s3 = new AWS.S3({
//   region: "us-east-1",
//   credentials,
// });

// s3.listBuckets({}).promise().then(console.log).catch(console.error);

// const cloudformation = new AWS.CloudFormation({
//   region: "us-east-1",
//   credentials,
// });

// cloudformation
//   .describeStacks({})
//   .promise()
//   .then(console.log)
//   .catch(console.error);

const cloudwatchlogs = new AWS.CloudWatchLogs({
  region: "us-east-1",
  credentials,
});

cloudwatchlogs
  .describeLogGroups({})
  .promise()
  .then(console.log)
  .catch(console.error);
