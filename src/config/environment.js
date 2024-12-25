import { API_URL_PRODUCTION, API_URL_DEVELOPMENT } from "@env";
// import { logInfo } from "../../util/loading";

// Define temporarily default URLs for fallback; we will update this soon
const DEFAULT_API_URL_PRODUCTION = "https://exampleurlproduction.com";
const DEFAULT_API_URL_DEVELOPMENT = "http://exampleurldevelopment:3000";

// Note: Currently, we do not have the key for Heroku, so we cannot update the secret variables.
// Once available, we will update this file with the real URLs.

// Determine the base API URL based on the environment
const isProduction = process.env.NODE_ENV === "production";
export const baseApiUrl = isProduction
  ? API_URL_PRODUCTION || DEFAULT_API_URL_PRODUCTION
  : API_URL_DEVELOPMENT || DEFAULT_API_URL_DEVELOPMENT;

// logInfo(`Server URL: ${baseApiUrl}`);
