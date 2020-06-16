import React, {Component} from 'react';
import MasterLayout from "./MasterLayout";

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            portfolioItems: [
                {
                    id: 1,
                    image: "/assets/img/portfolio-1-sm.jpg",
                    targetLink: "/portfolio/item/1",
                },
                {
                    id: 2,
                    image: "/assets/img/portfolio-2-sm.jpg",
                    targetLink: "/portfolio/item/2",
                },
                {
                    id: 3,
                    image: "/assets/img/portfolio-3-sm.jpg",
                    targetLink: "/portfolio/item/3",
                },
                {
                    id: 4,
                    image: "/assets/img/portfolio-4-sm.jpg",
                    targetLink: "/portfolio/item/4",
                },
                {
                    id: 5,
                    image: "/assets/img/portfolio-5-sm.jpg",
                    targetLink: "/portfolio/item/5",
                },
                {
                    id: 6,
                    image: "/assets/img/portfolio-6-sm.jpg",
                    targetLink: "/portfolio/item/6",
                },
                {
                    id: 7,
                    image: "/assets/img/portfolio-7-sm.jpg",
                    targetLink: "/portfolio/item/7",
                },
                {
                    id: 8,
                    image: "/assets/img/portfolio-8-sm.jpg",
                    targetLink: "/portfolio/item/8",
                },
                {
                    id: 9,
                    image: "/assets/img/portfolio-9-sm.jpg",
                    targetLink: "/portfolio/item/9",
                },
                {
                    id: 10,
                    image: "/assets/img/portfolio-10-sm.jpg",
                    targetLink: "/portfolio/item/10",
                },
                {
                    id: 11,
                    image: "/assets/img/portfolio-11-sm.jpg",
                    targetLink: "/portfolio/item/11",
                },
                {
                    id: 12,
                    image: "/assets/img/portfolio-12-sm.jpg",
                    targetLink: "/portfolio/item/12",
                },
            ]
        }

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
                                <img src={process.env.PUBLIC_URL + item.image} className="img-fluid"/>
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
