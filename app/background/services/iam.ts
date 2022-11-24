import { Document } from "../../src/document";

export async function getAllIAMRoles(credentials: any, region: string) {
  if (region !== "us-east-1") {
    return [];
  }

  const iam = new AWS.IAM({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: AWS.IAM.ListRolesResponse = await iam
      .listRoles({
        Marker: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.Roles ?? []).map((role) => ({
        name: role.RoleName,
        arn: role.Arn,
        awsService: "iam_role",
        subtext: role.Description,
        description: role.Description,
        tags: role.Tags,
        region,
      })),
    ];
    token = response.Marker;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}

export async function getAllIAMUsers(credentials: any, region: string) {
  if (region !== "us-east-1") {
    return [];
  }

  const iam = new AWS.IAM({
    credentials,
    region,
  });
  let token;
  let firstRun = true;
  let documents: Document[] = [];

  do {
    const response: AWS.IAM.ListUsersResponse = await iam
      .listUsers({
        Marker: token,
      })
      .promise();

    documents = [
      ...documents,
      ...(response.Users ?? []).map((user) => ({
        name: user.UserName,
        arn: user.Arn,
        awsService: "iam_user",
        tags: user.Tags,
        region,
      })),
    ];
    token = response.Marker;
    firstRun = false;
  } while (token || firstRun);

  return documents;
}
