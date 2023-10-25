import { useFormik } from "formik";

import * as yup from 'yup';
import { LoginSchema } from "../utils/loginSchema";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/AuthReducer";
const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector(x => x.auth);
    const formik = useFormik({
        initialValues: {
            Username: "",
            Password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            console.log(values);
            dispatch(LoginAction(values));
        }
    })
    const handleChange = (e) => {
        console.log("I am called");
        formik.handleChange(e);
    }
    const showLoading = () => {
        if (auth.isLoading) {
            return (<div class="progress">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{"width": "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>)
        } else { 
            return null 
        }
    };
    const showError =()=>{
        if (auth.error) {
            return (<label className="text-danger">{auth.error}</label>)
        } else { 
            return null 
        }
    }
    return (
        <form>
            {showLoading()}
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
                    {formik.touched.Password && formik.errors.Password ? (
                        <div class="text-danger">
                            {formik.errors.Password}
                        </div>) : null}
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-sm-3">
                    <button onClick={formik.handleSubmit}
                        className="btn btn-success">Sign In</button>
                </div>
            </div>
            {showError()}
        </form>

    )
};


export default Login;