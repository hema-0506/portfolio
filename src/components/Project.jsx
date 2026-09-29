import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, tags = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          tags={tags}
          href={href}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
