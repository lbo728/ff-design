import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";
import { fileURLToPath } from "url";

function getAbsolutePath(value: string): string {
  return dirname(
    fileURLToPath(import.meta.resolve(join(value, "package.json")))
  );
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};
export default config;
