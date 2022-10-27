import { useState, useReducer, useContext, useEffect } from "react";
import * as Yup from "yup";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../customThemes";
import CancleIcon from "../icons/CancleIcon";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { useCookies } from "react-cookie";
import MailVerification from "../UI/MailVerification";
import AuthContext from "../../context/auth-context";
const inputCss = {
  "& input::placeholder": {
    fontStyle: "normal",
    fontweight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.15px",
    color: "#D9D9D9",
  },
};

const containerCss = {
  padding: "16px 20px",
  width: { xs: "auto%", xl: "597px" },
  height: "88px",
};

const container = {
  padding: "20px 25px 0px",
  position: "relative",
  width: { xs: "80%", xl: "647px" },
  height: "614px",
  margin: "150px auto",
  background: "#FFFFFF",
  border: " 2px solid #2776EA",
};

const initialActions = { isLoading: false, data: null };
const reducer = (state, action) => {
  switch (action.type) {
    case "initial":
      return { isLoading: true, data: state.data };
    case "success":
      return { isLoading: false, data: action.response };
    case "error":
      return { isLoading: false, data: action.response };
    case "reset":
      return { isLoading: false, data: action.response };

    default:
      return initialActions;
  }
};

const AuthForm = () => {
  const [actions, dispatchFN] = useReducer(reducer, initialActions);

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  //context
  const login = useContext(AuthContext);

  //navigate after register

  const [cookies] = useCookies();
  //validation
  const validate = Yup.object({
    email: Yup.string("Email is invalid").email(),
    password: Yup.string().required("Password is required"),
    password2: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const registeration = (values) => {
    dispatchFN({ type: "initial" });

    let formdata = new FormData(),
      url;
    if (isLogin) {
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      url = `${window.domain}auth/token/login/`;
    } else {
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      formdata.append("password2", values.password2);
      url = `${window.domain}register/`;
    }

    var myHeaders = new Headers();
    myHeaders.append("Cookie", `messages=${cookies.messages}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatchFN({ type: "success", response: result });
        if (isLogin && result.results.auth_token) {
          login.login(result.results.auth_token);
        }
      })
      .catch((error) => {
        dispatchFN({ type: "error", response: error.message });
      });
  };

  //submit Handler

  const { values, errors, touched, handlerBlur, handleChange } = useFormik({
    initialValues: { email: "", password: "", password2: "" },
    validationSchema: validate,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    registeration(values);
  };

  //main page route
  const routeHandler = () => {
    setIsLogin((prevState) => !prevState);
    dispatchFN({ type: "reset", response: null });
  };
  //
  if (actions.data && actions.data.message && !isLogin) {
    return (
      <MailVerification
        message={actions.data.message}
        setIsLogin={setIsLogin}
      />
    );
  }

  if (
    actions.data &&
    actions.data.message &&
    actions.data.status === 200 &&
    isLogin &&
    localStorage.getItem("token") &&
    localStorage.getItem("token") !== undefined
  ) {
    navigate("/dashboard");
    //console.log(actions.data);
  }

  return (
    <Box component="section" sx={container}>
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "20px",
          height: "20px",
        }}
      >
        <CancleIcon />
      </Box>
      <Typography
        variant="h5"
        component="h1"
        sx={{
          color: "custom.main",
          fontSize: "30px",
          fontWeight: 700,
          textAlign: "center",
          padding: "36px 16px 36px 16px",
          lineHeight: "133.4%",
        }}
      >
        Create an Account
      </Typography>

      <form onSubmit={onSubmit}>
        <Box sx={containerCss}>
          <TextField
            name="email"
            id="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handlerBlur}
            variant="outlined"
            type="email"
            placeholder="Enter here"
            fullWidth
            focused
            autoComplete="off"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="input-error"> {errors.email} </p>
          )}
          {actions.data && actions.data.email && (
            <p className="input-error"> {actions.data.email[0]} </p>
          )}
        </Box>
        <Box sx={containerCss}>
          <TextField
            name="password"
            id="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handlerBlur}
            variant="outlined"
            type="password"
            placeholder="Enter here"
            fullWidth
            focused
            autoComplete="off"
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="input-error"> {errors.password} </p>
          )}
          {actions.data && actions.data.password && (
            <p className="input-error"> {actions.data.password[0]} </p>
          )}
        </Box>
        {!isLogin && (
          <Box sx={containerCss}>
            <TextField
              name="password2"
              id="password2"
              label="Confirm Password"
              value={values.password2}
              onChange={handleChange}
              onBlur={handlerBlur}
              variant="outlined"
              type="password"
              placeholder="Enter here"
              fullWidth
              focused
              autoComplete="off"
              className={errors.password2 ? "input-error" : ""}
            />
            {errors.password2 && touched.password2 && (
              <p className="input-error"> {errors.password2} </p>
            )}
            {actions.data && actions.data.password2 && (
              <p className="input-error"> {actions.data.password2[0]} </p>
            )}
          </Box>
        )}
        {actions.data &&
          actions.data.message &&
          actions.data.status !== 200 &&
          !actions.data.message.includes("Thank") && (
            <p className="input-error" style={{ textAlign: "center" }}>
              {" "}
              {actions.data.message}{" "}
            </p>
          )}
        <Box sx={containerCss}>
          {!actions.isLoading && (
            <CustomButton
              type="submit"
              variant="contained"
              sx={{
                width: 1,
                height: "55px",
              }}
            >
              {isLogin ? "SIGN IN" : "SIGN UP"}
            </CustomButton>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "0px 20px",
            width: { xs: "auto", xl: "597px" },
            height: "55px",
          }}
        >
          {!actions.isLoading && (
            <Button
              onClick={routeHandler}
              underline="always"
              sx={{
                textAlign: "center",
                letterSpacing: "0.46px",
                color: "custom.main",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "26px",
                margin: "auto",
                cursor: "pointer",
              }}
            >
              {isLogin ? "Create new account" : "Already have an account?"}
            </Button>
          )}
        </Box>
        {actions.isLoading && (
          <Typography sx={{ textAlign: "center", fontSize: "22px" }}>
            Wait...
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default AuthForm;
