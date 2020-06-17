import React,{Component} from "react";

class Footer extends Component{

    render() {
        return(
            <footer className="bg-black py-5 text-white">
                <div className="container">
                    <div className="row mx-0">
                        <div className="col-lg-5 col-md-12 mb-3">
                            <h5>Piroll Design. Inc</h5>
                            <p className="mb-0">
                                <span dangerouslySetInnerHTML={{"__html": "&copy;"}}></span> Piroll. All rights reserved.
                            </p>
                            <p>
                                Developed in React by Hassan Raza
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-12 mb-3">
                            <a className="text-white" href="mailto:info@hassanraza.net">info@hassanraza.net</a> <br/>
                            <a className="text-white" href="tel:+923314173882">+92-331-4173882</a>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="row">
                                <div className="col-4">
                                    <ul className="list-unstyled">
                                        <li><a href="/projects" className="text-white">Projects</a></li>
                                        <li><a href="/about" className="text-white">About</a></li>
                                        <li><a href="/services" className="text-white">Services</a></li>
                                        <li><a href="/career" className="text-white">Career</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list-unstyled">
                                        <li><a href="/news" className="text-white">News</a></li>
                                        <li><a href="/events" className="text-white">Events</a></li>
                                        <li><a href="/contact" className="text-white">Contact</a></li>
                                        <li><a href="/legals" className="text-white">Legals</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list-unstyled">
                                        <li><a href="https://facebook.com/hassanraza.bsse" className="text-white">Facebook</a></li>
                                        <li><a href="https://twitter.com/imHaxxanRaxa" className="text-white">Twitter</a></li>
                                        <li><a href="https://instagram.com/_haxxan_raxa" className="text-white">Instagram</a></li>
                                        <li><a href="http://github.com/haxxanraxa" className="text-white">GitHub</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
