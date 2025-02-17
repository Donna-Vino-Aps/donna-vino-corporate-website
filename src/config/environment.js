import { logInfo } from "@/utils/logging";

export const baseApiUrl = process.env.NEXT_PUBLIC_API_URL_HEROKU;
// export const baseApiUrl = process.env.NEXT_PUBLIC_API_URL_LOCAL

logInfo(`Server url: ${baseApiUrl}`);
