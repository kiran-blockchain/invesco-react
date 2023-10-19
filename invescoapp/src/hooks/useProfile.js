

import axios from "axios";
import { useState } from "react";

export const useProfile = () => {
    const [profile, setProfile] = useState({});
    const [status, setStatus] = useState({
        error:"",
        success:"",
        data:null
    });
    const captureChanges = (e) => {
        let data = profile;
        data[e.target.name] = e.target.value;
        setProfile({ ...data });
    };
    const login = async () => {
        try {
            const payload = {
                username: profile.Username,
                password: profile.Password
            };
            const result = await axios.post("https://fakestoreapi.com/auth/login", payload);
            console.log(result.data);
            setStatus({ ...status, success: "success", error: "", data: result.data })
        } catch (ex) {
            setStatus({ ...status, success: "", error: "Error in login", data: null })
        }

    };
    const register = () => {

    };
    return { profile, status, captureChanges, login, register }
};