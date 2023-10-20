import { memo } from "react";

const Radio = (props) => {
    const {config} = props
    const handleChange = (e) => {
        console.log(e.target.value);
        props.handleChange(e);
    };
    const listOptions = config.options;
    const buildOptions = () => {
        return listOptions.map((item, index) => {
            return (<div className="form-check form-check-inline" key={item.id}>
                <input className="form-check-input"
                    type="radio"
                    name={config.name}
                    id={item.id}
                    value={item.value}
                    onChange={handleChange} />
                <label className="form-check-label"
                    htmlFor={item.id}>{item.label}</label>
            </div>
            )
        })
    }
    return (
        <>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">{config.label}</legend>
                <div className="col-sm-6">
                    {buildOptions()}
                </div>
            </fieldset>
        </>
    )
}
export default memo(Radio);