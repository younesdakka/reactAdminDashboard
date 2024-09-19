import { useState } from "react";



const Task = ()=>{
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.username) {
      tempErrors.username = "اسم المستخدم مطلوب";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "البريد الإلكتروني مطلوب";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "صيغة البريد الإلكتروني غير صحيحة";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "كلمة المرور مطلوبة";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "كلمة المرور يجب أن تكون على الأقل 6 أحرف";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmittedData([...submittedData, formData]);

    
      console.log("All Data: ", [...submittedData, formData]);

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>اسم المستخدم:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
        </div>

        <div>
          <label>البريد الإلكتروني:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <label>كلمة المرور:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>

        <button type="submit">إرسال</button>
      </form>
    </div>
  );
};
export default Task;
