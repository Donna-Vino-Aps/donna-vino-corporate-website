const env = process.env.NODE_ENV || "development";

export const baseApiUrl =
  env === "production"
    ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
    : env === "staging"
      ? process.env.NEXT_PUBLIC_API_URL_STAGING
      : process.env.NEXT_PUBLIC_API_URL_LOCAL;
