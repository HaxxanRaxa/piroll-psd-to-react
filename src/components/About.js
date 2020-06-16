import React, {Component} from "react";
import MasterLayout from "./MasterLayout";

import {Briefcase, Clock, Star, Heart} from "react-feather";

class About extends Component {

    render() {
        return (
            <MasterLayout navBg="bg-white">
                {/* header */}
                <header className="py-5 d-flex align-items-center position-relative text-white text-center about-me" style={{backgroundImage: `url('/assets/img/header-about-me.jpg')`}}>
                    <div className="w-100 text-center text-white position-absolute">
                        <h2>Amelia Woods</h2>
                        <p className="freelancer-bio">I am a Graphic & Web Designer based in New York, specializing in User
                            Interface Design and Development.</p>
                    </div>
                </header>

                {/* testimonial */}
                <section className="testimonial p-5">
                    <div className="row py-3 justify-content-center mx-0 text-white">
                        <div className="col-lg-3 col-md-6 col-sm-12 row">
                            <div className="col-3">
                                <Briefcase size={40}/>
                            </div>
                            <div className="col-9">
                                <h6 className="mb-0">548</h6>
                                <p className="text-uppercase">Project Completed</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 row">
                            <div className="col-3">
                                <Clock size={40}/>
                            </div>
                            <div className="col-9">
                                <h6 className="mb-0">1465</h6>
                                <p className="text-uppercase">Work Hours</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 row">
                            <div className="col-3">
                                <Star size={40}/>
                            </div>
                            <div className="col-9">
                                <h6 className="mb-0">612</h6>
                                <p className="text-uppercase">Positive Feedback</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 row">
                            <div className="col-3">
                                <Heart size={40}/>
                            </div>
                            <div className="col-9">
                                <h6 className="mb-0">755</h6>
                                <p className="text-uppercase">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* introduction */}
                <section className="introduction">
                    <div className="row mx-0">
                        <div className="col-md-6 col-sm-12 bg-dark about-me-image" style={{backgroundImage: `url(/assets/img/about-me.jpg)`}}></div>
                        <div className="col-md-6 col-sm-12 px-5 py-5 bg-light text-center">
                            <div className="w-75 d-inline-block py-5 text-left">
                                <h3 className="text-left">About me</h3>
                                <p className="text-justify mb-5">
                                    Given let waters air sea had you'll, may seed abundantly fish.
                                    Were, you'll earth forth winged above brought. Own darkness
                                    they're him can't fourth sea place have.
                                    <br/><br/>
                                    So the above May stars cattle fruitful face shall. Tree it, winged.
                                    Every signs male firmament us. Morning him.
                                </p>
                                <img src={process.env.PUBLIC_URL + '/assets/img/signature.png'} alt="about me"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* need project*/}
                <section className="py-5 text-center need-project">
                    <h3 className="mb-4">Need a Project?</h3>
                    <p className="mb-4">
                        Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.
                    </p>
                    <br/>
                    <button className="btn text-uppercase theme-btn">Let's Talk</button>
                </section>
            </MasterLayout>
        )
    }
}

export default About;
