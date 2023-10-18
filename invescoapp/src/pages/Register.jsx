
import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Textbox from "../components/Textbox";
import { RegisterConfig } from "../config/register";
import axios from "axios";

const Register = () => {
    const [listOfCountries, setCountries] = useState([]);
    const countryListUrl = "https://restcountries.com/v2/all";
    console.log("1.Register-i am before use effect");
    useEffect(() => {
        console.log("2. Register-i am loading before fetch");
        const fetchData = async () => {
            try {
                const result = await axios.get(countryListUrl);
                //[{name:"",value:""}]
                let convertedResult = result.data.map(x => {
                    return { name: x.name, value: x.alpha2Code }
                });
                setCountries(convertedResult);
            } catch (ex) {
                console.log("Error occurred");
            }
        };
        fetchData();
    }, []);
    console.log("4. After use Effect");
    return (
        <div className="container mt-5">
            <Textbox config={RegisterConfig.Username} />
            <Textbox config={RegisterConfig.Password} />
            <Textbox config={RegisterConfig.ConfirmPassword} />
            <Dropdown config={RegisterConfig.Country} list={listOfCountries} />
            <div className="mb-3">
                <button className="btn btn-primary">Register</button>
            </div>
        </div>
    )
}
export default Register;