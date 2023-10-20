import { useFormik } from "formik";
import Textbox from "../components/Textbox";
import { RegisterConfig } from "../config/register";
import { useProfile } from "../hooks/useProfile";
import { LoginSchema } from "../utils/loginSchema";

const Login = () => {
    const { captureChanges, login, status } = useProfile();
    const formik = useFormik({
        initialValues: {
            Username: "",
            Password: "",
   
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            console.log(values);
        },
    })
    const showError = () => {
        if (status.error != '') {
            return (
                <div className=" col-sm-6 mb-3">
                    <label className=" text-danger">
                        Invalid username or password
                    </label>
                </div>)
        } else {
            return null;
        }
    }
    const handleChange =(e)=>{
        //formik.handleChange(e);
    }
    return (
        <form className="container mt-5">
            <Textbox config={RegisterConfig.Username}
                handleChange={handleChange} 
                formik={formik}/>

            <Textbox config={RegisterConfig.Password}
               handleChange={handleChange} 
                formik={formik}/>
            {showError()}
            <div className="mb-3">
                <button className="btn btn-primary" onClick={formik.handleSubmit}>Login</button>
            </div>
        </form>
    )
}

export default Login;