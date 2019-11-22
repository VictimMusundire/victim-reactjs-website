import React, {Component} from 'react';

class Victimhome extends Component {
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
                                    <div className="cta_title text-center"><h1>Victim Musundire</h1></div>
                                    <hr/>
                                    <div className="cta_text text-center">
                                        <p>
                                            I am a full-time developer, working predominantly in full stack Laravel development.
                                            I graduated with a Bachelor of Science Degree in Information Systems.
                                            I have experience primarily with C# ASP.NET, working both in MVC5,
                                            WebForms and C# ASP.NET Core MVC, and l also work with React JS for frontend development.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Intro Left */}

                <div className="intro intro_left container_wrapper">
                    <div className="container">
                        <div className="row row-eq-height">

                            {/*Intro Content */}
                            <div className="col-xl-6">
                                <div className="intro_left_content">
                                    <div className="intro_title"><h1>Development</h1></div>
                                    <div className="intro_text">
                                        <p>
                                            I am passionate about building excellent software that improves the lives of those around me.
                                            I specialize in creating software for clients ranging from individuals and small-businesses
                                            all the way to large enterprise corporations.  I have done work in software development,
                                            front-end/back-end web, database/server management and some bit of graphic design.
                                        </p>
                                    </div>
                                    <div className="button button_2 intro_button"><a href="#"><span>See More</span><img src="myvic/images/arrow.png" alt=""/></a></div>
                                </div>
                            </div>

                             {/*Intro Image */}
                            <div className="col-xl-6">
                                <div className="intro_image">
                                    <img src="myvic/images/about_intro_1.jpg" alt=""/>
                                    <div className="background_image" style = {{backgroundImage: "url("+"myvic/images/about_intro_1.jpg"+")"}}></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/*CTA */}

                <div className="cta">
                    <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/cta.jpg" data-speed="0.8"></div>
                    <div className="cta_overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="cta_content text-center">
                                    <div className="cta_title text-center"><h1>Everyday !</h1></div>
                                    <hr/>
                                    <div className="cta_text text-center">
                                        <p>
                                            " While Software Development is a huge passion of mine, it doesn’t
                                            even begin to compare to how important my God and family are in my life.
                                            My love and friend Tarie and my four siblings (Vig, Vitu, Vin and Vision),
                                            Dad and Mum, they are my entire world and I thank God for them every day ! ".
                                            I'm a software and web developer. I have an insatiable desire to travel
                                            the world, see new things, create new images, and share what I've learned
                                            with other developers and people like you.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Intro Left */}

                <div className="intro intro_left container_wrapper">

                    <div className="container">

                        <div className="row row-eq-height">

                            {/*Intro Content */}
                            <div className="col-xl-12">
                                <div className="intro_left_content">
                                    <div className="intro_title text-center"><h1>My Newsletter</h1></div>
                                    <div className="intro_text">
                                        <p>
                                            The easiest way is to shoot me an email or just subscribe. If you’re a client
                                            I will get back to you within a day (two at the most). If you have a question
                                            or just need more info about something then
                                            I will do my best. With random questions and emails that don’t demand
                                            an immediate response
                                            I usually let them pile up for a bit and then knock them out all at once.
                                            You can also find me on the social networks on my connect page.
                                            Feel free to follow me there as well!.
                                        </p>

                                        <div className="footer_column">
                                            <form action="#" className="newsletter_form" id="newsletter_form">
                                                <input type="email" className="newsletter_input"
                                                       placeholder="Enter your email address" required="required"/>
                                                <button className="newsletter_button"><span>subscribe<img
                                                    src="myvic/images/arrow.png" alt=""/></span></button>
                                            </form>
                                        </div>
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

export default Victimhome;