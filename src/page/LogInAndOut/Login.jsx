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
        alert("تم تسجيل الدخول بنجاح!");
        navigate('/Dashboord')
        setIsLoggedIn(true);
      } else {
        alert("كلمة المرور غير صحيحة.");
      }
    } else {
      alert("اسم المستخدم غير موجود.");
    }
  };
  const goToSignup = () => {
    navigate('/')
  }
  return (
    <Container>
      <Typography variant="h4">تسجيل الدخول</Typography>
      <TextField
        label="اسم المستخدم"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="كلمة المرور"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        تسجيل الدخول
      </Button>
      <Button color="secondary" onClick={goToSignup}>
        إنشاء حساب جديد
      </Button>
    </Container>
  );
};

export default Login;
