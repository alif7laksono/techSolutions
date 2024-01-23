import React, { useEffect } from "react";
// import { FaTimes } from "react-icons/fa";

const ProjectDetailPopup = ({ project, onClose }) => {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      onClick={handleOutsideClick}
      className="z-20 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn"
    >
      {/* <FaTimes
        onClick={onClose}
        className="absolute top-2 left-2 text-blue-500 hover:text-blue-700 text-2xl cursor-pointer"
      /> */}
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 md:w-3/4 w-11/12 mx-auto relative animate-fadeIn h-[50vh] overflow-y-auto">
        {" "}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <p className="text-gray-700 mb-6 font-bold">{project.description}</p>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          aliquam lacus, at varius leo consectetur a. Donec non metus auctor,
          semper est a, aliquet felis. Fusce id mollis mauris.
        </p>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          aliquam lacus, at varius leo consectetur a. Donec non metus auctor,
          semper est a, aliquet felis. Fusce id mollis mauris.
        </p>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          aliquam lacus, at varius leo consectetur a. Donec non metus auctor,
          semper est a, aliquet felis. Fusce id mollis mauris.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailPopup;
