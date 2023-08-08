import React, { useState } from "react";
import chroma from "chroma-js";
import CreatableSelect, { StylesConfig } from "react-select/creatable";
import "./App.css"

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "gross_margin", label: "Gross Margin" },
    { value: "payroll_bonus", label: "Payroll Bonus" },
    { value: "hosting_fees", label: "Hosting Fees" },
    { value: "discount", label: "Discount" },
    { value: "payroll_tax", label: "Payroll Tax" },
  ];

const reg = /[-+\*/\(\){}]/;
 const colourStyles = {
  
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    
    return {
      ...styles,
    };
  },
  multiValue: (styles, { data }) => {
    console.log(reg.test(data.value))
    return {
      ...styles,
      backgroundColor: reg.test(data.value) ? "transparent" :"#e6e6e6",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    display: reg.test(data.value) ? "none" :"flex"
  }),
}

  return (
    <div className="p-5">
      <h4>Formula Input</h4>
      <CreatableSelect
        className="React"
        classNamePrefix="my-select"
        value={selectedOptions}
        options={options}
        isMulti
        name="selectedOptions"
        onChange={(selectedOption) => {
          setSelectedOptions(selectedOption);
        }}
        styles={colourStyles}
      />
    </div>
  );
}

export default App;
