const Textbox = (props) => {
    const config = props.config;
    return (
    <div class="row mb-3">
        <label for={config.id}
            class="col-sm-2 col-form-label">{config.label}</label>
        <div class="col-sm-6">
            <input type={config.type}
                class="form-control"
                id={config.id}
                name={config.name}
                placeholder={config.placeholder} />
        </div>
    </div>)
}
export default Textbox;