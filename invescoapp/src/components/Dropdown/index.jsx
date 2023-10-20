import { useState,memo } from "react";

const Dropdown = (props) => {
    console.log("dropdown loading....");
    const [data,setData] = useState("");
    const config = props.config;
    const buildOptions = () => {
        if (props.list && props.list.length > 0) {
            return props.list.map((item, index) => {
                return <option key={index} value={item.value}>{item.name}</option>
            })
        } else {
            return null;
        }
    };
    const handleChange =(e)=>{
       // props.handleChange(e);
        setData(e.target.value);
    };
    return (
        <div className="row mb-3">
            <label htmlFor={config.id}
                className="col-sm-2 col-form-label">{config.label}</label>
            <div className="col-sm-6">
                <select className="form-control" 
                id={config.id}
                name={config.name}
                value={data}
                onChange={handleChange}>
                    <option value="">{config.placeholder}</option>
                    {buildOptions()}
                </select>
            </div>
        </div>)
}
export default Dropdown;