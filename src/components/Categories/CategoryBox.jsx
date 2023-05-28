import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  const navigate = useNavigate();

  // Category handler
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };

  console.log(value);
  return (
    <div
      onClick={handleClick}
      className="p-4 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500"
    >
      <div className="cursor-pointer flex flex-col items-center justify-center gap-1">
        <Icon size={26} />
        <div className="text-lg font-medium">{label}</div>
      </div>
    </div>
  );
};

export default CategoryBox;
