import React from "react";

const Forgot = () => {
  return (
    <div className="xl:mt-16  xl:w-1/2 xl:mx-auto mx-4 mt-4 px-4 pt-4 pb-8  rounded-xl flex flex-1 flex-col justify-between h-1/2 bg-slate-700">
      <label
        htmlFor="helper-text"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        id="helper-text"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@flowbite.com"
      />
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        We’ll never share your details. Read our{" "}
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Privacy Policy
        </a>
        .
      </p>

      <button className="rounded-lg font-medium xl:text-[14px] text-[12px] bg-transparent border border-blue-500 text-blue-500 xl:px-4 xl:mt-6 mt-4 px-2 py-2">
        Send me reset instructions to my email
      </button>

    </div>
  );
};

export default Forgot;
