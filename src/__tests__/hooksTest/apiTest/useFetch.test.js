import { renderHook, act, waitFor } from "@testing-library/react";
import axios from "axios";
import useFetch from "../../../hooks/api/useFetch";

// Mock de axios
jest.mock("axios");

describe("useFetch Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should throw an error if the route includes 'api/'", () => {
    const { result } = renderHook(() => useFetch("api/test-route", jest.fn()));

    expect(() => result.current.performFetch()).toThrow(
      "Invalid route provided. Routes cannot include 'api/' as part of the endpoint, to avoid conflicts and confusion in server routing.",
    );
  });

  it("should throw an error if route is not a string", () => {
    const { result } = renderHook(() => useFetch(123, jest.fn()));

    expect(() => result.current.performFetch()).toThrow(
      "useFetch: route must be a string",
    );
  });

  it("should throw an error if onReceived is not a function", () => {
    const { result } = renderHook(() => useFetch("/test-route", null));

    expect(() => result.current.performFetch()).toThrow(
      "useFetch: onReceived must be a function",
    );
  });

  it("should handle GET request successfully", async () => {
    const mockData = { success: true, data: "Test Data" };
    axios.mockResolvedValueOnce({ data: mockData });

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.data).toEqual(mockData);
    expect(onReceived).toHaveBeenCalledWith(mockData);
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle failed GET request due to network error", async () => {
    axios.mockRejectedValueOnce(new Error("Network Error"));

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Network Error");
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle invalid response (empty object)", async () => {
    axios.mockResolvedValueOnce({ data: {} });

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Empty response from server");
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle invalid response (no success)", async () => {
    axios.mockResolvedValueOnce({
      data: { success: false, error: "Server error" },
    });

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Server error");
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle invalid URL format", async () => {
    const { result } = renderHook(() => useFetch("invalid-url", jest.fn()));

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Invalid URL");
  });

  it("should cancel the fetch request", async () => {
    axios.mockResolvedValueOnce({ data: { success: true, data: "Test" } });

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    act(() => {
      result.current.performFetch();
    });

    act(() => {
      result.current.cancelFetch("/test-route");
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Fetch was canceled");
  });

  it("should return cancelFetch function", () => {
    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    expect(typeof result.current.cancelFetch).toBe("function");
  });

  it("should update the route and cancel the previous request when new URL is provided", async () => {
    axios.mockResolvedValueOnce({
      data: { success: true, data: "Updated Data" },
    });

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    act(() => {
      result.current.performFetch();
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    act(() => {
      result.current.performFetch({}, "/new-route");
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual({
      success: true,
      data: "Updated Data",
    });
  });
});
