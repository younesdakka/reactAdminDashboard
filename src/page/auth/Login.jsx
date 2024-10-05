import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async ({ setIsLoggedIn }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.username === username);

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        localStorage.setItem("authToken", user.token);
        alert("Successfully logged in!");
        navigate("/dashboord");
        setIsLoggedIn(true);
      } else {
        alert("The password is incorrect.");
      }
    } else {
      alert("Username not found.");
    }
  };
  const goToSignup = () => {
    navigate("/");
  };
  return (
    <Container>
      <Typography variant="h4">Log in</Typography>
      <TextField
        label="User name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <Button color="secondary" onClick={goToSignup}>
        Create a new account 
      </Button>
    </Container>
  );
};

export default Login;
