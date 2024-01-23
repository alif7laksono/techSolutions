export default function Featured() {
  const logos = [
    { src: "/logos/logo-1.svg", alt: "Company 1" },
    { src: "/logos/logo-2.svg", alt: "Company 2" },
    { src: "/logos/logo-3.svg", alt: "Company 3" },
    { src: "/logos/logo-4.svg", alt: "Company 4" },
    { src: "/logos/logo-5.svg", alt: "Company 5" },
    { src: "/logos/logo-6.svg", alt: "Company 6" },
  ];
  return (
    <div className="mt-10 mx-auto animate-slideInLeft">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-8">
          Trusted by the fastest growing companies
        </h2>
        {/* <hr className="w-1/3 flex mx-auto border-blue-100 border-t-4" />{" "} */}
      </div>

      {/* companies logo */}
      <div className="flex justify-between mx-auto overflow-x-auto w-3/4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-28 h-28 sm:w-1/2 mx-auto mb-4 transform hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
    </div>
  );
}
