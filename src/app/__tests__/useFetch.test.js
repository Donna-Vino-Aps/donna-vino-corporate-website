import { render, act, screen } from "@testing-library/react";
import React from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";

global.fetch = jest.fn();

const TestComponent = ({
  url,
  method,
  body,
  customHeaders,
  successCallback,
  errorCallback,
  customOptions,
}) => {
  const { data, loading, error, triggerRequest } = useFetch(
    url,
    method,
    body,
    customHeaders,
    successCallback,
    errorCallback,
    customOptions,
  );

  return (
    <div>
      <button onClick={triggerRequest}>Fetch Data</button>
      {loading && <span data-testid="loading">Loading...</span>}
      {error && <span data-testid="error">{error}</span>}
      {data && <div data-testid="data">{JSON.stringify(data)}</div>}
    </div>
  );
};

TestComponent.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.object,
  customHeaders: PropTypes.object,
  successCallback: PropTypes.func,
  errorCallback: PropTypes.func,
  customOptions: PropTypes.object,
};

describe("useFetch", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should return data on successful request", async () => {
    const mockResponse = { message: "Success" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    render(<TestComponent url="/api/success" />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(screen.getByTestId("data")).toHaveTextContent(
      JSON.stringify(mockResponse),
    );
    expect(fetch).toHaveBeenCalledWith("/api/success", expect.anything());
  });

  it("should handle error response correctly", async () => {
    const errorMessage = "An error occurred";
    fetch.mockResolvedValueOnce({
      ok: false,
      text: () => Promise.resolve(errorMessage),
      headers: { get: () => "text/plain" },
    });

    render(<TestComponent url="/api/error" />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("error");
    expect(screen.getByTestId("error")).toHaveTextContent(errorMessage);
    expect(fetch).toHaveBeenCalledWith("/api/error", expect.anything());
  });

  it("should show loading indicator while fetching", async () => {
    const mockResponse = { message: "Success" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    render(<TestComponent url="/api/success" />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    expect(screen.getByTestId("loading")).toBeInTheDocument();
    await screen.findByTestId("data");
    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
  });

  it("should handle custom headers correctly", async () => {
    const mockResponse = { message: "Success" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    const customHeaders = { Authorization: "Bearer token" };

    render(<TestComponent url="/api/success" customHeaders={customHeaders} />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(fetch).toHaveBeenCalledWith(
      "/api/success",
      expect.objectContaining({
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Authorization: "Bearer token",
        }),
      }),
    );
  });

  it("should handle custom options correctly", async () => {
    const mockResponse = { message: "Success" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    const customOptions = { credentials: "include" };

    render(<TestComponent url="/api/success" customOptions={customOptions} />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(fetch).toHaveBeenCalledWith(
      "/api/success",
      expect.objectContaining({
        credentials: "include",
      }),
    );
  });

  it("should call custom success and error callbacks", async () => {
    const successCallback = jest.fn();
    const errorCallback = jest.fn();

    const mockResponse = { message: "Success" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    render(
      <TestComponent
        url="/api/success"
        successCallback={successCallback}
        errorCallback={errorCallback}
      />,
    );

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(successCallback).toHaveBeenCalledWith(mockResponse);
    expect(errorCallback).not.toHaveBeenCalled();
  });

  it("should call the error callback on failure", async () => {
    const errorMessage = "An error occurred";
    const errorCallback = jest.fn();

    fetch.mockResolvedValueOnce({
      ok: false,
      text: () => Promise.resolve(errorMessage),
      headers: { get: () => "text/plain" },
    });

    render(<TestComponent url="/api/error" errorCallback={errorCallback} />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("error");
    expect(errorCallback).toHaveBeenCalledWith(errorMessage);
  });
  it("should handle non-JSON response", async () => {
    const mockResponseText = "This is a plain text response";
    fetch.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(mockResponseText),
      headers: { get: () => "text/plain" },
    });

    render(<TestComponent url="/api/plain-text" />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(screen.getByTestId("data")).toHaveTextContent(mockResponseText);
    expect(fetch).toHaveBeenCalledWith("/api/plain-text", expect.anything());
  });

  it("should handle empty response body", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
      headers: { get: () => "application/json" },
    });

    render(<TestComponent url="/api/empty" />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(screen.getByTestId("data")).toHaveTextContent("{}");
    expect(fetch).toHaveBeenCalledWith("/api/empty", expect.anything());
  });

  it("should handle network errors", async () => {
    fetch.mockRejectedValueOnce(new Error("Network Error"));

    render(<TestComponent url="/api/network-error" />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("error");
    expect(screen.getByTestId("error")).toHaveTextContent("Network Error");
  });

  it("should handle invalid JSON response", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.reject(new SyntaxError("Unexpected token")),
      headers: { get: () => "application/json" },
    });

    render(<TestComponent url="/api/invalid-json" />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("error");
    expect(screen.getByTestId("error")).toHaveTextContent("Unexpected token");
  });
});

describe("useFetch with custom HTTP methods", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should handle POST requests correctly", async () => {
    const mockResponse = { message: "Data created" };
    const requestBody = { key: "value" };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    render(
      <TestComponent url="/api/create" method="POST" body={requestBody} />,
    );

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(screen.getByTestId("data")).toHaveTextContent(
      JSON.stringify(mockResponse),
    );
    expect(fetch).toHaveBeenCalledWith(
      "/api/create",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(requestBody),
      }),
    );
  });

  it("should handle PUT requests correctly", async () => {
    const mockResponse = { message: "Data updated" };
    const requestBody = { key: "updatedValue" };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    render(<TestComponent url="/api/update" method="PUT" body={requestBody} />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(screen.getByTestId("data")).toHaveTextContent(
      JSON.stringify(mockResponse),
    );
    expect(fetch).toHaveBeenCalledWith(
      "/api/update",
      expect.objectContaining({
        method: "PUT",
        body: JSON.stringify(requestBody),
      }),
    );
  });

  it("should handle DELETE requests correctly", async () => {
    const mockResponse = { message: "Data deleted" };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    render(<TestComponent url="/api/delete" method="DELETE" />);

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(screen.getByTestId("data")).toHaveTextContent(
      JSON.stringify(mockResponse),
    );
    expect(fetch).toHaveBeenCalledWith(
      "/api/delete",
      expect.objectContaining({
        method: "DELETE",
      }),
    );
  });

  it("should handle PATCH requests correctly", async () => {
    const mockResponse = { message: "Data patched" };
    const requestBody = { key: "patchedValue" };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
      headers: { get: () => "application/json" },
    });

    render(
      <TestComponent url="/api/patch" method="PATCH" body={requestBody} />,
    );

    const button = screen.getByText("Fetch Data");

    act(() => {
      button.click();
    });

    await screen.findByTestId("data");
    expect(screen.getByTestId("data")).toHaveTextContent(
      JSON.stringify(mockResponse),
    );
    expect(fetch).toHaveBeenCalledWith(
      "/api/patch",
      expect.objectContaining({
        method: "PATCH",
        body: JSON.stringify(requestBody),
      }),
    );
  });
});
