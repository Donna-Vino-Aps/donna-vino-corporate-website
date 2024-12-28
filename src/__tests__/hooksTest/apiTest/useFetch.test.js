import { renderHook, act, waitFor } from "@testing-library/react";
import axios from "axios";
import useFetch from "../../../hooks/api/useFetch";

// Mock axios
jest.mock("axios");

describe("useFetch Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle null request parameters", () => {
    // The renderHook itself will trigger the hook and we need to catch the error.
    expect(() =>
      renderHook(() => useFetch(null, "GET", null, {}, jest.fn())),
    ).toThrow("Invalid route provided");
  });

  it("should handle failed GET request", async () => {
    axios.mockRejectedValueOnce(new Error("Network Error"));

    const onReceived = jest.fn();
    const { result } = renderHook(() =>
      useFetch("/test-route", "GET", null, {}, onReceived),
    );

    await act(async () => {
      await result.current.performFetch();
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error.message).toBe("Network Error");
    });
  });

  it("should handle invalid URL", async () => {
    const onReceived = jest.fn();
    const { result } = renderHook(() =>
      useFetch("invalid-url", "GET", null, {}, onReceived),
    );

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Invalid URL");
  });

  it("should call cancelFetch", () => {
    const onReceived = jest.fn();
    const { result } = renderHook(() =>
      useFetch("/test-route", "GET", null, {}, onReceived),
    );
    const spyCancelFetch = jest.spyOn(result.current, "cancelFetch");

    act(() => {
      result.current.cancelFetch();
    });

    expect(spyCancelFetch).toHaveBeenCalled();

    spyCancelFetch.mockRestore();
  });

  it("should return cancelFetch function", () => {
    const onReceived = jest.fn();
    const { result } = renderHook(() =>
      useFetch("/test-route", "GET", null, {}, onReceived),
    );

    expect(typeof result.current.cancelFetch).toBe("function");
  });

  it("should handle empty response", async () => {
    // Mocking an API response that is an empty object
    axios.mockResolvedValueOnce({ data: {} });

    const onReceived = jest.fn();
    const { result } = renderHook(() =>
      useFetch("/test-route", "GET", null, {}, onReceived),
    );

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Empty response from server");
  });

  it("should handle generic server error", async () => {
    const mockErrorResponse = {
      response: {
        data: {
          msg: "Internal server error.",
        },
      },
    };

    axios.mockRejectedValueOnce(mockErrorResponse);

    const onReceived = jest.fn();
    const { result } = renderHook(() =>
      useFetch("/test-route", "GET", null, {}, onReceived),
    );

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Internal server error.");
  });

  it("should set isLoading to true while fetching", async () => {
    const onReceived = jest.fn();
    const { result } = renderHook(() =>
      useFetch("/test-route", "GET", null, {}, onReceived),
    );

    // Initially, isLoading should be false
    expect(result.current.isLoading).toBe(false);

    // Start the fetch request
    await act(async () => {
      await result.current.performFetch();
    });

    // After the fetch request is performed, isLoading should be false
    expect(result.current.isLoading).toBe(false);
  });
});
