import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { blue } from "@mui/material/colors";
export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Password: "",
  });
  const [open, setOpen] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log(formData);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Box
        component={"form"}
        sx={{
          backgroundColor: blue[100],
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 1,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ m: 2, backgroundColor: blue[400] }}
          value={formData.name}
          onChange={(e) =>
            setFormData((oldData) => ({ ...oldData, name: e.target.value }))
          }
        />
        <TextField
          className=""
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          type="email"
          sx={{ m: 2, backgroundColor: blue[400] }}
          value={formData.email}
          onChange={(e) =>
            setFormData((oldData) => ({ ...oldData, email: e.target.value }))
          }
        />

        <FormControl
          variant="outlined"
          sx={{ m: 2, backgroundColor: blue[400] }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={formData.Password}
            onChange={(e) =>
              setFormData((oldData) => ({
                ...oldData,
                Password: e.target.value,
              }))
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button variant="contained" type="submit" sx={{ m: 2 }}>
          Submit
        </Button>

        <Snackbar
          sx={{ width: "100%" }}
          open={open}
          onClose={handleClose}
          autoHideDuration={3000}
        >
          <Alert variant="filled" severity="success">
            This is a filled success Alert.
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
