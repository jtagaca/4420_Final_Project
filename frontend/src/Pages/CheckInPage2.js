import React from "react";
import { Link } from "react-router-dom";

export default function CheckInPage2() {
  return (
    <div className="flex items-start justify-center min-h-screen text-white bg-primary">
      <div className=" text-black shadow-2xl shadow-green-200 w-full p-5 m-2 my-5 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500   rounded-lg opacity-90 lg:max-w-[1145px]">
        <div className="my-4">
          <h1 className="my-3 text-3xl">
            Any changes to the original project and why
          </h1>
          <p>
            To enhance the performance of the backend, I am considering
            incorporating a caching mechanism using sessions. This is due to the
            fact that querying the views I've designed can take up to 10 seconds
            per table, even with the presence of indexes. The extended duration
            is likely attributable to the sorting process within the view, which
            is executed using the "ORDER BY" clause.
          </p>
        </div>
        <div className="my-4">
          <h1 className="my-3 text-3xl">What you've accomplished so far.</h1>

          <p>
            So far, between my previous checkpoint and this one, I have finished
            the views, as well as created the backend so that I can query the
            views, and I have created the charts, which can be found on this
            page{" "}
            <Link
              to="/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 semi-bold"
            >
              (charts ui page)
            </Link>
          </p>
        </div>
        <div className="my-4">
          <h1 className="my-3 text-3xl">
            What you're planning to have completed by Tuesday, May 9th.
          </h1>

          <p>
            I’m planning to finish all the charts; I have two more to complete
            and lastly, I will implement the session-based caching mechanism.
          </p>
        </div>
      </div>
    </div>
  );
}
