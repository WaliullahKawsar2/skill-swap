import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main className="grid min-h-full place-items-center bg-base-200 px-6 py-24 sm:py-32 lg:px-8 transition-colors duration-500">
        <div className="text-center">
          <p className="font-semibold text-primary text-2xl">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-base-content sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-muted sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="btn btn-primary btn-outline"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
