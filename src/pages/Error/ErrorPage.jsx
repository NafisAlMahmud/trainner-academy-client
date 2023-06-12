import React from "react";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Error | Trainer Academy </title>
      </Helmet>
      <div className="flex gap-6 items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Error</h1>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/017/178/563/small/cross-check-icon-symbol-on-transparent-background-free-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
