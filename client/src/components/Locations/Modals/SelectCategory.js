import React from 'react';
import Select from 'react-select';

const SelectCategory = ({
  categories = [],
  setCategoryInput,
  categoryInput,
}) => {
  const categoriesOptions = categories.map((category) => ({
    value: category.name,
    label: category.name,
  }));
  console.log(categoryInput);
  return (
    <div>
      <Select
        value={categoriesOptions.filter(
          (option) => option.label === categoryInput
        )}
        className='basic-single'
        classNamePrefix='select'
        options={categoriesOptions}
        onChange={(value) => setCategoryInput(value.value)}
      />
    </div>
  );
};

export default SelectCategory;
