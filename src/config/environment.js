// import { logInfo } from "@/utils/logging";

const env = process.env.APP_ENV || "development";

export const baseApiUrl =
  env === "production"
    ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
    : env === "staging"
      ? process.env.NEXT_PUBLIC_API_URL_STAGING
      : process.env.NEXT_PUBLIC_API_URL_LOCAL;

// logInfo(`Server URL: ${baseApiUrl}`);
