"use client";
import useFetch from "@/hooks/api/useFetch";
import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const { isLoading, error, performFetch } = useFetch("/subscribe", "POST");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    performFetch({}, { email });
  };
  return (
    <div className="my-6 flex flex-col justify-center items-center font-barlow text-displayLarge bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm">
      <div className="flex flex-col justify-center items-center md:py-24 py-4 mx-2">
        <h2 className="text-displayMedium md:text-displayLarge text-center">
          Subscribe to our newsletter
        </h2>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-titleMedium text-tertiary1-gray mt-4 text-center mb-4 max-w-[476px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl flex flex-col justify-center mx-auto md:w-[476px] w-full"
          >
            <div className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center p-4 gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-titleMedium w-full mx-2 h-[50px] py-2 px-4 text-tertiary1-normal border border-tertiary2-hover_normal rounded-lg"
                required
              />
              <button
                type="submit"
                className="text-titleMedium flex-shrink-0 h-[50px] md:w-[107px] w-full bg-primary-normal hover:bg-primary-hover_normal text-white rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {/* temporary display error message here as plain text */}
          {error && <div className="text-lg text-red-500">{error.message}</div>}

          <div className="md:my-4 my-2 mb-4">
            <label className="flex items-center text-titleMedium">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                aria-label="I agree with the terms and conditions for subscribing to the newsletter"
                className="form-checkbox h-5 w-5"
              />
              <span className="ml-3 w-full text-bodyLarge">
                I agree with the terms and conditions for subscribing to the
                newsletter
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
