
import { useCallback, useEffect, useState } from "react";

import Textbox from "../components/Textbox";
import { RegisterConfig } from "../config/register";
import axios from "axios";
import Radio from "../components/Radio";
import { useProfile } from "../hooks/useProfile";
import Dropdown from "../components/Dropdown";
import { useFormik } from "formik";
import { RegisterSchema } from "../utils/registerSchema";

const Register = () => {
    const formik = useFormik({
        initialValues: {
            Username: "",
            Password: "",
            ConfirmPassword:"",
            Firstname:"kiran",
            LastName:"kiran",
            Country:""
        },
        validationSchema: RegisterSchema,
        onSubmit: values => {
            //console.log(values);
            register(values)
        }
    });

    const { captureChanges, register, status } = useProfile();
    const showError = () => {
        if (status.error != '') {
            return (
                <div className=" col-sm-6 mb-3">
                    <label className=" text-danger">
                        Unable to register.
                    </label>
                </div>)
        } else {
            return null;
        }
    }
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
  
    const handleChangeOnCallback = useCallback((e)=>{
        formik.handleChange(e);
        captureChanges(e);
    },[])
    
    return (

        <form className="container mt-5">
            <Textbox 
            config={RegisterConfig.Username}
            handleChange={handleChangeOnCallback}
            formik={formik} />

            <Textbox
                config={RegisterConfig.Password}
                handleChange={handleChangeOnCallback} 
                formik={formik}/>

            <Textbox
                config={RegisterConfig.ConfirmPassword}
                handleChange={handleChangeOnCallback}
                formik={formik} />

            <Dropdown
                config={RegisterConfig.Country}
                list={listOfCountries}
                handleChange={handleChangeOnCallback}
                formik={formik}
            />
            <Radio config={RegisterConfig.Gender} 
            handleChange={handleChangeOnCallback} />
            {showError()}
            <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={e=>{
                    console.log(formik.isValid);
                    if(formik.isValid){
                        register(formik.values);
                    }
                }}>Register</button>
            </div>

        </form>
    )
}
export default Register;