import { useEffect } from "react";
import { motion } from "motion/react";

// "Label: text" -> bold label + text. Falls back to plain text.
const SubPoint = ({ text }) => {
  const idx = text.indexOf(":");
  if (idx > 0 && idx < 50) {
    return (
      <p className="mb-3 font-normal text-neutral-400">
        <span className="font-semibold text-neutral-200">
          {text.slice(0, idx + 1)}
        </span>
        {text.slice(idx + 1)}
      </p>
    );
  }
  return <p className="mb-3 font-normal text-neutral-400">{text}</p>;
};

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  tags = [],
  href,
  closeModal,
}) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeModal();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm"
      onClick={closeModal}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="/assets/close.svg" alt="" className="w-6 h-6" />
        </button>
        <div className="p-6 pt-8">
          <h5 className="mb-3 pr-12 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-4 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <SubPoint key={index} text={subDesc} />
          ))}
          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              >
                View Project ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
