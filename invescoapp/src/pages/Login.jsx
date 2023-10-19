import Textbox from "../components/Textbox";
import { RegisterConfig } from "../config/register";
import { useProfile } from "../hooks/useProfile";

const Login = () => {
    const { captureChanges, login, status } = useProfile();
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
    return (
        <div className="container mt-5">
            <Textbox config={RegisterConfig.Username}
                handleChange={captureChanges} />
            <Textbox config={RegisterConfig.Password}
                handleChange={captureChanges} />
            {showError()}
            <div className="mb-3">
                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;