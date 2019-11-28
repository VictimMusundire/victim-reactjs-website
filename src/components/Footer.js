import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>

              {/*Footer */}

                <footer className="footer">
                    <div className="footer_container">
                        <div className="container">
                            <div className="row">

                               {/*Footer About */}
                                <div className="col-lg-4 footer_col">

                                   {/*Logo */}
                                    <div className="logo">

                                            <span><img src="myvic/images/victimlogo.png" alt=""/></span>

                                    </div>
                                    <div className="footer_text">
                                        <p>' Honor, Code, Respect, Love, Loyalty '</p>
                                    </div>
                                    <div className="social footer_social">
                                        <ul className="d-flex flex-row align-items-center justify-content-start">
                                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                               {/*Newsletter */}
                                <div className="col-lg-4 footer_col">
                                    <div className="footer_column">
                                        <div className="footer_title">My Newsletter</div>
                                        <form action="#" className="newsletter_form" id="newsletter_form">
                                            <input type="email" className="newsletter_input" placeholder="Your email address" required="required"/>
                                                <button className="newsletter_button"><span>subscribe<img src="myvic/images/arrow.png" alt=""/></span></button>
                                        </form>
                                    </div>
                                </div>

                                 {/*Gallery */}
                                <div className="col-lg-4 footer_col">
                                    <div className="footer_column">
                                        <div className="footer_title">Victim Photos</div>
                                        <div className="gallery d-flex flex-row align-items-start justify-content-between flex-wrap">

                                            {/*Gallery Item */}
                                            <div className="gallery_item">
                                                <a className="colorbox" href="myvic/images/victim3.jpg"><img src="myvic/images/victim3.jpg" alt=""/></a>
                                            </div>

                                             {/*Gallery Item */}
                                            <div className="gallery_item">
                                                <a className="colorbox" href="myvic/images/victim4.jpg"><img src="myvic/images/victim4.jpg" alt=""/></a>
                                            </div>

                                             {/*Gallery Item */}
                                            <div className="gallery_item">
                                                <a className="colorbox" href="myvic/images/victim2.jpg"><img src="myvic/images/victim2.jpg" alt=""/></a>
                                            </div>

                                             {/*Gallery Item */}
                                            <div className="gallery_item">
                                                <a className="colorbox" href="myvic/images/victim6.jpg"><img src="myvic/images/victim6.jpg" alt=""/></a>
                                            </div>

                                             {/*Gallery Item */}
                                            <div className="gallery_item">
                                                <a className="colorbox" href="myvic/images/victim9.jpg"><img src="myvic/images/victim9.jpg" alt=""/></a>
                                            </div>

                                             {/*Gallery Item */}
                                            <div className="gallery_item">
                                                <a className="colorbox" href="myvic/images/victim7.jpg"><img src="myvic/images/victim7.jpg" alt=""/></a>
                                            </div>

                                             {/*Gallery Item */}
                                            <div className="gallery_item">
                                                <a className="colorbox" href="myvic/images/victim5.jpg"><img src="myvic/images/victim5.jpg" alt=""/></a>
                                            </div>

                                             {/*Gallery Item */}
                                            <div className="gallery_item">
                                                <a className="colorbox" href="myvic/images/victim11.jpg"><img src="myvic/images/victim11.jpg" alt=""/></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="footer_bar">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="footer_bar_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="copyright">
                                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Developed by Victim Musundire
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                
            </div>
        );
    }
}

export default Footer;