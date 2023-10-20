import { useFormik } from "formik";

import * as yup from 'yup';
import {LoginSchema } from "../utils/loginSchema";
 const Login = () => {
    const formik = useFormik({
        initialValues: {
            Username: "",
            Password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            console.log(values);
        },

    })
    const handleChange =(e)=>{
        console.log("I am called");
        formik.handleChange(e);
    }
    return (
        <form>
            <div class="row mb-3">
                <label for="Username" class="col-sm-2 col-form-label">Enter Username</label>
                <div class="col-sm-3 " >
                    <input type="text" class="form-control" id="Username"
                        onChange={handleChange}
                        value={formik.values.Username}
                        name="Username" />
                    {formik.touched.Username && formik.errors.Username ?
                     (<div class="text-danger">
                        {formik.errors.Username}
                    </div>) : null}
                </div>
            </div>

            <div class="row mb-3">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-3">
                    <input type="password" class="form-control" id="Password"
                        name="Password"
                        onChange={formik.handleChange}
                        value={formik.values.Password} />
                    {formik.touched.Password && formik.errors.Password ? (<div class="text-danger">
                        {formik.errors.Password}
                    </div>) : null}
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-sm-3">
                    <button onClick={formik.handleSubmit} className="btn btn-success">Sign In</button>
                </div>
            </div>
            <h6>{JSON.stringify(formik.errors)}</h6>
        </form>

    )
};


export default Login;