import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button } from '@material-ui/core';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const validationSchema = yup.object().shape({
  fullName: yup.string()
    .min(3, "Your name should be at least 3 characters")
    .max(50, "Your name can not exceed 50 characters")
    .required("Please enter your name")
    .matches(/^[A-Za-z\s]+$/, "Only alphabetical characters allowed"),
  email: yup.string()
    .min(5)
    .max(50)
    .email("This is not an email, please try again")
    .required("Please enter a proper email"),
  phoneNumber: yup.string()
    .min(10, "phone number should be at least 10 characters")
    .max(20)
    .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Phone number should be 0-9 characters"),
  message: yup.string()
    .min(5, "Please say Hello or any 5 characters ಥ_ಥ ")
    .max(500)
    .matches(/^[^<>]+$/, "Please do not use funny characters < ^__ ^ >")
    .required("Don't forget to enter your message ;)"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className="main">
      <h1 className="main-title">My super form</h1>
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>

        <TextField className="form-control is-invalid" {...register("fullName")}
          fullWidth
          name="fullName"
          label="Your name"
          variant="outlined"
          margin="normal"
          error={errors.fullname}
        />
        {errors.fullName && <p className="invalidInput">{errors.fullName.message}</p>}

        <TextField {...register("email")}
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          error={errors.email}
        />
        {errors.email && <p className="invalidInput">{errors.email.message}</p>}

        <TextField {...register("phoneNumber")}
          fullWidth
          name="phoneNumber"
          label="Phone number"
          variant="outlined"
          margin="normal"
          error={errors.phoneNumber}
        />
        {errors.phoneNumber && <p className="invalidInput">{errors.phoneNumber.message}</p>}

        <TextField {...register("message")}
          multiline
          rows={5}
          fullWidth
          name="message"
          label="Message"
          variant="outlined"
          margin="normal"
          error={errors.message}
        />
        {errors.message && <p className="invalidInput">{errors.message.message}</p>}

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