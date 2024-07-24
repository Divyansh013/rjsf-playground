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
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width="100%"
              height="100%"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 7c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C5.602 4 6.068 4 7 4h10c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C20 5.602 20 6.068 20 7M9 20h6M12 4v16"
              ></path>
            </svg>
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
          {props.schema.description}
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
          {props.schema.description}
        </div>
      </div>
    </div>
  );
};

const CustomRadioWidget = (props) => {
  const isChecked = (value) => props.value === value;

  return (
    <div className="my-[14px] w-[460px]">
      <div className="text-[.875rem] text-[#475467] tracking-wide">
        {props.required ? props.label + "*" : props.label}
      </div>
      <div className="my-[5px] w-[100%]">
        <div className="flex items-center space-x-8">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name={props.idSchema ? props.idSchema.$id : ''}
              value="Single"
              checked={isChecked("Single")}
              onChange={(e) => props.onChange(e.target.value)}
              className={`w-6 h-6 cursor-pointer appearance-none border-2 border-gray-300 rounded-full checked:bg-blue-500`}
            />
            <span className="text-[1rem]">Single</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name={props.idSchema ? props.idSchema.$id : ''}
              value="Multiple"
              checked={isChecked("Multiple")}
              onChange={(e) => props.onChange(e.target.value)}
              className={`w-6 h-6 cursor-pointer appearance-none border-2 border-gray-300 rounded-full checked:bg-blue-500`}
            />
            <span className="text-[1rem]">Multiple</span>
          </label>
        </div>
        <div className="text-[.75rem] text-[#475467] font-light mt-[7px] w-[92%]">
          {props.rawDescription}
        </div>
      </div>
    </div>
  );
};

const CustomIntWidget = (props) => {
  console.log("props", props);
  return (
    <div className="my-[14px] w-[460px]">
      <div className="text-[.875rem] text-[#475467] tracking-wide">
        {  props.required ?  props.label+"*" : props.label }
      </div>
      <div className="my-[5px] w-[100%]">
        <div className="border border-solid  border-[#CFD4DE] flex rounded-[4px] pb-[4px] w-[97%]">
          <div className="w-[100%] ml-[5%]">
            <input
              type="number"
              className="w-[100%] focus:outline-none text-[.75rem] h-[36px]" />
          </div>
        </div>
        <div className="text-[.75rem] text-[#475467] font-light mt-[7px] w-[92%]">
          {props.rawDescription}
        </div>
      </div>
    </div>
  );
};

const CustomDateWidget = (props) => {
  const [startDate, setStartDate] = useState(null);
  const handleChange = (date) => {
    setStartDate(date);
    props.onChange(date);
  };

  return (
    <div className="my-[14px] w-[460px]">
      <div className="text-[.875rem] text-[#475467] tracking-wide">
        {props.required ? props.label + "*" : props.label}
      </div>
      <div className="my-[5px] w-[100%]">
        <div className="border border-solid border-[#CFD4DE] flex rounded-[4px] pb-[4px] w-[97%]">
          <div className="w-[100%] ml-[4%]">
            <DatePicker
              className="w-[100%] focus:outline-none text-[.75rem] h-[36px]"
              selected={startDate}
              onChange={handleChange}
              placeholderText="Select a Date"
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

export const customWidgets = {
  TextWidget: CustomTextWidget,
  SelectWidget: CustomSelectWidget,
  RadioWidget: CustomRadioWidget,
  UpdownWidget: CustomIntWidget,
  AltDateWidget: CustomDateWidget,
};
