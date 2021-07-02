import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button } from '@material-ui/core';

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Box className="main">
      <h1 className="main-title">My super form</h1>
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("fullName")}
          fullWidth
          label="Full Name"
          variant="outlined"
          margin="normal"
        />
        <TextField {...register("email")}
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          required
          margin="normal"
        />
        <TextField {...register("phoneNumber")}
          fullWidth
          type="text"
          field="phoneNumber"
          label="phone number"
          variant="outlined"
          margin="normal"
        />
        <TextField {...register("message")}
          multiline
          rows={5}
          fullWidth
          type="text"
          label="Message"
          variant="outlined"
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Box>

  );
};

export default ContactForm;