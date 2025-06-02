import { useNavigate, useRouteError } from "react-router-dom";
import coffeeImage from "url:../assets/img/coffee.png";

const ErrorPage = ({value}) => {
  const err = useRouteError();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  const handleRetry = () => {
    window.location.reload();
  };
  const height = value ? "100vh" : "80vh";
  return (
    <div className="flex flex-col items-center justify-center bg-[#fff8f0] px-5 text-center font-[Poppins]"
         style={{height}}
      >
     {/* <div className={`h-[${height}] flex flex-col items-center justify-center bg-[#fff8f0] px-5 text-center font-[Poppins]`}> */}
      <img
        src={coffeeImage}
        alt="Oops! Spilled Coffee"
        className="w-40"
      />
      <h1 className="text-[28px] text-[#f76c1b] mb-2">Oops! Our kitchen hit a snag.</h1>
      <p className="text-[16px] text-[#555] mb-8 max-w-[320px]">
        We’re having trouble serving your tasty order. Please try again!<br />
        {err?.status + " : " + err?.statusText}
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleHomeClick}
          className="bg-[#f76c1b] text-white text-[16px] px-6 py-3 rounded-md shadow-lg shadow-[#f76c1b66] transition-colors duration-300 hover:bg-[#e55c0a]"
        >
          Home
        </button>
        <button
          onClick={handleRetry}
          className="bg-white text-[#f76c1b] border-2 border-[#f76c1b] text-[16px] px-6 py-3 rounded-md shadow-lg shadow-[#f76c1b33] hover:bg-[#fff3e6] transition-colors duration-300"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;