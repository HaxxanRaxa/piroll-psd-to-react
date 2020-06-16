import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import ROUTES from "../conts/routes"

class NavBar extends Component{
    render() {
        return(
            <div className={this.props.bg + " sticky-top"}>
                <nav className={this.props.bg + ' navbar navbar-expand-lg navbar-light container py-3 '}>
                    <a className="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + "/assets/img/logo.svg"} width="31"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <NavLink className="nav-item nav-link" exact activeClassName="active" to={ROUTES.home}>Home</NavLink>
                            <NavLink className="nav-item nav-link" activeClassName="active" to={ROUTES.about} >About</NavLink>
                            <NavLink className="nav-item nav-link" activeClassName="active" to={ROUTES.contact} >Contact</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
