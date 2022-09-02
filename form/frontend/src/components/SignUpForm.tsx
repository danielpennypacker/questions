import React from 'react';
import { useTheme } from "@mui/material/styles"
import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const PrettyForm = styled('form')({
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'
  });

const SpacedTextField = styled(TextField)({
    marginTop: '1rem'
});

function SignUpForm() {
  return (
    <div className='SignUpForm'>
        <PrettyForm>    
            <SpacedTextField label="First Name" variant="standard" />
            <SpacedTextField label="Last Name" variant="standard" />
            <SpacedTextField label="Email" variant="standard" />
            <SpacedTextField label="Password" variant="standard" type="password" />            
        </PrettyForm>
    </div>
  )
}

export default SignUpForm;