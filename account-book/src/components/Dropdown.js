import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handelSelect = (option) => {
    setSelectedOption(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handelSelect(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div onClick={handleClick}>
        {!selectedOption ? "선택하기" : selectedOption.label}
      </div>
      {isOpen && <>{renderedOptions}</>}
    </>
  );
};

export default Dropdown;
