import React from 'react';

const CustomTextWidget = (props) => {
  return (
    <div className="my-[14px] w-[460px]">
      <div className="text-[.875rem] text-[#475467] tracking-wide">
        {props.required ? props.label + "*" : props.label}
      </div>
      <div className="my-[5px] w-[100%]">
        <div className="border border-solid border-[#CFD4DE] flex rounded-[4px] pb-[4px] w-[97%] focus-within:outline focus-within:outline-2 focus-within:outline-indigo-500">
          <div className="w-[8%] flex flex-row items-center justify-center">
          </div>
          <div className="w-[89%]">
            <input
              type="text"
              className="w-[100%] focus:outline-none text-lg text-[#475467] h-[36px]"
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
            />
          </div>
        </div>
        <div className="text-[.75rem] text-[#475467] font-light mt-[7px] w-[92%]">
          {props.rawDescription}
        </div>
      </div>
    </div>
  );
};

const CustomSelectWidget = (props) => {
  return (
    <div className="my-[14px] w-[460px]">
      <div className="text-[.875rem] text-[#475467] tracking-wide">
        {props.required ? props.label + "*" : props.label}
      </div>
      <div className="my-[5px] w-[100%]">
        <div className="border border-solid border-[#CFD4DE] flex rounded-[4px] w-[97%] focus-within:outline focus-within:outline-2 focus-within:outline-indigo-500">
          <div className="w-[100%] ml-[4%]">
            <select
              className="w-[100%] focus:outline-none text-lg text-[#475467] h-[36px]"
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
            >
              {props.options.enumOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-[.75rem] text-[#475467] font-light mt-[7px] w-[92%]">
          {props.rawDescription}
        </div>
      </div>
    </div>
  );
};

export const customWidgets = {
  TextWidget: CustomTextWidget,
  SelectWidget: CustomSelectWidget,
};
