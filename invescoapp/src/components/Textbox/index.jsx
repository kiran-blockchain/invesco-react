import { memo, useState } from "react";

const Textbox = (props) => {
    const config = props.config;
    const formik = props.formik;
    //const [data, setData] = useState(formik.values[config.name]);
    const handleChange = (e) => {
        console.log(e.target.name)
       // setData(e.target.value);
        formik.handleChange(e);
        console.log(formik.errors[config.name]);

    }
    const showError = () => {
        if (formik.touched[config.name] && formik.errors[config.name]) {
          return  <div class="text-danger">
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
                    value={formik.values[config.name]}
                    onChange={handleChange}
                    placeholder={config.placeholder} />

            </div>
            {showError() }
        </div>)
}
export default Textbox;