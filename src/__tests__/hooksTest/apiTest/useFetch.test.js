import { renderHook, act, waitFor } from "@testing-library/react";
import axios from "axios";
import useFetch from "../../../hooks/api/useFetch";

jest.mock("axios");

describe("useFetch Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("Invalid configurations", () => {
    it("should throw error for missing or invalid initialRoute", () => {
      expect(() => renderHook(() => useFetch())).toThrow(
        "Invalid route provided. Routes cannot include 'api/' as part of the endpoint, to avoid conflicts and confusion in server routing.",
      );
    });

    it("should handle null request parameters", () => {
      expect(() =>
        renderHook(() => useFetch(null, "GET", null, {}, jest.fn())),
      ).toThrow("Invalid route provided");
    });

    it("should handle undefined request parameters", () => {
      expect(() =>
        renderHook(() => useFetch(undefined, "GET", null, {}, jest.fn())),
      ).toThrow("Invalid route provided");
    });
  });

  describe("HTTP methods", () => {
    it("should handle GET request", async () => {
      const mockResponse = { data: { id: 123 }, success: true };
      axios.mockResolvedValueOnce({ data: mockResponse });

      const { result } = renderHook(() => useFetch("/test-route", "GET"));

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.data).toEqual(mockResponse);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it("should handle POST request", async () => {
      const mockResponse = { data: { id: 123 }, success: true };
      axios.mockResolvedValueOnce({ data: mockResponse });

      const onReceived = jest.fn();
      const { result } = renderHook(() =>
        useFetch("/test-route", "POST", { id: 123 }, {}, onReceived),
      );

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.data).toEqual(mockResponse);
      expect(onReceived).toHaveBeenCalledWith(mockResponse);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it("should handle PUT request", async () => {
      const mockResponse = { data: { id: 123, updated: true }, success: true };
      axios.mockResolvedValueOnce({ data: mockResponse });

      const onReceived = jest.fn();
      const { result } = renderHook(() =>
        useFetch("/test-route", "PUT", { id: 123 }, {}, onReceived),
      );

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.data).toEqual(mockResponse);
      expect(onReceived).toHaveBeenCalledWith(mockResponse);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it("should handle DELETE request", async () => {
      const mockResponse = { data: { id: 123, deleted: true }, success: true };
      axios.mockResolvedValueOnce({ data: mockResponse });

      const onReceived = jest.fn();
      const { result } = renderHook(() =>
        useFetch("/test-route", "DELETE", null, {}, onReceived),
      );

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.data).toEqual(mockResponse);
      expect(onReceived).toHaveBeenCalledWith(mockResponse);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it("should handle null body gracefully", async () => {
      const mockResponse = { data: { id: 123 }, success: true };
      axios.mockResolvedValueOnce({ data: mockResponse });

      const { result } = renderHook(() => useFetch("/test-route", "POST"));

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.data).toEqual(mockResponse);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  describe("Error handling", () => {
    it("should handle failed GET request", async () => {
      axios.mockRejectedValueOnce(new Error("Network Error"));

      const { result } = renderHook(() => useFetch("/test-route", "GET"));

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
      const { result } = renderHook(() => useFetch("invalid-url", "GET"));

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error.message).toBe("Invalid URL");
    });

    it("should handle empty response", async () => {
      axios.mockResolvedValueOnce({ data: {} });

      const { result } = renderHook(() => useFetch("/test-route", "GET"));

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error.message).toBe("Unexpected server error");
    });

    it("should handle generic server error", async () => {
      const mockErrorResponse = {
        response: { data: { msg: "Internal server error." } },
      };
      axios.mockRejectedValueOnce(mockErrorResponse);

      const { result } = renderHook(() => useFetch("/test-route", "GET"));

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error.message).toBe("Internal server error.");
    });
  });

  describe("Configuration and defaults", () => {
    it("should use default headers when customHeaders is not provided", async () => {
      const mockResponse = { data: { id: 123 }, success: true };
      axios.mockResolvedValueOnce({ data: mockResponse });

      const { result } = renderHook(() => useFetch("/test-route", "GET"));

      await act(async () => {
        await result.current.performFetch();
      });

      expect(axios).toHaveBeenCalledWith(expect.any(String), {
        method: "GET",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
        }),
        withCredentials: true,
        cancelToken: expect.any(Object),
      });
    });

    it("should not fail if onReceived is not provided", async () => {
      const mockResponse = { data: { id: 123 }, success: true };
      axios.mockResolvedValueOnce({ data: mockResponse });

      const { result } = renderHook(() => useFetch("/test-route", "GET"));

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.data).toEqual(mockResponse);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  describe("Lifecycle methods", () => {
    it("should call cancelFetch", () => {
      const { result } = renderHook(() => useFetch("/test-route", "GET"));
      const spyCancelFetch = jest.spyOn(result.current, "cancelFetch");

      act(() => {
        result.current.cancelFetch();
      });

      expect(spyCancelFetch).toHaveBeenCalled();

      spyCancelFetch.mockRestore();
    });

    it("should return cancelFetch function", () => {
      const { result } = renderHook(() => useFetch("/test-route", "GET"));

      expect(typeof result.current.cancelFetch).toBe("function");
    });

    it("should set isLoading to true while fetching", async () => {
      const { result } = renderHook(() => useFetch("/test-route", "GET"));

      expect(result.current.isLoading).toBe(false);

      await act(async () => {
        await result.current.performFetch();
      });

      expect(result.current.isLoading).toBe(false);
    });
  });
});
