import { useState } from "react";

const Textbox = (props) => {
    const config = props.config;
    const [data,setData]= useState("");
    const handleChange =(e)=>{
        console.log(e.target.name)
        //call the parent component callback
        props.handleChange(e);
        
        setData(e.target.value);
    }
    return (
    <div className="row mb-3">
        <label htmlFor={config.id}
            className="col-sm-2 col-form-label">{config.label}</label>
        <div className="col-sm-6">
            <input type={config.type}
                className="form-control"
                id={config.id}
                name={config.name}
                value={data}
                onChange={handleChange}
                placeholder={config.placeholder} />
        </div>
    </div>)
}
export default Textbox;