import React from "react";
import ReactMarkdown from "react-markdown";

export default function Response({ message, retrieval_info }) {
  // Determine if the source button should be shown.
  const showSource = retrieval_info && retrieval_info !== "None";

  return (
    <div className="flex justify-start w-full">
      <div className="inline-block bg-gray-200 px-3 py-2 rounded-md text-left max-w-[60%] relative">
        <ReactMarkdown>{message}</ReactMarkdown>
        {showSource && (
          <div className="mt-5">
            <button className="text-xs bg-gray-200 text-gray-800 px-3 py-2 outline-gray-400 outline-1 rounded relative group">
              Source
              <div className="absolute left-0 bottom-full mb-1 w-max px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-fuchsia-200/90 text-black text-xs p-1 rounded">
                {retrieval_info}
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
