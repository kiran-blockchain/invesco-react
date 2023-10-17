const Dropdown = (props) => {
    const config = props.config;
    const buildOptions = () => {
        if (props.list && props.list.length > 0) {
            return props.list.map((item, index) => {
                return <option value={item.value}>{item.name}</option>
            })
        } else {
            return null;
        }
    };
    return (
        <div class="row mb-3">
            <label for={config.id}
                class="col-sm-2 col-form-label">{config.label}</label>
            <div class="col-sm-6">
                <select className="form-control">
                    <option value="">{config.placeholder}</option>
                    {buildOptions()}
                </select>
            </div>
        </div>)
}
export default Dropdown;