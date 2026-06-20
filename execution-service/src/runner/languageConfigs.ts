export const languageConfigs = {
  javascript: {
    image: "node:22-alpine",
    extension: "js",
    command: (filename: string) => [
      "node",
      filename,
    ],
  },

  python: {
    image: "python:3.12-alpine",
    extension: "py",
    command: (filename: string) => [
      "python",
      filename,
    ],
  },
} as const;