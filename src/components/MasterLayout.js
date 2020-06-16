import React,{Component} from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

class MasterLayout extends Component{
    render() {

        return(
            <div className="container-fluid px-0">
                <NavBar bg={this.props.navBg}/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
export default MasterLayout;
