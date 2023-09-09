import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import './footer.css'
function FooterCom() {

  return (

    <>
           <section className="section_container">
            <div className="container-fluid mt-2 mb-3 pt-4 border">
                <div className="text-center">
                    <div className="sign-in-section mb-2">See personalized recommendations</div>
                    <a className="signinbtn btn" href="#">Sign in</a>
                    <p>New customer? <a className="start-here text-decoration-none" href="#">Start here.</a></p>
                </div>
            </div>
        </section>

        <section className="section_container">
            <div className="container-fluid back-top btn cursor-pointer p-3 mt-1 text-center text-light  ">
                <a className="back-to-top text-decoration-none text-light " href="#">Back to top</a>
            </div>
        </section>
        <div className="container-fluid">
            <Row className='first-footer-sec  '>
                <div className='cont w-75'>

                <Col xs={3}>
                <h6 className="footer-column  text-light">Get to Know Us</h6>
                <ul className="footer-ul p-0">
                    <li className='footer-li'><a className='footer-link' href="#">Careers</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Blog</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">About Amazon</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Investor Relations</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Amazon Devices</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Amazon Tours</a></li>
                </ul>
                </Col>
                <Col xs={3}>
                <h6 className="footer-column  text-light">Make Money with Us</h6>
                <ul className="footer-ul p-0">
                    <li className='footer-li'><a className='footer-link' href="#">Sell products on Amazon</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Sell apps on Amazon</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Become an Affiliate</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Advertise Your Products</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Self-Publish with Us</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Host an Amazon Hub</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">See More Make Money with Us</a></li>
                </ul>
                </Col>
                <Col xs={3}>
                <h6 className="footer-column  text-light">Amazon Payment Products</h6>
                <ul className="footer-ul p-0">
                    <li className='footer-li'><a className='footer-link' href="#">Amazon Business Card</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Shop with Points</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Reload Your Balance</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Amazon Currency Converter</a></li>
                </ul>
                </Col>
                <Col xs={3}>
                <h6 className="footer-column  text-light">Let Us Help You</h6>
                <ul className="footer-ul p-0">
                    <li className='footer-li'><a className='footer-link' href="#">Amazon and COVID-19</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Your Account</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Your Orders</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Shipping Rates & Policies</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Returns & Replacements</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Manage Your Content and Devices</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Amazon Assistant</a></li>
                    <li className='footer-li'><a className='footer-link' href="#">Help</a></li>
                </ul>
                </Col>
                </div>
            </Row>
            <div className="footer-line "></div>
            <Row className="amazon-footer-logo-area p-4 ">
                <Col xs="12" md="5" className='d-flex justify-content-center justify-md-content-end'>
                <img src="../assets/images/image2020.png" alt="amazon logo" className='amzaon2' />
                </Col>
                <Col xs="12" md="7"  className='d-flex align-items-center justify-content-center justify-md-content-end flex-column flex-md-row'>
                <DropdownButton id="locale-dropdown" title="English" className=' me-2'>
                    <Dropdown.Item eventKey="en">English</Dropdown.Item>
                    <Dropdown.Item eventKey="de">German</Dropdown.Item>
                    <Dropdown.Item eventKey="fr">French</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="currency-dropdown" title="$ USD - U.S. Dollar" >
                    <Dropdown.Item eventKey="USD">$ USD - U.S. Dollar</Dropdown.Item>
                    <Dropdown.Item eventKey="EUR">€ EUR - Euro</Dropdown.Item>
                    <Dropdown.Item eventKey="GBP">£ GBP - British Pound</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="currency-dropdown" title= " United States" className='flag '>
                    <Dropdown.Item eventKey="USD">
                    <img src='../assets/images/us.png' width={15} /> 
                        
                        United States</Dropdown.Item>

                    </DropdownButton>
            
                {/* <DropdownButton id="dropdown-item-button" title="English">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">English</Dropdown.Item>
                    <Dropdown.Item as="button">German </Dropdown.Item>
                    <Dropdown.Item as="button">French </Dropdown.Item>
                </DropdownButton>
                <div className="d-flex text-center">
                    <img src="" alt="USA LOGO" width="30rem" height="20rem" />
                    <p className="text-light text-center">United States</p>
                </div> */}
                </Col>
            </Row>
        </div>
      <div className="second-footer-sec pt-5 pb-5 ">
            <div className="container text-decoration-none">
                <div className="row">
                    <div className="col">
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Music</span><br />
                                <span className="second-title-footer">Stream millions <br /> of songs</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Alexa</span><br />
                                <span className="second-title-footer">Actionable Analytics <br /> for the Web</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Rapids</span><br />
                                <span className="second-title-footer">Fun stories for <br /> kids on the go</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">CreateSpace</span><br />
                                <span className="second-title-footer">Indie Print Publishing <br /> Made Easy</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">IMDbPro</span><br />
                                <span className="second-title-footer">Get Info Entertainment <br /> Professionals Need</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Ring</span><br />
                                <span className="second-title-footer">Smart Home <br /> Security Systems</span>
                            </a>
                        </div>
                    </div>
                    <div className="col">

                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Advertising</span><br />
                                <span className="second-title-footer">Find, attract, and <br /> engage customers</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Sell on Amazon</span><br />
                                <span className="second-title-footer">Start a Selling <br /> Account</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Web Services</span><br />
                                <span className="second-title-footer">Scalable Cloud <br /> Computing Services</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">DPReview</span><br />
                                <span className="second-title-footer">Digital <br /> Photography</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Kindle Direct Publishing</span><br />
                                <span className="second-title-footer">Indie Digital Publishing <br /> Made Easy</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">eero WiFi</span><br />
                                <span className="second-title-footer">Stream 4K Video<br /> in Every Room</span>
                            </a>
                        </div>

                    </div>
                    <div className="col">

                        <div className="footer-section-column mb-4 text-left">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Drive</span><br />
                                <span className="second-title-footer">Cloud storage <br /> from Amazon</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4 text-light">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Business</span><br />
                                <span className="second-title-footer">Everything For<br /> Your Business</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Audible</span><br />
                                <span className="second-title-footer">Listen to Books & Original<br /> Audio
                                    Performances</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">East Dane</span><br />
                                <span className="second-title-footer">Designer Men s<br /> Fashion</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Prime Video Direct</span><br />
                                <span className="second-title-footer">Video Distribution<br /> Made Easy</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Neighbors App </span><br />
                                <span className="second-title-footer">Real-Time Crime<br /> & Safety Alerts</span>
                            </a>
                        </div>

                    </div>
                    <div className="col">

                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">6pm</span><br />
                                <span className="second-title-footer">Score deals<br /> on fashion brands</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">AmazonGlobal</span><br />
                                <span className="second-title-footer">Ship Orders<br /> Internationally</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Book Depository</span><br />
                                <span className="second-title-footer">Books With Free<br /> Delivery Worldwide</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Fabric</span><br />
                                <span className="second-title-footer">Sewing, Quilting<br /> & Knitting</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Shopbop</span><br />
                                <span className="second-title-footer">Designer<br /> Fashion Brands</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Subscription Boxes</span><br />
                                <span className="second-title-footer">Top subscription boxes – right to your door</span>
                            </a>
                        </div>

                    </div>
                    <div className="col">

                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">AbeBooks</span><br />
                                <span className="second-title-footer">Books, art<br /> & collectibles</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Home Services</span><br />
                                <span className="second-title-footer">Experienced Pros<br /> Happiness Guarantee</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Box Office Mojo</span><br />
                                <span className="second-title-footer">Find Movie<br /> Box Office Data</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Goodreads</span><br />
                                <span className="second-title-footer">Book reviews<br /> & recommendations</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Woot!</span><br />
                                <span className="second-title-footer">Deals and <br /> Shenanigans</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">PillPack</span><br />
                                <span className="second-title-footer">Pharmacy Simplified</span>
                            </a>
                        </div>

                    </div>
                    <div className="col">

                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">ACX </span><br />
                                <span className="second-title-footer">Audiobook Publishing<br /> Made Easy</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Ignite</span><br />
                                <span className="second-title-footer">Sell your original<br /> Digital Educational</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">ComiXology</span><br />
                                <span className="second-title-footer">Thousands of<br /> Digital Comics</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">IMDb</span><br />
                                <span className="second-title-footer">Movies, TV<br /> & Celebrities</span>
                            </a>
                        </div>
                        <div className="footer-section-column mb-4">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Zappos</span><br />
                                <span className="second-title-footer">Shoes &<br /> Clothing</span>
                            </a>
                        </div>
                        <div className="footer-section-column">
                            <a href="#" className="second-footer-link">
                                <span className="first-title-footer">Amazon Second Chance</span><br />
                                <span className="second-title-footer">Pass it on, trade it in,<br /> give it a second
                                    life</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  );

}

export default FooterCom;