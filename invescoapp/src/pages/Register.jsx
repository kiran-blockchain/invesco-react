
import Dropdown from "../components/Dropdown";
import Textbox from "../components/Textbox";
import { RegisterConfig } from "../config/register";

const Register = () => {
    const countryList = [{
        name:"India",
        value:"IN"
    },
{
    name:"United Kingdom",
    value:"UK"
},
{
    name:"United States of America",
    value:"USA"
},]
    return (
        <div className="container mt-5">
            <Textbox config ={RegisterConfig.Username}/>
            <Textbox config ={RegisterConfig.Password}/>
            <Textbox config ={RegisterConfig.ConfirmPassword}/>
            <Dropdown config={RegisterConfig.Country} list={countryList}/>
            <div class="mb-3">
                <button className="btn btn-primary">Register</button>
            </div>
        </div>
    )
}
export default Register;