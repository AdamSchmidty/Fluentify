import React, { useState } from 'react';
import Select from 'react-select'

//https://react-select.com/home


const DropdownMenu = ({ options, setSelectOption }) => {
    //Pass this to props

    const handleSelectChange = (selectedOption) => {
        setSelectOption(selectedOption.value.toLowerCase());
    };
    return (
        <div>
            <Select options={options} onChange={handleSelectChange} unstyled={false} />
        </div>
    );
};

export default DropdownMenu;
