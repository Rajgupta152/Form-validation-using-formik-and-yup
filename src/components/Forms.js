import { TextField, Button, Radio, Select, MenuItem, Typography, Checkbox, Box } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { string, object, array } from "yup";

const Forms = (props) => {
  const [data, setData]  = useState([]);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      gender: '',
      country: '',
      courses: []
    },
    validationSchema: object({
      name: string().min(3,"Name must be greater than 3 character").required('Please enter your name'),
      email: string().email("Please enter valid email").required("Please enter email"),
      password: string().required("Please enter password").min(8,"Password is too short - should be 8 charcters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/,"Password requires a uppercase letter")
      .matches(/[^\w]/, "Password requires a special character"),
      gender: string().required("Please select your gender"),
      country: string().required("please select country"),
      courses: array().min(1,"Please choose at least 1 course")
      
    }),
    onSubmit: (values,{resetForm}) => {
      // console.log('FOrm submitted',values);
      data.push({
        id: Math.random().toString(),
        name: values.name,
        email: values.email,
        password: values.password,
        gender: values.gender,
        country: values.country,
        courses: values.courses
      })
      setData([...data]);
      // console.log(data);
      props.takeData(data);
      alert('Form submitted')
      resetForm();
    }
  })
  return(
        <Box className="wrapper">
            <form onSubmit={formik.handleSubmit}>
                <div className="input-wrapper">
                  <TextField className="text-field" name="name" value={formik.values.name} color="secondary" type="text" label="Enter your name" onChange={formik.handleChange}></TextField>
                  {formik.errors.name && <Typography color="error">{formik.errors.name}</Typography>}
                </div>
                <div className="input-wrapper">
                  <TextField className="text-field" name="email" value={formik.values.email} color="secondary" type="email" label="Enter your email" onChange={formik.handleChange}></TextField>
                  {formik.errors.email && <Typography color="error">{formik.errors.email}</Typography>}
                </div>
                <div className="input-wrapper">
                  <TextField className="text-field" name="password" value={formik.values.password} color="secondary" type="password" label="Enter your password" onChange={formik.handleChange}></TextField>
                  {formik.errors.password && <Typography color="error">{formik.errors.password}</Typography>}
                </div>
                <div className="input-wrapper">
                  <div>
                    <label>Gender</label>
                  </div>
                    <label>Male</label>
                    <Radio value="Male" name="gender" checked = {formik.values.gender === "Male"}  onChange={formik.handleChange}></Radio>
                    <label>Female</label>
                    <Radio value="Female" name="gender" checked = {formik.values.gender === "Female"}  onChange={formik.handleChange}></Radio>
                    <label>Others</label>
                    <Radio value="Others" name="gender" checked = {formik.values.gender === "Others"}  onChange={formik.handleChange}></Radio>
                    {formik.errors.gender && <Typography color="error">{formik.errors.gender}</Typography>}
                </div>

                <div className="input-wrapper">
                  <div>
                    <label>Select Country</label><br /><br />
                  </div>
                  <Select name="country" value={formik.values.country} onChange={formik.handleChange} label="select-country">
                    <MenuItem value="">Select Country</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>
                    <MenuItem value="England">England</MenuItem>
                  </Select>
                  {formik.errors.country && <Typography color="error">{formik.errors.country}</Typography>}
                </div>

                <div className="input-wrapper">
                  <div>
                    <label>Select Courses</label><br /><br />
                  </div>
                  <label>React</label>
                  <Checkbox size="small" name = "courses" value="React" onChange={formik.handleChange}
                  checked = {formik.values.courses.includes("React" )}></Checkbox>
                  <label>Node</label>
                  <Checkbox size="small" name = "courses" value="Node" onChange={formik.handleChange}
                  checked = {formik.values.courses.includes("Node" )}></Checkbox>
                   <label>Javascript</label>
                  <Checkbox size="small" name = "courses" value="Javascript" onChange={formik.handleChange}
                  checked = {formik.values.courses.includes("Javascript" )}></Checkbox>
                   <label>Css</label>
                  <Checkbox size="small" name = "courses" value="Css" onChange={formik.handleChange}
                  checked = {formik.values.courses.includes("Css" )}></Checkbox>
                  {formik.errors.courses && <Typography color="error">{formik.errors.courses}</Typography>}
                </div>

                <div className="btn-group">
                    <Button style={{width: '400px'}} type="submit" variant="contained" color="secondary">Submit</Button>
                </div>
            </form>
        </Box>
    )
}

export default Forms;