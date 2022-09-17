import { Tag } from "aws-sdk/clients/cloudformation";

export interface Document {
  arn?: string;
  tags?: Tag[];
  name?: string;
  description?: string;
  awsService: string;
  region: string;
}
