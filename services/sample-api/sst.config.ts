/// <reference path="./.sst/platform/config.d.ts" />

const STAGE_DOMAIN = {
  production: "api.sample.3ga.fun",
  staging: "api.sample-staging.3ga.fun",
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
    const hono = new sst.cloudflare.Worker("TigaSampleApi", {
      url: true,
      handler: "src/index.ts",
      domain: STAGE_DOMAIN[$app.stage as keyof typeof STAGE_DOMAIN],
    });

    return {
      api: hono.url,
    };
  },
});
