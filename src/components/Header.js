import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <div>
                {/*Header */}

                <header className="header">
                    <div className="header_content d-flex flex-row align-items-center justify-content-start">

                      {/*Logo */}
                        <div className="logo">
                            <a href="#">
                                <span><img src="myvic/images/victimlogo.png" alt=""/></span>
                            </a>
                        </div>

                       {/*Main Navigation */}
                        <nav className="main_nav">
                            <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li> <Link to="/" className="active">Home</Link></li>
                                <li className="has_children">
                                    <a href="#">About Victim</a>
                                    <ul>
                                        <li><Link to= "/victimmeet">Meet Victim</Link></li>
                                        <li><Link to= "/updating">The Advise</Link></li>

                                    </ul>
                                </li>
                                <li><Link to="/updating">Projects</Link></li>
                                <li><Link to="/updating">Stack</Link></li>
                            </ul>
                        </nav>

                        <div className="header_right ml-auto d-flex flex-row align-items-center justify-content-start">

                            <div className="social">
                                <ul className="d-flex flex-row align-items-center justify-content-start">
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div className="header_link">
                                <a href="#">
                                    <span>Connect<img src="myvic/images/arrow.png" alt=""/></span>
                                </a>
                            </div>
                            <div className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </header>


                 {/*Menu */}

                <div className="menu">
                    <div className="menu_container">
                        <div className="menu_close"><i className="fa fa-times" aria-hidden="true"></i></div>
                        <div className="menu_content d-flex flex-column align-items-center justify-content-start">
                            <nav className="menu_nav">
                                <ul className="d-flex flex-column align-items-center justify-content-start">
                                    <li><a href="/">Home</a></li>
                                    <li><Link to="/victimmeet">Meet Victim</Link></li>
                                    <li><a href="/victimadvise">The Advise</a></li>
                                    <li><a href="/victimproducts">Products</a></li>
                                    <li><a href="/victimstack">Stack</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="menu_social">
                            <div className="social">
                                <ul className="d-flex flex-row align-items-center justify-content-start">
                                    <li><a href="https://www.linkedin.com/in/victim-musundire/" target="blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.facebook.com/victim.musundire" target="blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="https://twitter.com/victimmusundire" target="blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;