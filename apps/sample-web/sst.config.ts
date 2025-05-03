/// <reference path="./.sst/platform/config.d.ts" />

const STAGE_DOMAIN = {
  production: "sample.3ga.fun",
  staging: "sample-staging.3ga.fun",
};

export default $config({
  async app(input) {
    const packageJson = await import("./package.json");
    return {
      name: packageJson.default.name,
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "cloudflare",
    };
  },
  async run() {
    const site = new sst.cloudflare.StaticSite("TigaSampleWeb", {
      build: {
        command: "npm run build",
        output: "dist",
      },
      domain: STAGE_DOMAIN[$app.stage as keyof typeof STAGE_DOMAIN],
    });

    return {
      site: site.url,
    };
  },
});
