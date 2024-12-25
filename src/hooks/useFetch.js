import { useState, useCallback } from "react";

async function handleResponse(response) {
  const contentType = response.headers.get("Content-Type");

  if (!response.ok) {
    const errorMessage = contentType?.includes("application/json")
      ? (await response.json()).message || "An error occurred"
      : await response.text();
    throw new Error(errorMessage);
  }

  if (contentType?.includes("application/json")) {
    return await response.json();
  }
  if (
    contentType?.includes("text/plain" || contentType?.includes("text/html"))
  ) {
    return await response.text();
  }

  return null;
}

export const defaultSuccessCallback = (result) => {};
export const defaultErrorCallback = (errorText) => {};

export const useFetch = (
  url,
  method = "GET",
  body = null,
  customHeaders = {},
  successCallback = defaultSuccessCallback, //Custom success callback
  errorCallback = defaultErrorCallback, // Custom error callback
  customOptions = {},
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const triggerRequest = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    const options = {
      method,
      headers: { "Content-Type": "application/json", ...customHeaders },
      ...(body && { body: JSON.stringify(body) }),
      ...customOptions,
    };

    try {
      const response = await fetch(url, options);
      const result = await handleResponse(response);

      successCallback(result);
      setData(result);
    } catch (err) {
      const errorMessage = err.message || "An error occurred";
      errorCallback(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [
    url,
    method,
    body,
    customHeaders,
    successCallback,
    errorCallback,
    customOptions,
  ]);

  return { data, loading, error, triggerRequest };
};
