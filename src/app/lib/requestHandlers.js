export async function handleResponse(
  response,
  successCallback = defaultSuccessCallback,
  errorCallback = defaultErrorCallback,
) {
  const contentType = response.headers.get("Content-Type");

  if (response.ok) {
    if (contentType?.includes("application/json")) {
      const result = await response.json();
      successCallback(result);
      return result;
    }
  } else {
    const responseText = await response.text();
    errorCallback(responseText);
    throw new Error(responseText);
  }
}

export const defaultSuccessCallback = (result) => {};

export const defaultErrorCallback = (errorText) => {
  const message = errorText?.error || errorText?.message || errorText;
  console.error("Error:", message);
};

export async function sendPostJsonRequest(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json();
}

export async function sendPutJsonRequest(url, data) {
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json();
}

export async function sendGetRequest(
  url,
  optionsHeaders = {},
  optionsFields = {},
) {
  const response = await fetch(url, {
    ...optionsFields,
    method: "GET",
    headers: optionsHeaders,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json();
}

export async function sendDeleteRequest(url) {
  const response = await fetch(url, { method: "DELETE" });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json();
}
