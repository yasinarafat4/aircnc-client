import React from "react";
import Heading from "../../components/Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Veluvana Bali - Owl Bamboo House"
        subtitle="Sidemen, Indonesia"
      />
      <div className="w-full md:h-[60vh] overflow-hidden">
        <img
          className="rounded-xl object-cover w-full"
          src="https://i.ibb.co/23hZFQD/details.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
