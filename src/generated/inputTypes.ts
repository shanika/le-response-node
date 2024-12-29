// Generated file - DO NOT EDIT
// Generated on: 2024-12-29T22:11:42.485Z

export interface HttpResponseInput {
  contentType: string;
  content: string;
}

export interface BaseFunctions {
  httpResponse(input: HttpResponseInput): Promise<Record<string, any>>;
}
