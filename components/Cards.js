import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((items, index) => (
        <div key={index} className="flex flex-col border ">
          <Image src={items.image} width={500} height={250} alt="dkl" />

          <div>
            <p>{items.title}</p>
            <span>price:{items.price}</span>
          </div>
          <Button variant="contained" className="bg-[#f04f72]">
            Buy Now
          </Button>
        </div>
      ))}
    </>
  );
};
export default Cards;
