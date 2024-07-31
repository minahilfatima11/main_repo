import { TbMilk } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
 import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="topinfo row">
                    <div className="col d-flex align-items-center">
                        <span><TbMilk/></span>
                     <span className="ml-2">Everyday Fresh Products</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                     <span className="ml-2">Free Delivery For Order Over 2k</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine /></span>
                     <span className="ml-2">Daily Mega Discounts</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><FaIndianRupeeSign/></span>
                     <span className="ml-2">Best Price In Market</span>
                    </div>

                    
                   
                </div>
                 <div className="row mt-4 linkWrap">
                        <div className="col">
                            <h5>Fruit and Vegetables</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">herbs & Seasonings</Link></li>
                                <li><Link to="#">Party Trays </Link></li>
                                <li><Link to="#">Fast foods</Link></li>
                                <li><Link to="#">sour fruits</Link></li>
                                <li><Link to="#">Packaged fruits</Link></li>
                                <li><Link to="#">Caned Produts</Link></li>
                                </ul>
                    </div>

                    <div className="col">
                            <h5>Beverages</h5>
                            <ul>
                                <li><Link to="#">Coffee & Tea</Link></li>
                                <li><Link to="#">Sodas</Link></li>
                                <li><Link to="#">Smooties & Shakes</Link></li>
                                <li><Link to="#">Tarts</Link></li>
                               
                               
                                </ul>
                    </div>
                    <div className="col">
                            <h5>Breads & Bakery</h5>
                            <ul>
                                <li><Link to="#">Cakes & pasteries</Link></li>
                                <li><Link to="#">Rusks</Link></li>
                            <li><Link to="#">
                            condenced milk</Link></li>
                            <li><Link to="#">
                            cookies</Link></li>
                                <li><Link to="#">Honey</Link></li>
                                <li><Link to="#">Sour Cream & Butter</Link></li>
                      
                                </ul>
                    </div>
                    <div className="col">
                            <h5>Meat & SeaFood</h5>
                            <ul>
                                <li><Link to="#">Dinner Sausage</Link></li>
                                <li><Link to="#">Fish</Link></li>
                                <li><Link to="#">Chicken  </Link></li>
                                <li><Link to="#">Frozen Food</Link></li>
                                <li><Link to="#">Mutton</Link></li>
                                <li><Link to="#">Farm Raised Fillets</Link></li>
                            <li><Link to="#">Beaf</Link></li>
                            <li><Link to="#">All types Kabas</Link></li>
                                </ul>
                    </div>

                </div>
                
                <div className="copyright d-flex justify-content-between align-items-center">
    <p className="mb-0">© 2024 Organic Food Grocery. All rights reserved.</p>
    <ul className="list list-inline mb-0">
        <li className="list-inline-item">
            <Link to="#"><BsInstagram/></Link>
        </li>
        <li className="list-inline-item">
            <Link to="#"><FaTwitter/></Link>
        </li>
        <li className="list-inline-item">
            <Link to="#"><FaFacebookSquare/></Link>
        </li>
    </ul>
</div>


            </div>
        </footer>
    )
}
export default Footer;