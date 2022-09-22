const credentials = {
  accessKeyId: "ASIA4KPXBI3UT564J3XX",
  secretAccessKey: "16tyGOwMVwaA2qbhoWTpxBosdVW9EcFJZz6wzr+J",
  sessionToken:
    "IQoJb3JpZ2luX2VjEOH//////////wEaCXVzLWVhc3QtMSJGMEQCIExHXve5+vBgsDCI3ZiWCXjsR8Nh4DBqdZbVZxIfUCUgAiAiIKQHSyjN2TdBTRfRA0Gjz7QV4sRAaouffds0TXPKECr0AgiK//////////8BEAAaDDg0NzE2MzUwODQ1NyIMC+FQ5bl4KxnpU1qrKsgC/lA7yN316lkcJRBFQNzazioMXrCvzNJLjpHmyaJ06f0Xm0+VMaRPCRQqC92SBkxqISpwh/V53j6+ZpEYzCarclqmm8VZBeuNVnLEIkNoY1QrP56QCsU31BDW+Q1iglvJFE/Byu4odL1umUKX5IfL5iSO8HA7Sbl0PaejOCl8IYVR+l97vNENKhTcAlONtr5Y5WhEwirNvsUWQsWjOF8fn6sXr8W7FvDuVJqff9gQ1hydMom6Q05tJsvCrGNAIg4dPFuQhW1Ow1mtkiK9ggzGSMUkMG+KTQLSQK70+isJxmF0OhsT/p1n78REIaPWjAHkduUwcGOIDG1nFqaInGsMiaf6rCEGoToaQI4kdFiUzYph6gcnpMZMtvCPdKjLnepnAcSy/SgApHaoabfbF2bJWAFc+UlfOXFJUAaAkTRu5MHgfxBpYweC2TCl/K+ZBjq0AsLwPtFPAyqzhf2JKRPQH+J8OWR014YRbZFTyAa0NS0sNJDkFy2VtPWCT8SrAl6Q7mPu7RmVdvocu0jgygcJs9Qp9CU83IoG0MZ/YICij3TcOgvN2nrpxl9zpMBD4xufT4d9hyvpGP+Z/UaCzCU6rzMooyOPqxKUYJO14YUlFDDEDg0AZHSRhTfUE3IBaGyW91AZzTv6YKGB7qcPFm6EMm4fTuSKBFDIlOwdt7Zz2FpKBOnLdUwNkP/pTiZLs1WrsYHwH7L9kicUUM+6nZRD0kQ/kkRiDG9cuyoXx7xttQiHLPZRq073BQKFcJkyWD9y0hgPNglfpmPm8Q1C1t3nqcenkQ/w0BAq7C2bTcxEv8iuQkfsQKNrX1ctZcB4kF3tIAR4y+SIs7hcrlyFn1qGElFdV3XH",
  expiration: "2022-09-22T08:39:16.000Z",
};

const AWS = require("aws-sdk");

run().then(console.log);

async function run() {
  console.log("ECS", await checkECS());
  console.log("EC2", await checkEC2());
  console.log("S3", await checkS3());
  console.log("Lambda", await checkLambda());
  console.log("DynamoDB", await checkDynamoDB());
  console.log("RDS", await checkRDS());
  console.log("SNS", await checkSNS());
  console.log("checkSQS", await checkSQS());
  console.log("checkCloudwatch", await checkCloudwatch());
  console.log("checkIAM", await checkIAM());
  console.log("checkCloudFormation", await checkCloudFormation());
  console.log("checkRedshift", await checkRedshift());
  console.log("checkSimpleDB", await checkSimpleDB());
  console.log("checkElasticache", await checkElasticache());
  console.log("checkStepFunctions", await checkStepFunctions());
  console.log("Elasticsearch", await checkElasticsearch());
  console.log("checkKinesis", await checkKinesis());
  console.log("checkCloudFront", await checkCloudFront());
  console.log("checkGlueTables", await checkGlueTables());
  console.log("checkGlueCrawlers", await checkGlueCrawlers());
  console.log("checkEC2AutoscalingGroups", await checkEC2AutoscalingGroups());
  console.log("checkEC2LoadBalancers", await checkEC2LoadBalancers());
  console.log("checkApiGateway", await checkApiGateway());
  console.log("checkSageMaker", await checkSageMaker());
  console.log("checkAppSync", await checkAppSync());
  console.log("checkElasticBeanstalk", await checkElasticBeanstalk());
  console.log("checkRoute53", await checkRoute53());
  console.log("checkAmplify", await checkAmplify());
  console.log("checkDAX", await checkDAX());
  console.log("checkEventBridge", await checkEventBridge());
  console.log("checkCodeBuild", await checkCodeBuild());
  console.log("checkAutoscaling", await checkAutoscaling());
  console.log("checkAmazonMQ", await checkAmazonMQ());
  console.log("checkSecretsManager", await checkSecretsManager());
  console.log("checkSSMParameters", await checkSSMParameters());
  console.log("checkAWSConfig", await checkAWSConfig());
  console.log("checkKMS", await checkKMS());
}

