import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const generateToken = () => {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
};
const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("The password and confirm password do not match.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert("The username already exists.");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const token = generateToken();
    const newUser = { username, password: hashedPassword, token };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    navigate("/dashboord");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <Container>
      <Typography variant="h4"> Create a new account </Typography>
      <TextField
        label="User name"
        variant="outlined"
        fullWidth
        name="username"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Create account
      </Button>
      <Button color="secondary" onClick={goToLogin}>
        Back to login
      </Button>
    </Container>
  );
};

export default Signup;
