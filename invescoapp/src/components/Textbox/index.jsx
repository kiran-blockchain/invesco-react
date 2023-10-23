import { memo, useState } from "react";

const Textbox = (props) => {
    const config = props.config;
    const formik = props.formik;

    // const handleChange = (e) => {
    //     console.log(e.target.name)
    //     props
    //    //formik.handleChange(e);

    // }
    const showError = () => {
       
            if (formik.errors[config.name]) {
                return <div class="col-sm-6 text-danger">
                    {formik.errors[config.name]}
                </div>
            } else {
                return null
            }
        
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
                    onBlur={formik.handleBlur}
                    value={formik.values[config.name]}
                    onChange={props.handleChange}
                    placeholder={config.placeholder} />

            </div>
            {showError()}
        </div>)
}
export default Textbox;