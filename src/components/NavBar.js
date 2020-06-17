import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import ROUTES from "../conts/routes"
import {Menu, X} from 'react-feather'

class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            ariaExpanded: false
        };
    }

    /**
     * hanle toggle navigation on mobile
     * @param e
     */
     toggleNavigation = (e) =>{
         const button = e.currentTarget;
         const navContainer = document.querySelector('.navbar-collapse.collapse');

        if (button.getAttribute('aria-expanded') === "false"){
            navContainer.classList.add('slide-left-to-right');

            button.setAttribute('aria-expanded', 'true');
            this.setState({ariaExpanded: true});
        }else {
            navContainer.classList.remove('slide-left-to-right');

            button.setAttribute('aria-expanded', 'false');
            this.setState({ariaExpanded: false});
        }

    };

    render() {
        return(
            <div className={this.props.bg + " sticky-top"}>
                <nav className={this.props.bg + ' navbar navbar-expand-md navbar-light container py-3 '}>
                    <a className="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + "/assets/img/logo.svg"} width="31"/></a>
                    <button className="navbar-toggler" type="button" onClick={this.toggleNavigation} aria-expanded="false">
                        {this.state.ariaExpanded ? <X/> :  <Menu/>}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <NavLink className="nav-item nav-link" exact activeClassName="active" to={ROUTES.home}>Home</NavLink>
                            <NavLink className="nav-item nav-link" exact activeClassName="active" to={ROUTES.about} >About</NavLink>
                            <NavLink className="nav-item nav-link" exact activeClassName="active" to={ROUTES.contact} >Contact</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
