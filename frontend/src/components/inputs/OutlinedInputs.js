import React from "react";
import { OutlinedInput, InputLabel, IconButton, InputAdornment,FormControl  } from '@mui/material';
import { VisibilityOff,Visibility } from '@mui/icons-material';

export const PasswordInput = ({id,label,values,setValues}) => {
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor={id}>{label}</InputLabel>
          <OutlinedInput
            id={id}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Mudar visibilidade da senha"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
          />
       </FormControl>
    );
}


export const TextInput = ({id,label,icon,onChange}) => {
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor={id}>{label}</InputLabel>
          <OutlinedInput
            id={id}
            type='text'
            endAdornment={
                <InputAdornment position="end">
                    {icon}
                </InputAdornment>
            }
            label={label}
            onChange={onChange}
          />
       </FormControl>
    );
}