// Generated file - DO NOT EDIT
// Generated on: 2024-12-29T22:05:06.460Z

export interface HttpResponseInput {
  contentType: string;
  response: string;
}

export interface BaseFunctions {
  httpResponse(input: HttpResponseInput): Promise<Record<string, any>>;
}
