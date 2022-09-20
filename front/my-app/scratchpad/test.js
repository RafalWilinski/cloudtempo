const credentials = {
  accessKeyId: "ASIA4KPXBI3U6DRHJYOS",
  secretAccessKey: "+XyAiZL28k75S8XHyXMYMHkSVpqIdDMR2aSjqyKq",
  sessionToken:
    "IQoJb3JpZ2luX2VjELn//////////wEaCXVzLWVhc3QtMSJIMEYCIQDoPlduqfzoXdUH9xmnOSNz+Y1Eat8xWkO4mj1HqoXd5AIhAJaI7mYp7ZcL9yP/O1P54fWir4/uOqLeowTB8PpIzk/TKugCCGEQABoMODQ3MTYzNTA4NDU3IgzVC1lvATF8HNHR+AwqxQJ06f6GrhuJKvHO8XDgyuQscWBINTRWXnqXFbdqa00XJhV1wlS/T9i/6XJSDIktOepPSsFk1HSLYqQEN+K7khCaYiRP2E21b8vBJOvZU66FL4ROiPkD9J9RdpZm+5aeen0sHhbKtxO1cKS8OiC3kMNBRKA7OjI8tMEJW5x8x1rMK2kZYvy3zO0P6yYHNmEetHFU6bv+PCDW1tgoQHh4Lw5DZQY+mknqT6lhtKlK9WstceIz8gGILYS9XCIVg0pYDcxzemPCs1gq7CDRE0EAwE21af+ZK7RP5lb1o5ssKR7/TIDt0Cxjzm7JXr03faeBEFsU0XPJ6V104yJLOIL4BvzINkrEk6W8JRKXBQAlJFejP/P6Yg38IhnXOuN7kRH7vTBqoC1ybpdd30tl4sHz0MIbj9MlIzyp9/BLjg+M6FtPm6y4OTVNMOa/pZkGOrICXFQe6kyXNx26mCfqaDPQeblzdgUGq/fOtl8dgtrntt3M5qqtUC2UVap0Dcakbqjsgvex2HFTuCndPzoIP0eLaOW3uKXUo9JjpbwJoRwbp8+gZJk/0Butj+I9LOVkNwHbELKwnbsg2x1aMAGoXUaar+0DDj40Q2hmG5KdpCy6cr/zU3/kxZumE+ZdiHiCwwJZfb0BUhnj2hNJuG3dPziBhUuYf8QD3yQGROhTh4iKwyJ5D9FWUVvmjSzU3E4TZTeuJ/cfXueSZswd/CgP0YiwH59M9KKG0Yxms9sziCjoiKa8+A6FS099RSigBIWi90yynAYNJBdkF4eY1UApmnP4ifQEs543ieucTHHUeI/tp+ULLBFgHVEkuyUfdlb08JGOTttaO5zIWt0Mbk3MHN6xxoA6",
  expiration: "2022-09-20T16:27:14.000Z",
};

const AWS = require("aws-sdk");

// const ecs = new AWS.ECS({
//   region: "us-east-1",
//   credentials,
// });

// ecs.listClusters({}).promise().then(console.log).catch(console.error);

const ec2 = new AWS.EC2({
  region: "us-east-1",
  credentials,
});
ec2.describeSecurityGroups({}).promise().then(console.log).catch(console.error);

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

// const cloudwatchlogs = new AWS.CloudWatchLogs({
//   region: "us-east-1",
//   credentials,
// });

// cloudwatchlogs
//   .describeLogGroups({})
//   .promise()
//   .then(console.log)
//   .catch(console.error);
