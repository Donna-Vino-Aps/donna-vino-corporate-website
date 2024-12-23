import { renderHook, act, waitFor } from "@testing-library/react";
import { useFetch } from "../hooks/useFetch";

beforeEach(() => {
  global.fetch = jest.fn();
  console.error = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

const testAPI = "https://jsonplaceholder.typicode.com/posts";

describe("useFetch hook", () => {
  const mockResponse = (status, jsonData, errorMessage = "") => {
    return {
      ok: status === 200,
      json: jest.fn().mockResolvedValue(jsonData),
      text: jest.fn().mockResolvedValue(errorMessage),
      headers: new Headers({ "Content-Type": "application/json" }),
    };
  };

  it("should perform a successful GET request", async () => {
    const response = mockResponse(200, { message: "GET Success" });

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() => useFetch(testAPI, "GET"));

    act(() => {
      result.current.triggerRequest();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual({ message: "GET Success" });
    expect(result.current.error).toBeNull();
  });

  it("should handle a failed GET request", async () => {
    const response = mockResponse(400, null, "Error occurred");

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() => useFetch(testAPI, "GET"));

    act(() => {
      result.current.triggerRequest();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe("Error occurred");
    expect(result.current.data).toBeNull();
  });

  it("should perform a successful POST request", async () => {
    const response = mockResponse(200, { message: "POST Success" });

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() =>
      useFetch(testAPI, "POST", { key: "value" }),
    );

    act(() => {
      result.current.triggerRequest();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual({ message: "POST Success" });
    expect(result.current.error).toBeNull();
  });

  it("should handle a failed POST request", async () => {
    const response = mockResponse(400, null, "POST Error occurred");

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() =>
      useFetch(testAPI, "POST", { key: "value" }),
    );

    act(() => {
      result.current.triggerRequest();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe("POST Error occurred");
    expect(result.current.data).toBeNull();
  });

  it("should perform a successful PUT request", async () => {
    const response = mockResponse(200, { message: "PUT Success" });

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() =>
      useFetch(testAPI, "PUT", { key: "value" }),
    );

    act(() => {
      result.current.triggerRequest();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual({ message: "PUT Success" });
    expect(result.current.error).toBeNull();
  });

  it("should handle a failed PUT request", async () => {
    const response = mockResponse(400, null, "PUT Error occurred");

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() =>
      useFetch(testAPI, "PUT", { key: "value" }),
    );

    act(() => {
      result.current.triggerRequest();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe("PUT Error occurred");
    expect(result.current.data).toBeNull();
  });

  it("should perform a successful DELETE request", async () => {
    const response = mockResponse(200, { message: "DELETE Success" });

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() => useFetch(testAPI, "DELETE"));

    act(() => {
      result.current.triggerRequest();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual({ message: "DELETE Success" });
    expect(result.current.error).toBeNull();
  });

  it("should handle a failed DELETE request", async () => {
    const response = mockResponse(400, null, "DELETE Error occurred");

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() => useFetch(testAPI, "DELETE"));

    act(() => {
      result.current.triggerRequest();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe("DELETE Error occurred");
    expect(result.current.data).toBeNull();
  });

  it("should update loading state correctly", async () => {
    const response = mockResponse(200, { message: "Success" });

    global.fetch.mockResolvedValueOnce(response);

    const { result } = renderHook(() => useFetch(testAPI, "GET"));

    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.triggerRequest();
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual({ message: "Success" });
    expect(result.current.error).toBeNull();
  });
});
