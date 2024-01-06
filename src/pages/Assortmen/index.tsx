import React from "react";
import { Img, List, Text } from "components";
import Header from "components/Header";
import ItemCard from "components/ItemCard";

const AssortmenPage: React.FC = () => {
  return (
    <>
      <div className="bg-indigo-A100 flex flex-col font-balootamma items-center justify-start mx-auto pb-2.5 pr-2.5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1910px] mb-[395px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[67px] items-center justify-start mt-[31px] w-[86%] md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[75px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
              orientation="horizontal"
            >
              <ItemCard />
              <ItemCard />
            </List>
            <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
              <ItemCard />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-3 w-[64%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase"
              size="txtBalooTammaRegular24"
            >
              pants
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase"
              size="txtBalooTammaRegular24"
            >
              shirt
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase"
              size="txtBalooTammaRegular24"
            >
              jacket
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssortmenPage;
