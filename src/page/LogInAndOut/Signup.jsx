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
          alert("كلمة المرور وتأكيد كلمة المرور غير متطابقتين.");
          return;
        }
    const users = JSON.parse(localStorage.getItem("users")) || [];
     const userExists = users.some(user => user.username === username);
     if (userExists) {
       alert("اسم المستخدم موجود مسبقًا.");
       return;
     }

     const hashedPassword = await bcrypt.hash(password, 10);
 
    const token = generateToken();
    const newUser = { username, password: hashedPassword, token };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("تم إنشاء الحساب بنجاح!");
    navigate('/Dashboord')
    
  };
  const goToLogin=()=>{
    navigate('/Login')
  }
  return (
    <Container>
      <Typography variant="h4">إنشاء حساب جديد</Typography>
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
      <TextField
        label="تأكيد كلمة المرور"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSignup}>
        إنشاء الحساب
      </Button>
      <Button color="secondary"  onClick={goToLogin}>
        العودة لتسجيل الدخول
      </Button>
    </Container>
  );
};

export default Signup;
