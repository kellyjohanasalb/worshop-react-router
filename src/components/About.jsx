import aboutImageMobile from '../../images/mobile/image-interactive.jpg'
import aboutImageDesktop from '../../images/desktop/image-interactive.jpg'

const About = () => {
    return(
        <section className="about-section">
            <picture className="about-img">
                <source srcSet={aboutImageDesktop} media="(min-width: 768px)" />
                <img src={aboutImageMobile} alt="" />
            </picture>
            <div className="about-content">
                <h2 className="content-title">
                    THE LEADER IN INTERACTIVE VR
                </h2>
                <p className="content-text">
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </div>
        </section>
    )
}

export default About;