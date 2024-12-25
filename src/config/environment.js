// Determine the base API URL based on the environment
const isProduction = process.env.NODE_ENV === "production";

// If it is production, we take the production URL, otherwise we take the development URL
export const baseApiUrl = isProduction
  ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION || "https://defaulturl.com"
  : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT || "http://localhost:3000";
