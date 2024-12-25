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

  it("should handle null request parameters", () => {
    // The renderHook itself will trigger the hook and we need to catch the error.
    expect(() => renderHook(() => useFetch(null, jest.fn()))).toThrow(
      "Invalid route provided",
    );
  });

  it("should handle failed GET request", async () => {
    axios.mockRejectedValueOnce(new Error("Network Error"));

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    act(() => {
      result.current.performFetch();
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error.message).toBe("Network Error");
    });
  });

  it("should handle invalid URL", async () => {
    const { result } = renderHook(() => useFetch("invalid-url", jest.fn()));

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Invalid URL");
  });

  it("should call cancelFetch", () => {
    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));
    const spyCancelFetch = jest.spyOn(result.current, "cancelFetch");

    act(() => {
      result.current.cancelFetch();
    });

    expect(spyCancelFetch).toHaveBeenCalled();

    spyCancelFetch.mockRestore();
  });

  it("should return cancelFetch function", () => {
    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    expect(typeof result.current.cancelFetch).toBe("function");
  });

  it("should handle empty response", async () => {
    // Mocking an API response that is an empty object
    axios.mockImplementationOnce(() => Promise.resolve({ data: {} }));

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

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

    axios.mockImplementationOnce(() => Promise.reject(mockErrorResponse));

    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error.message).toBe("Internal server error.");
  });

  it("should set isLoading to true while fetching", async () => {
    const onReceived = jest.fn();
    const { result } = renderHook(() => useFetch("/test-route", onReceived));

    expect(result.current.isLoading).toBe(false);

    await act(async () => {
      await result.current.performFetch();
    });

    expect(result.current.isLoading).toBe(false);
  });
});
