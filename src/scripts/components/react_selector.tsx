import React, { useState } from 'react';

import Select from 'react-select';


export default ({options}:any) => {
const [isClearable, setIsClearable] = useState(false);
const [isSearchable, setIsSearchable] = useState(true);
const [isDisabled, setIsDisabled] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [isRtl, setIsRtl] = useState(false);


    return (
    <>
        <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={options}
        />
    </>
    );
    };