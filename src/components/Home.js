import React, {Component} from 'react';
import MasterLayout from "./MasterLayout";
import axios from 'axios'

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            portfolioItems: []
        };
    }

    componentDidMount() {
        axios.get('/apis/portfolio-items.json').then(res => {
            this.setState({portfolioItems: res.data});
        })
    }

    /**
     * handle hover effect
     */
    portfolioItemHoverEffect = (e) => {
        const targetElement = e.currentTarget;
        const hoveredElement = targetElement.querySelector('.hover-effect');
        if (hoveredElement.classList.contains('d-none')){
            hoveredElement.classList.add('d-block');
            hoveredElement.classList.remove('d-none');
        }else {
            hoveredElement.classList.add('d-none');
            hoveredElement.classList.remove('d-block');
        }
    };



    render() {

        return (
            <MasterLayout navBg="bg-white">
                {/* header */}
                <header className="bg-light py-5 text-center">
                    <h2 className="text-center">UI/UX & Graphic Designer</h2>
                    <p className="text-center freelancer-bio">I am a Graphic & Web Designer based in New York, specializing in User Interface Design and Development.</p>
                </header>

                {/*  portfolio  */}
                <div className="row mx-0 portfolio">
                    {this.state.portfolioItems.map((item, i) => {
                        return <div className="col-lg-3 col-md-6 col-sm-12 px-0 portfolio-item" key={item.id} onMouseEnter={this.portfolioItemHoverEffect} onMouseLeave={this.portfolioItemHoverEffect}>
                            <a href={item.targetLink} className="d-block position-relative portfolio-link">
                                <img src={process.env.PUBLIC_URL + item.image} className="img-fluid" alt=""/>
                                <div className="hover-effect position-absolute w-100 h-100 d-none">
                                    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                        <div className="eye"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    })}
                </div>
            </MasterLayout>
        );
    }
}

export default Home;
