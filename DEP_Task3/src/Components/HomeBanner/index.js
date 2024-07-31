import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://www.mycart.pk/media/catalog/category/Grocery_edit.jpg" className="w-100" alt="Banner 1" />
                </div>
                <div className="item">
                    <img src="https://www.mycart.pk/media/catalog/category/Beverange_1.jpg" className="w-100" alt="Banner 2" />
                </div>
                <div className="item">
                    <img src="https://www.mycart.pk/media/catalog/category/Bakery-_-Snack.jpg" className="w-100" alt="Banner 3" />
                </div>
                <div className="item">
                    <img src="https://www.mycart.pk/media/catalog/category/Fresh_Dairy.jpg" className="w-100" alt="Banner 4" />
                </div>
            </Slider>
        </div>
    );
};

export default HomeBanner;
