
import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Textbox from "../components/Textbox";
import { RegisterConfig } from "../config/register";

const Register = () => {
    const [listOfCountries,setCountries]= useState([]);
    console.log("1.Register-i am before use effect");
    useEffect(()=>{
        console.log("2. Register-i am loading before fetch");
        fetch("https://restcountries.com/v2/all").then(response=>{
            return response.json()
        }).then(result=>{
            
            let convertedResult = result.map(x=>{
                return {name:x.name,value:x.alpha2Code}
            });
            //console.log(convertedResult);
            //use call back method setCountries to update the state.
            setCountries(convertedResult);
            console.log("3.Register-i am after setting the state");

        }).catch(ex=>{
            console.log(ex);
        })
    },[]);
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