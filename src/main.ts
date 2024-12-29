import { BaseFunctions, HttpResponseInput } from "./generated/inputTypes.js";

export class Node implements BaseFunctions {
  async httpResponse(input: HttpResponseInput): Promise<Record<string, any>> {
    // Return a response with the given content type and response
    return {
      response: input.response,
      contentType: input.contentType,
    };
  }
}
