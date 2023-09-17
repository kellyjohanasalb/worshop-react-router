import brandLogo from '../../images/logo.svg'

const Footer = () => { 
    const listText = ["About", "Careers", "Events", "Products", "Support"];
    return(
        <footer className="footer">
            <div className="footer-navigation">
                <a href="#" className="brand-logo">
                    <img src={brandLogo} alt="" />
                </a>
                <div className="">
                    <ul className="footer-navlinks">
                        {
                        listText.map((item, index) => (
                        <li key={index}><a className="hoverable" href="#">{item}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="socials">
                <div className="social-links">
                    <a className="hoverable" href="https://www.facebook.com"><i className="fa-brands fa-square-facebook fa-xl"></i></a>
                    <a className="hoverable" href="https://www.twitter.com"><i className="fa-brands fa-twitter fa-xl"></i></a>
                    <a className="hoverable" href="https://www.pinterest.com"><i className="fa-brands fa-pinterest fa-xl"></i></a>
                    <a className="hoverable" href="https://www.instagram.com"><i className="fa-brands fa-instagram fa-xl"></i></a>
                    <a className="hoverable" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fa-brands fa-youtube fa-xl"></i></a>
                </div>
                <span className="copyright">&#169; 2021 Loopstudios. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;

