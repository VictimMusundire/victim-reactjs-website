import React, {Component} from 'react';

class Victimhome extends Component {
    render() {
        return (
            <div>

                <div className="vicspace"></div>


                <div class="home">
                    <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="myvic/images/victim_musundire_home.jpg" data-speed="0.8"></div>
                    <div class="home_container">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class=" col-xl-6 home_content">
                                        <div class="home_title">
                                            <h1 className="vicheader">Victim Musundire</h1>


                                        </div>
                                        <div class="breadcrumbs">

                                            <p className="vicheaderpara">I am a full-time developer, working predominantly
                                                in full stack Laravel development and
                                                Java (Spring Boot). l primarily use JavaScript(React JS)  for most of my frontend development.
                                                During my blue days I have had a chance to work with C# ASP.NET  in WebForms, MVC5
                                                and C# ASP.NET Core MVC.

                                            </p>

                                            <div className="vicneed header_link">
                                                <a href="#">
                                                    <span>Meet Victim<img src="myvic/images/arrow.png" alt=""/></span>
                                                </a>
                                            </div>
                                            {/*<ul class="d-flex flex-row align-items-center justify-content-start">*/}
                                            {/*    <li><a href="index.html">Home</a></li>*/}
                                            {/*    <li>Blog</li>*/}
                                            {/*</ul>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta">
                    <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/cta.jpg" data-speed="0.8"></div>
                    <div className="cta_overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="cta_content text-center">
                                    <div className="cta_title text-center"><h1>Development</h1></div>
                                    <hr/>
                                    <div className="cta_text text-center">
                                        <p>
                                            I am passionate about building excellent software
                                            that improves the lives of those around me.
                                            I specialize in creating software for clients ranging from individuals
                                            and small-businesses all the way to large enterprise corporations.
                                            I have done work in software development, front-end/back-end web,
                                            database/server management and some bit of graphic design.
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
                            <div className="col-xl-9">
                                <div className="intro_left_content">
                                    <div className="intro_title"><h1>Everyday !</h1></div>
                                    <div className="intro_text">
                                        <p>
                                            " While Software Development is a huge passion of mine, it doesn’t even
                                            begin to compare to how important my God and family are in my life.
                                            My love and friend Tarie and my four siblings (Vig, Vitu, Vin and Vision), Dad and Mum,
                                            they are my entire world and I thank God for them every day ! ".
                                            I'm a software and web developer. I have an insatiable desire to travel the world, see new things,
                                            create new images, and share what I've learned with other developers and people like you.
                                   </p>
                                    </div>
                                    {/*<div className="button button_2 intro_button"><a href="#"><span>See More</span><img src="myvic/images/arrow.png" alt=""/></a></div>*/}
                                </div>
                            </div>

                             {/*Intro Image */}
                            <div className="col-xl-3">
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
                                    <div className="cta_title text-center"><h1>My Newsletter</h1></div>
                                    <hr/>
                                    <div className="cta_text text-center">
                                        <p>
                                            The easiest way is to shoot me an email or just subscribe. If you’re a client
                                            I will get back to you within a day (two at the most). If you have a question
                                            or just need more info about something then
                                            I will do my best. With random questions and emails that don’t demand
                                            an immediate response
                                            I usually let them pile up for a bit and then knock them out all at once.
                                            You can also find me on the social networks on my connect page.
                                            Feel free to follow me there as well !
                                        </p>

                                        <div className="footer_column">
                                            <form action="#" className="newsletter_form" id="newsletter_form">
                                                <input type="email" className="newsletter_input"
                                                       placeholder="Enter your email address" required="required"/>
                                                <button className="newsletter_button"><span>Subscribe<img
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