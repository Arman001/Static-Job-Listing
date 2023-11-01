import React from "react";
import iconRemove from '../assets/images/icon-remove.svg';

const Filter = ({tag, setFilterTags}) => {
  const handleRemoveFilter = (tagToRemove)=>{
      setFilterTags((prev)=>prev.filter((item)=>item!==tagToRemove));
  }

  return (
    <div className="flex flex-row">
      <span className="max-w-fit h-8 p-2 bg-lightGrayishCyan2 text-desaturatedDarkCyan font-bold text-lg text-center ">
        {tag}
      </span>
      <img src={iconRemove} alt="remove" className=" bg-desaturatedDarkCyan object-contain p-2 cursor-pointer hover:bg-black" onClick={()=>{handleRemoveFilter(tag)}}/>
      
    </div>
  );
};

export default Filter;
