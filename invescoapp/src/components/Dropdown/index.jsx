import { useState } from "react";

const Dropdown = (props) => {
    const [data,setData] = useState("")
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
        setData(e.target.value);
    };
    return (
        <div className="row mb-3">
            <label htmlFor={config.id}
                className="col-sm-2 col-form-label">{config.label}</label>
            <div className="col-sm-6">
                <select className="form-control" 
                value={data}
                onChange={handleChange}>
                    <option value="">{config.placeholder}</option>
                    {buildOptions()}
                </select>
            </div>
        </div>)
}
export default Dropdown;