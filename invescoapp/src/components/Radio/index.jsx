const Radio = (props) => {
    const {config} = props
    const handleChange = (e) => {
        console.log(e.target.value);
        props.handleChange(e);
    };
    const listOptions = config.options;
    const buildOptions = () => {
        return listOptions.map((item, index) => {
            return (<div class="form-check form-check-inline" key={item.id}>
                <input class="form-check-input"
                    type="radio"
                    name={config.name}
                    id={item.id}
                    value={item.value}
                    onChange={handleChange} />
                <label class="form-check-label"
                    htmlFor={item.id}>{item.label}</label>
            </div>
            )
        })
    }
    return (
        <>
            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">{config.label}</legend>
                <div class="col-sm-6">
                    {buildOptions()}
                </div>
            </fieldset>
        </>
    )
}
export default Radio;