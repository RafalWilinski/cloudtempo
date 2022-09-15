const credentials = {
  accessKeyId: "ASIARHUGWZCWIX4WRICC",
  secretAccessKey: "V1+m3u1CQT2XJKYO/qFHj/i5NBO9AVQ9Oxgk4lkm",
  sessionToken:
    "IQoJb3JpZ2luX2VjEDkaCXVzLWVhc3QtMSJHMEUCIQDBDQk0F5gZAuWhiw9RNrUNjQzmaeIb5K2NVIvjZaMwXgIgUtFTgc4ED0WTsTrmF/8eWhfz58H5xuEunYT86fUbH/QqqgII0f//////////ARAEGgwwODUxMDgxMTU2MjgiDLDY20nTXFufAy57rSr+AeEWOA1sdO/CiWxURtFmkUkPKzCSOylyGZdS30WzlmjjFjgShdBw4wuW6X/VvPdO8FYTp9oXxz2QJoVE58z8pwVWFPgcUbrpRvbyzcQ4yTXjuWgBIIVqMP9ZU9FY8J82i+LGANHHuYxWYLl3IzyxR8tXrLP/9h8ioI5gR891cJCQhMkhe/jFqkd5bhi3KeEhLpLqTIQmv+n/RDUmZZga7BN0LxOGV2a0y+gohvKF0DC0zHTQkJNsntX8menRuIUqELk5ijrgYjGfshBP2NOgdqjZzVYcms0O2ivKYCYWmZiyxTVM3SM97Id9+IvqzpFu+qRMFuBLrgKzuwnyKfk4MJani5kGOt8BHogqac5pHObxJCLt7QvTfyvmDVJ5mirxHsu81QYmnQClJfofrz2Z50H77KOhZmE3b3+QLuxSR5ME+6yHjNrfHmkOnLsoNWirUCln1wdzCE68raejVR9kUkeNso10oEEUuHKKIyP5+R4GGyy+hpf1S7magGkGy3WccR+LoXqWbmkE1H8YuyG4Ss4MV5vggvgeKiaH2LVKCfjonv1pe5CnnhKmkR57iGnKSeCg7+cSJSD56cCKxgNqKCxNJHyqoIFWzL8Dyy0mkEJu8QkxMht/FyNkOjrbRC1DFdHtCCWomg==",
  expiration: "2022-09-15T08:30:27.000Z",
};

const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB({
  region: "us-east-1",
  credentials,
});

dynamodb
  .listTables({
    Limit: 1,
  })
  .promise()
  .then(console.log)
  .catch(console.error);

const lambda = new AWS.Lambda({
  region: "us-east-1",
  credentials,
});

lambda.listFunctions({}).promise().then(console.log).catch(console.error);
