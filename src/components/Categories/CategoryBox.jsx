import React from "react";

const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="p-4 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
      <div className="cursor-pointer flex flex-col items-center justify-center gap-1">
        <Icon size={26} />
        <div className="text-lg font-medium">{label}</div>
      </div>
    </div>
  );
};

export default CategoryBox;
