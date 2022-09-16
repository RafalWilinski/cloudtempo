import { Document } from "../../src/document";

export async function getAllCloudformationStacks(
  _credentials: any,
  region: string
) {
  // await authenticateAgainstRegion(region);

  // const resp = await fetch(
  //   `https://${region}.console.aws.amazon.com/cloudformation/service/stacks?region=${region}&status=CREATE_IN_PROGRESS&status=UPDATE_COMPLETE&status=DELETE_FAILED&status=REVIEW_IN_PROGRESS&status=ROLLBACK_IN_PROGRESS&status=UPDATE_ROLLBACK_IN_PROGRESS&status=CREATE_COMPLETE&status=UPDATE_ROLLBACK_COMPLETE&status=UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS&status=ROLLBACK_COMPLETE&status=ROLLBACK_FAILED&status=CREATE_FAILED&status=UPDATE_ROLLBACK_FAILED&status=UPDATE_COMPLETE_CLEANUP_IN_PROGRESS&status=UPDATE_IN_PROGRESS&status=UPDATE_FAILED&status=DELETE_IN_PROGRESS&status=IMPORT_COMPLETE&status=IMPORT_IN_PROGRESS&status=IMPORT_ROLLBACK_IN_PROGRESS&status=IMPORT_ROLLBACK_FAILED&status=IMPORT_ROLLBACK_COMPLETE`,
  //   {
  //     credentials: "include",
  //   }
  // ).then((r) => r.json());

  // console.log(resp);

  return [];
}
