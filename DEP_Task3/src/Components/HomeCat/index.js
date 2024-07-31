import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React from 'react';
import { motion } from 'framer-motion';

const HomeCat = () => {
    return (
        <section className="homecat">
            <div className="container">
                <h3 className="mb-3 hd">Featured Categories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={6}
                    pagination={false}
                    navigation={false}
                    modules={Navigation}
                    className="mySwiper"
                >
                    {[
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-5.png", title: "Apple", className: "item1" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-14.png", title: "Coffee", className: "item2" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png", title: "Blum", className: "item3" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-11.png", title: "Peach", className: "item4" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png", title: "Burger", className: "item1" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png", title: "Snacks", className: "item2" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png", title: "Strawberry", className: "item3" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png", title: "Vegetables", className: "item4" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png", title: "Kiwi", className: "item1" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png", title: "Apple", className: "item2" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-5.png", title: "Apple", className: "item3" },
                        { src: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png", title: "Kiwi", className: "item4" }
                    ].map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className={`${item.className} text-center`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                whileHover={{ scale: 1.1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                            >
                                <img src={item.src} alt={item.title} className="transition-img" />
                                <h6>{item.title}</h6>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default HomeCat;