async function checkECS() {
  const ecs = new AWS.ECS({
    region: "us-east-1",
    credentials,
  });

  return ecs
    .listClusters({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkKinesis() {
  const kinesis = new AWS.Kinesis({
    region: "us-east-1",
    credentials,
  });

  return kinesis
    .listStreams({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkEC2() {
  const ec2 = new AWS.EC2({
    region: "us-east-1",
    credentials,
  });

  return ec2
    .describeSecurityGroups({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkS3() {
  const s3 = new AWS.S3({
    region: "us-east-1",
    credentials,
  });

  return s3
    .listBuckets({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkLambda() {
  const lambda = new AWS.Lambda({
    region: "us-east-1",
    credentials,
  });

  return lambda
    .listFunctions({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkDynamoDB() {
  const dynamodb = new AWS.DynamoDB({
    region: "us-east-1",
    credentials,
  });

  return dynamodb
    .listTables({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkRDS() {
  const rds = new AWS.RDS({
    region: "us-east-1",
    credentials,
  });

  return rds
    .describeDBClusters({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkIAM() {
  const iam = new AWS.IAM({
    region: "us-east-1",
    credentials,
  });

  return iam
    .listRoles({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkCloudFormation() {
  const cloudformation = new AWS.CloudFormation({
    region: "us-east-1",
    credentials,
  });

  return cloudformation
    .describeStacks({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkCloudwatch() {
  const cloudwatchlogs = new AWS.CloudWatchLogs({
    region: "us-east-1",
    credentials,
  });

  return cloudwatchlogs
    .describeLogGroups({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkRedshift() {
  const redshift = new AWS.Redshift({
    region: "us-east-1",
    credentials,
  });

  return redshift
    .describeClusters({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkSimpleDB() {
  const simpledb = new AWS.SimpleDB({
    region: "us-east-1",
    credentials,
  });

  return simpledb
    .listDomains({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkElasticache() {
  const elasticache = new AWS.ElastiCache({
    region: "us-east-1",
    credentials,
  });

  return elasticache
    .describeCacheClusters({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkSNS() {
  const sns = new AWS.SNS({
    region: "us-east-1",
    credentials,
  });

  return sns
    .listTopics({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkSQS() {
  const sqs = new AWS.SQS({
    region: "us-east-1",
    credentials,
  });

  return sqs
    .listQueues({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkStepFunctions() {
  const stepfunctions = new AWS.StepFunctions({
    region: "us-east-1",
    credentials,
  });

  return stepfunctions
    .listStateMachines({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkGlueTables() {
  const glue = new AWS.Glue({
    region: "us-east-1",
    credentials,
  });

  return glue
    .getTables({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkGlueCrawlers() {
  const glue = new AWS.Glue({
    region: "us-east-1",
    credentials,
  });

  return glue
    .getCrawlers({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkEC2AutoscalingGroups() {
  const autoscaling = new AWS.AutoScaling({
    region: "us-east-1",
    credentials,
  });

  return autoscaling
    .describeAutoScalingGroups({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkEC2LoadBalancers() {
  const elb = new AWS.ELB({
    region: "us-east-1",
    credentials,
  });

  return elb
    .describeLoadBalancers({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkApiGateway() {
  const apigateway = new AWS.APIGateway({
    region: "us-east-1",
    credentials,
  });

  return apigateway
    .getRestApis({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkAppSync() {
  const appsync = new AWS.AppSync({
    region: "us-east-1",
    credentials,
  });

  return appsync
    .listGraphqlApis({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkElasticBeanstalk() {
  const elasticbeanstalk = new AWS.ElasticBeanstalk({
    region: "us-east-1",
    credentials,
  });

  return elasticbeanstalk
    .describeApplications({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkElasticsearch() {
  const es = new AWS.ES({
    region: "us-east-1",
    credentials,
  });

  return es
    .listDomainNames({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkCloudFront() {
  const cloudfront = new AWS.CloudFront({
    region: "us-east-1",
    credentials,
  });

  return cloudfront
    .listDistributions({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkRoute53() {
  const route53 = new AWS.Route53({
    region: "us-east-1",
    credentials,
  });

  return route53
    .listHostedZones({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkCodeBuild() {
  const codebuild = new AWS.CodeBuild({
    region: "us-east-1",
    credentials,
  });

  return codebuild
    .listProjects({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkAutoscaling() {
  const autoscaling = new AWS.AutoScaling({
    region: "us-east-1",
    credentials,
  });

  return autoscaling
    .describeAutoScalingGroups({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkAmazonMQ() {
  const mq = new AWS.MQ({
    region: "us-east-1",
    credentials,
  });

  return mq
    .listBrokers({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkEventBridge() {
  const eventbridge = new AWS.EventBridge({
    region: "us-east-1",
    credentials,
  });

  return eventbridge
    .listRules({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkAmplify() {
  const amplify = new AWS.Amplify({
    region: "us-east-1",
    credentials,
  });

  return amplify
    .listApps({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkDAX() {
  const dax = new AWS.DAX({
    region: "us-east-1",
    credentials,
  });

  return dax
    .describeClusters({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkSSMParameters() {
  const ssm = new AWS.SSM({
    region: "us-east-1",
    credentials,
  });

  return ssm
    .describeParameters({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkSecretsManager() {
  const secretsmanager = new AWS.SecretsManager({
    region: "us-east-1",
    credentials,
  });

  return secretsmanager
    .listSecrets({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkAWSConfig() {
  const config = new AWS.ConfigService({
    region: "us-east-1",
    credentials,
  });

  return config
    .describeConfigurationRecorders({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkSageMaker() {
  const sagemaker = new AWS.SageMaker({
    region: "us-east-1",
    credentials,
  });

  return sagemaker
    .listNotebookInstances({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function checkKMS() {
  const kms = new AWS.KMS({
    region: "us-east-1",
    credentials,
  });

  return kms
    .listKeys({})
    .promise()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
