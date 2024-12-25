import { API_URL_PRODUCTION, API_URL_DEVELOPMENT } from "@env";
// import { logInfo } from "../../util/loading";

// Define temporarily default URLs for fallback; we will update this soon
const DEFAULT_API_URL_PRODUCTION = "https://exampleurlproduction.com";
const DEFAULT_API_URL_DEVELOPMENT = "http://exampleurldevelopment:3000";

// Determine the base API URL based on the environment
const isProduction = process.env.NODE_ENV === "production";
export const baseApiUrl = isProduction
  ? API_URL_PRODUCTION || DEFAULT_API_URL_PRODUCTION
  : API_URL_DEVELOPMENT || DEFAULT_API_URL_DEVELOPMENT;

// logInfo(`Server URL: ${baseApiUrl}`);
