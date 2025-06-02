import noResultImage from "url:../assets/img/search.png";

const NoResults = ({ searchText }) => {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10 text-center font-[Poppins]">
      <img
        src={noResultImage}
        alt="No results"
        className="w-24 opacity-80"
      />
      <h2 className="text-[22px] text-[#f76c1b] mb-2">No restaurants found</h2>
      <p className="text-[16px] text-[#555] max-w-[320px]">
        We couldn’t find anything matching <strong>"{searchText}"</strong>.<br />
        Try searching with a different name.
      </p>
    </div>
  );
};

export default NoResults;
