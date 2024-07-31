import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineHome, MdOutlineBakeryDining, MdOutlineContactPage } from 'react-icons/md';
import { IoBagRemoveOutline } from 'react-icons/io5';

import { SiBuymeacoffee } from "react-icons/si";

const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>
                        <div className='CartWrapper align-items-center'>
                            <button className='allCartTab align-items-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                <span className='icon1 mr-2'><IoMenu /></span>
                                <span className="text">All Categories</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </button>

                            <div className={`sidebarNav ${isopenSidebarVal ? 'open' : ''}`}>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <MdOutlineBakeryDining /> Bakery <FaAngleRight className="ml-auto "/>
                                        </Link>
                                        <div className="submenu">
                                            <Link to="/">Cakes</Link>
                                            <Link to="/">Dairy</Link>
                                            <Link to="/">Eggs</Link>
                                            <Link to="/">Tarts</Link>
                                            <Link to="/">Pies</Link>
                                            <Link to="/">Pastries</Link>
                                            <Link to="/">Cookies</Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><IoBagRemoveOutline /> Grocery</Link></li>
                                    <li>
                                        <Link to="/">
                                            <SiBuymeacoffee /> Beverages <FaAngleRight className="ml-auto "/>
                                        </Link>
                                        <div className="submenu1">
                                            <Link to="/">Coffee</Link>
                                            <Link to="/">Smoothies</Link>
                                            <Link to="/">Sodas</Link>
                                            <Link to="/">Lemonade</Link>
                                            <Link to="/">Iced Tea</Link>
                                            <Link to="/">Hot Chocolate</Link>
                                            <Link to="/">Energy Drinks</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><MdOutlineHome /> Home</Link></li>
                            <li className='list-inline-item'>
                                <Link to="/"><MdOutlineBakeryDining /> Bakery</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Cakes</Link>
                                    <Link to="/">Dairy</Link>
                                    <Link to="/">Eggs</Link>
                                    <Link to="/">Tarts</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><IoBagRemoveOutline /> Grocery</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Herbs</Link>
                                    <Link to="/">Legumes</Link>
                                    <Link to="/">Berries</Link>
                                    <Link to="/">Citrus</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><SiBuymeacoffee /> Beverages</Link></li>
                            <li className='list-inline-item'><Link to="/"><MdOutlineContactPage /> Contact Me</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
