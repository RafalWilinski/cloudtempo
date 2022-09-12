export interface Document {
  arn?: string;
  tags?: string[];
  name?: string;
  description?: string;
  awsService: string;
  region: string;
}
