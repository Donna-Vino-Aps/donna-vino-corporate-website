import { useState, useCallback } from "react";
import { handleResponse } from "../lib/requestHandlers";

export const useFetch = (
  url,
  method = "GET",
  body = null,
  customHeaders = {},
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const triggerRequest = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const options = {
        method,
        headers: { "Content-Type": "application/json", ...customHeaders },
        ...(body && { body: JSON.stringify(body) }),
      };

      const response = await fetch(url, options);
      const result = await handleResponse(response);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, method, body]);

  return { data, loading, error, triggerRequest };
};
