import { NodeConfig } from "@lang-engine/lang-engine-node";

const config: NodeConfig = {
  name: "OpenAI Chat API Node",
  functions: [
    {
      name: "httpResponse",
      displayName: "HTTP Response",
      inputs: [
        {
          name: "contentType",
          displayName: "Content Type",
          type: "select",
          required: true,
          options: [
            {
              value: "text/plain",
              label: "Text",
            },
            {
              value: "application/json",
              label: "JSON",
            },
          ],
        },
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
