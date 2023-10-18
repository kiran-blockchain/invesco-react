import { useEffect } from "react";

const Header = (props) => {
    // //console.log("1. header loading.....");
    // //a hook that executes after loading the component
    // useEffect(() => {
    //     console.log("2. Loading completed...")
    // }, []);
    // //console.log("3. after effect");

    const buildNav = () => {
        return props.config.navItems.map((item, index) => {
            if (item.subItems && item.subItems.length>0) {
               return <li key={item.name} className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {item.name}
                    </a>
                    <ul className="dropdown-menu">
                        {item.subItems.map((sub, index) => {
                            return (
                                <li key={sub.name}><a className="dropdown-item" href="#">{sub.name}</a></li>
                            )
                        })}
                    </ul>
                </li>
            } else {
                return (
                    <li className="nav-item" key={item.index}>
                        <a className="nav-link" href="#">{item.name}</a>
                    </li>
                )
            }
        });
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"
                    href="#">{props.config.name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {buildNav()}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;