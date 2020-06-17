import React,{Component} from "react";
import MasterLayout from "./MasterLayout";

class Contact extends Component{

    render() {
        return(
            <MasterLayout navBg="bg-white" bg="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 py-5">
                            <h4 className='mb-3'>Contact Info:</h4>
                            <p className="mb-3 text-justify">
                                To give give beginning divide, cattle. Give moving
                                won't, there the abundantly she'd she'd brought air
                                upon. Light hath subdue. Life days creature upon
                                first heaven gathering dry.
                            </p>
                            <div className="mb-2">
                                <strong>Address:</strong> 1011 Santa Monica Boulevard, LA
                            </div>
                            <div className="mb-2">
                                <strong>Phone:</strong> +92-331-4173882
                            </div>
                            <div className="mb-2">
                                <strong>Email:</strong> info@hassanraza.net
                            </div>
                            <div className="mb-2">
                                <strong>Fax:</strong> +92-331-4173882
                            </div>
                        </div>
                        <div className="col-md-7 py-5 px-0">
                            <form action="" method="">
                                <div className="row mx-0">
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="Your Name" className="form-control form-control-theme"/>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" placeholder="Your Email" className="form-control form-control-theme"/>
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="text" placeholder="Your Title" className="form-control form-control-theme"/>
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea className="form-control form-control-theme" placeholder="Your Comment" rows="5"></textarea>
                                    </div>
                                    <div className="col-12 form-group">
                                        <button type="submit" className="btn theme-btn text-uppercase">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="pb-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817839112!2d74.05418918633279!3d31.483220874943807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1592242385676!5m2!1sen!2s"
                            width="100%" height="350" frameBorder="0" style={{border: 0}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </MasterLayout>
        )
    }
}

export default Contact
