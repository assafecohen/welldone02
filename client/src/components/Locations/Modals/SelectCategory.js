import React from 'react';
import MultiSelect from 'react-multi-select-component';

const SelectCategory = ({ categories, setCategoryInput, categoryInput }) => {
  const categoriesOptions = categories.map((category) => ({
    value: category.name,
    label: category.name,
  }));
  return (
    <div>
      <MultiSelect
        options={categoriesOptions}
        value={categoryInput}
        onChange={(value) => setCategoryInput(value)}
        labelledBy={'Select'}
      />
    </div>
  );
};

export default SelectCategory;
