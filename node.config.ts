import { NodeConfig } from "@lang-engine/lang-engine-node";

const config: NodeConfig = {
  name: "OpenAI Chat API Node",
  functions: [
    {
      name: "httpResponse",
      displayName: "HTTP Response",
      inputs: [
        {
          name: "content",
          displayName: "Content",
          type: "string",
          required: true,
          isMultiline: true,
          useTemplate: true,
        },
      ],
    },
  ],
};

export default config;
