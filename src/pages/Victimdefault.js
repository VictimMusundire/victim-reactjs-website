import React, {Component} from 'react';

class Victimdefault extends Component {
    render() {
        return (
            <div>
                <div className="vicspace"></div>
                {/*CTA */}

                <div className="cta">
                    <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/cta.jpg" data-speed="0.8"></div>
                    <div className="cta_overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="cta_content text-center">
                                    <div className="cta_title text-center"><h1 className="text-danger">Page Currently Unavailable !</h1></div>
                                    <hr/>
                                    <div className="cta_text text-center">
                                        <a href="#">
                                            <span><img src="myvic/images/vicsorry.jpg" alt=""/></span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

export default Victimdefault;