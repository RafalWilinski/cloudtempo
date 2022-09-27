interface Tag {
  Key: string;
  Value: string;
}

export interface Document {
  arn: string;
  tags?: Tag[];
  name?: string;
  subtext?: string;
  description?: string;
  awsService: string;
  region: string;
  extraFields?: Record<string, string>;
  url?: string;
}
