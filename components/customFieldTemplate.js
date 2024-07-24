import React from 'react';

const CustomFieldTemplate = (props) => {
  const { id, classNames, label, help, required, description, errors, children } = props;
  return (
    <div className={classNames}>
      <label htmlFor={id}>
        {label}
        {required ? "*" : null}
      </label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
};

export default CustomFieldTemplate;
