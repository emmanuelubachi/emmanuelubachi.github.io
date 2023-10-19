import Link from "next/link";

type LinkButtonProp = {
  url: string;
};

const LinkButton = ({ url }: LinkButtonProp) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="inline-flex items-center text-white 
    bg-primary-900 
    hover:bg-gradient-to-tr hover:from-primary-800 hover:to-pink-700
    transition-transform hover:scale-110 cursor-pointer
    focus:ring-4 focus:ring-primary-300 font-medium 
    rounded-lg text-sm px-5 py-2.5 text-center"
    >
      View case study
      <svg
        className="ml-2 -mr-1 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  );
};

export default LinkButton;
