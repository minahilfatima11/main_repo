import React, { useState } from 'react';
import HomeBanner from '../../HomeBanner';
import Button from '@mui/material/Button'; // Import Button from Material-UI
import banner1 from '../../../assets/images/banner1.jpg'; // Assuming it's a JPG file
import banner2 from '../../../assets/images/banner2.jpg'; 
import banner3 from '../../../assets/images/banner3.jpg'; 
import banner4 from '../../../assets/images/Banner4.jpg'; 
import banner5 from '../../../assets/images/Banner5.jpg'; 
import Rating from '@mui/material/Rating';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { AiOutlineFullscreen } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import HomeCat from '../../HomeCat';
import ProductModel from '../../ProductModel';

const Home = () => {
   
    const [isOpenProductModel, setisOpenProductModel] = useState(false);
    const viewproductdetails = (id) => {
         setisOpenProductModel(true)
    }
    const closeProductModel = () => {
        setisOpenProductModel(false);
    }
    return (
        <>
            <HomeBanner />
            <HomeCat/>

            

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                 <div className="banner mt-2">
                                <img src={banner1} alt="Banner" className="cursor w-100" />
                            </div>
                             <div className="banner mt-5">
                                <img src={banner2} alt="Banner" className="cursor w-100" />
                            </div>
                             <div className="banner mt-5">
                                <img src={banner3} alt="Banner" className="cursor w-100" />
                            </div>
                           </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className='mb-0 hd'>Best Variety</h3>
                                    <p className='text-light text-sml mb-0'>Don't Miss All These Varieties</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All</Button>
                            </div>
                            <div className="product_row w-100 mt-4 d-flex">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    pagination={{ clickable: true }}
                                     navigation
                                    modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://em-cdn.eatmubarak.pk/54955/dish_image/1675858768.jpg" className='w-100' alt="product1" />
                                                <div className="actions">
                                                    <Button onClick={() => viewproductdetails(1)} ><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Long Grain Basmati Rice 5-KG</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-1900</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/Misc/1685686736041" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Mango Anwar Ratole 1-KG</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-250</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12635000-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Nature Own White Oats Pouch 500GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-530</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12640825-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Nescafe Chilled Hazelnut 220ML</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-160</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12621407-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Coconut Biscuit Fine Life per 250GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-300</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.amazonaws.com%2FProducts%2F1707290690756.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Knorr Fuzon Hot Kimchi Ramen 133GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-310</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12620100-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>National Refined Salt 800 GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-60</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>



                      

                               <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className='mb-0 mt-4 hd'>New Products</h3>
                                    <p className='text-light text-sml mb-0'>Here's All New Products Of Your's Choice CHECK & BUY</p>
                                </div>
                                <Button className="viewAllBtn ml-auto mt-4">View All</Button>
                            </div>
                            <div className="product_row poductRow2 w-100 mt-4 d-flex">
                               
                                    
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12624216-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Knorr Italian Sauce 700GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-520</span>
                                                </div>
                                            </div>
                                        </div>
                                 
                                   
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12620262-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Orange Carrot per 250GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-30</span>
                                                </div>
                                            </div>
                                        </div>
                                
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12620323-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Mutton Front Chops (Champ) Per 250gm</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-660</span>
                                                </div>
                                            </div>
                                        </div>
                                   
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12632643-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>TANG Lemon Pepper 750GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-800</span>
                                                </div>
                                            </div>
                                        </div>
                                  
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12637849-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Bread Beyond Multigrain Bread </h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-280</span>
                                                </div>
                                            </div>
                                        </div>
                                   
                                        <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2Fproducts_images_new%2F12640228-0-M.jpg&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Swiss Cheese Spread Original 250 GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-760</span>
                                                </div>
                                            </div>
                                </div>
                                

                                
                                <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-kausar-broken-basmati-rice-5ee09a36efb0b.png" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Kausar Basmati Broken Rice 5-KG</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-800</span>
                                                </div>
                                            </div>
                                        </div>
                               
                                
                                <div className="item productitem">
                                            <div className="imgWrapper">
                                                <img src="https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2FProducts%2F1711952029905&w=1920&q=75" className='w-100' alt="product1" />
                                                  <div className="actions">
                                                    <Button className="button"><AiOutlineFullscreen/></Button>
                                                    <Button className="button"><IoHeartOutline/></Button>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h4>Sabroso Seekh Kabab pack 540-GM</h4>
                                                <span className="text-success d-block ml-2">In Stock</span>
                                                <Rating className="mt-2 mb-2 ml-1" name="read-only" value={5} readOnly size="small" precision={0.5} />
                                                <div className="d-flex">
                                                    <span className="netprice text-danger">Rs-160</span>
                                                </div>
                                            </div>
                                        </div>
                               
                                

                               
                            </div>
                            <div className="d-flex  bannerSec">
                                <div className="banner ">
                                <img src={banner4} alt="Banner" className="cursor w-100" />
                                </div>
                                
                                <div className="banner">
                                <img src={banner5} alt="Banner" className="cursor w-100" />
                            </div>
                            </div>
                        </div>
                        </div>
                    
                </div>
            </section>

            {
                isOpenProductModel === true && <ProductModel closeProductModel={closeProductModel} />
            }

           {/*<ProductModel/>*/} 
        </>
    );
};

export default Home;
