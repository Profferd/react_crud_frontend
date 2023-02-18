import React from "react";
import Input from '@mui/material/Input';

const NewInput = ({
                    value,
                    inputProps,
                    onChange,
                  }) => {

  return (
    <Input
      value={value}
      inputProps={inputProps}
      onChange={onChange}
      style={{width: '290px'}}
    />
  )
};

export default NewInput;
