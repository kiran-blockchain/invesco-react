import Textbox from "../components/Textbox";
import { RegisterConfig } from "../config/register";

const Register = () => {
    return (
        <div className="container mt-5">
            <Textbox config ={RegisterConfig.Username}/>
            <Textbox config ={RegisterConfig.Password}/>
            <Textbox config ={RegisterConfig.ConfirmPassword}/>
            <div class="mb-3">
                <button className="btn btn-primary">Register</button>
            </div>
        </div>
    )
}
export default Register;