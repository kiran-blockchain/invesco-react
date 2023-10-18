const Increment = (props) => {
    console.log("Rendering Increment Component");
    return (
        <button name="btnIncrement"
            className="btn btn-primary"
            onClick={props.handleClick}>Increment</button>
    )
};

export default Increment;