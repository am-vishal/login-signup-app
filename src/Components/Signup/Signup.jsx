import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Grid,
  Input,
  TextField,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import FormError from "./FormError";
import useStyles from "./SignupFormStyles";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const watchPassword = watch("password", "");
  // watch input value by passing the name of it
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    history.push("/login");
  };

  const [value, setValue] = useState("male");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: "#85FFBD",
        // backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        backgroundImage:
          "linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )",
        height: "100vh",
        // "radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,0.5) 90.1% )",
        width: "100%",
      }}
    >
      <Container
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "45%" }}>
          <Grid item xs={12} className={classes.formField}>
            <Controller
              name="firstname"
              control={control}
              rules={{
                required: "First Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Please enter a valid name",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.inputField}
                  required
                  fullWidth
                  id="outlined-required"
                  label="First Name"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} className={classes.formField}>
            <Controller
              name="lastname"
              control={control}
              rules={{
                required: "Last Name is required",
                pattern: {
                  value: /^[A-Z]+$/i,
                  message: "Please enter a valid name",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.inputField}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Last Name"
                  variant="outlined"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} className={classes.formField}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email id",
                },
              }}
              // {/* field your input into the hook by invoking the "field" function */}
              // <Input   fullWidth />
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.inputField}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Email Address"
                  variant="outlined"
                />
              )}
            />
            {/* errors will return when field validation fails  */}
            <FormError>{errors.email?.message}</FormError>
          </Grid>
          <Grid item xs={12} className={classes.formField}>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters",
                },
                pattern: {
                  value:
                    /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{6,32}$/,
                  message:
                    "Password must include an uppercase, lowercase, special character and a number",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={"password"}
                  label="Password"
                  variant="outlined"
                  className={classes.inputField}
                  required
                  fullWidth
                  id="outlined-required"
                />
              )}
            />
            <FormError>{errors.password?.message}</FormError>
          </Grid>
          <Grid item xs={12} className={classes.formField}>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                validate: (value) =>
                  value === watchPassword || "The passwords do not match",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={"password"}
                  label="Confirm Password"
                  variant="outlined"
                  className={classes.inputField}
                  required
                  fullWidth
                  id="outlined-required"
                />
              )}
            />
            <FormError>{errors.confirmPassword?.message}</FormError>
          </Grid>

          <Grid item xs={12} style={{ marginTop: "1em" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid style={{ display: "grid", placeItems: "center" }}>
            <input
              type="submit"
              style={{
                color: "#000",
                background: "#96D4D4",
                marginTop: "2em",
                borderRadius: "8px",
                padding: "10px",
                fontWeight: "bold",
                fontSize: "24px",
                letterSpacing: "1px",
              }}
            />
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
