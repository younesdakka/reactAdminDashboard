import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';
import { useForm } from "react-hook-form"

const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Maneger',
    label: 'Maneger',
  },
  {
    value: 'User',
    label: 'User',
  },

];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    console.log('data')
    handleClick()
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction={'row'}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "This field is rquired & min 3 character" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          name="firstName"
          sx={{ flex: 1 }} label="First Name" variant="filled" />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "This field is rquired & min 3 character" : null}
          {...register("lastName", { required: true, minLength: 3 })}
          name="lastName"
          sx={{ flex: 1 }} label="Last Name" variant="filled" />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={errors.email ? "Please provide a valid email" : null}
        {...register("email", { required: true, minLength: 3, pattern: emailRegex })}
        label="Email" variant="filled" name="email" />
      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={errors.contactNumber ? "Please provide a Phone Number" : null}
        {...register("contactNumber", { required: true, pattern: phoneRegex })}
        label="Contact Number" variant="filled" name="contactNumber" />
      <TextField label="Adress 1" variant="filled" name="Adress 1" />
      <TextField label="Adress 2" variant="filled" name="adress2" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="User" name="outlined-select-currency">
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: 'right' }}>
        <Button type='submit' variant='contained' sx={{ textTransform: 'capitalize' }}>
          Create New User
        </Button>

        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Account Created Sccessfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  )
}
export default Form;