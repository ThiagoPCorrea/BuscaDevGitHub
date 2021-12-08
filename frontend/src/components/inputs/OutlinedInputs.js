import React from "react";
import { OutlinedInput, InputLabel, IconButton, InputAdornment,FormControl  } from '@mui/material';
import { VisibilityOff,Visibility,Email } from '@mui/icons-material';
// import EmailIcon from '@mui/icons-material/Email';

export const PasswordInput = ({id,label}) => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

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


export const TextInput = ({id,label}) => {
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor={id}>{label}</InputLabel>
          <OutlinedInput
            id={id}
            type='text'
            endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                  >
                        < Email/>
                  </IconButton>
                </InputAdornment>
            }
            label={label}
          />
       </FormControl>
    );
}