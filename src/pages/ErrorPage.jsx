import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error= useRouteError();
    console.error(error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-900">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="mt-4 text-lg text-yellow-300">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mt-2 text-sm text-yellow-500">
          {error.statusText || error.message}
        </p>
      </div>
    );
    
}
export default ErrorPage;