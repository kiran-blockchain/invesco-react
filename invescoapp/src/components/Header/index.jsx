import { useEffect } from "react";

const Header = (props) => {


    console.log("1. header loading.....");

    //a hook that executes after loading the component
    useEffect(() => {
        console.log("2. Loading completed...")
    }, []);
    console.log("3. after effect");

    const buildNav = () => {
        return props.config.navItems.map((item, index) => {
            if (item.subItems && item.subItems.length>0) {
               return <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {item.name}
                    </a>
                    <ul class="dropdown-menu">
                        {item.subItems.map((sub, index) => {
                            return (
                                <li><a class="dropdown-item" href="#">{sub.name}</a></li>
                            )
                        })}
                    </ul>
                </li>
            } else {
                return (
                    <li class="nav-item" key={item.index}>
                        <a class="nav-link" href="#">{item.name}</a>
                    </li>
                )
            }
        });
    }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand"
                    href="#">{props.config.name}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {buildNav()}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;