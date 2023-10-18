
import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Textbox from "../components/Textbox";
import { RegisterConfig } from "../config/register";
import axios from "axios";
import Radio from "../components/Radio";

const Register = () => {
    const [profile,setProfile] = useState({
        // Username:"",
        // Password:"",
        // ConfirmPassword:"",
        // Country:""
    });
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
   
    const captureChanges =(e)=>{
        //console.log(e.target.name+"="+e.target.value);
        let register = profile;
        register[e.target.name]=e.target.value;
        setProfile({...register});
        
    };
    return (

        <div className="container mt-5">
            <Textbox config={RegisterConfig.Username} 
            handleChange={captureChanges} />

            <Textbox 
            config={RegisterConfig.Password}
            handleChange={captureChanges}  />

            <Textbox 
            config={RegisterConfig.ConfirmPassword}
            handleChange={captureChanges} />
            
            <Dropdown 
                config={RegisterConfig.Country} 
                list={listOfCountries}
                handleChange={captureChanges}
             />
             <Radio  config={RegisterConfig.Gender} handleChange={captureChanges}/>
            <div className="mb-3">
                <button className="btn btn-primary">Register</button>
            </div>
            {
                JSON.stringify(profile)
            }
        </div>
    )
}
export default Register;