import { memo, useState } from "react";

const Textbox = (props) => {
    const config = props.config;
    const [data,setData]= useState("");
    const formik = props.formik;
    const handleChange =(e)=>{
        console.log(e.target.name)
        //call the parent component callback
       // props.handleChange(e);
       formik.handleChange(e);
        
        //setData(e.target.value);
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
                value={formik.values[config.name]}
                onChange={handleChange}
                placeholder={config.placeholder} />
                 {formik.touched[config.name] && formik.errors[config.name] ?
                     (<div class="text-danger">
                        {formik.errors[config.name]}
                    </div>) : null}
        </div>
    </div>)
}
export default memo(Textbox);