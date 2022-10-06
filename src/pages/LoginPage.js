import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Modal,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FormProvider, FTextField } from "../components/form/";

const defaultValues = {
  username: "vanhungnk11@gmail.com",
  password: "0502",
};

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const methods = useForm({
    defaultValues,
  });

  const { handleSubmit } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    let from = location.state?.from?.pathname || "/";
    let username = data.username;
    let password = data.password;

    auth.login(username, password, () => {
      navigate(from, { replace: true });
    });
  };

  function onDismiss() {
    navigate(-1);
  }

  return (
    <div>
      <Modal
        open={true}
        onClose={() => onDismiss()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            maxWidth: "95%",
            margin: "auto",
            padding: "40px",
            background:
              "linear-gradient(rgb(50, 50, 50) 0%, rgb(63, 63, 63) 40%, rgb(28, 28, 28) 150%), linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%)",
          }}
        >
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={1}
              marginBottom={2}
            >
              <LockOutlinedIcon
                style={{
                  backgroundColor: "#d74742",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  color: "black",
                }}
              />
              <Typography variant="h5" textAlign={"center"} mb={3}>
                Log in
              </Typography>
            </Stack>

            <Stack spacing={3}>
              <FTextField name="username" label="Username" />
              <FTextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ margin: "20px auto" }}
              style={{ textTransform: "uppercase" }}
            >
              Sign In
            </LoadingButton>
            <Stack
              sx={{
                display: { xs: "block", sm: "flex" },
              }}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              color="rgb(215, 71, 66)"
            >
              <Typography fontSize={"0.875rem"}>Forgot Password</Typography>
              <Typography fontSize={"0.875rem"}>
                Don't have an account? Sign up
              </Typography>
            </Stack>
          </FormProvider>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginPage;
