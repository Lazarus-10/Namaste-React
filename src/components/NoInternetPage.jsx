import noInternetImage from "url:../assets/img/no-internet.png";

const NoInternetPage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#fff8f0] px-5 text-center font-[Poppins]">
      <img
        src={noInternetImage}
        alt="No Internet Connection"
        className="w-20"
      />
      <h1 className="text-[28px] text-[#f76c1b] mb-2">No Internet Connection</h1>
      <p className="text-[16px] text-[#555] mb-8 max-w-[320px]">
        It seems you are offline. Please check your connection and try again.
      </p>
      <button
        onClick={handleRetry}
        className="bg-[#f76c1b] text-white text-[16px] px-6 py-3 rounded-md shadow-lg shadow-[#f76c1b66] transition-colors duration-300 hover:bg-[#e55c0a]"
      >
        Retry
      </button>
    </div>
  );
};

export default NoInternetPage;