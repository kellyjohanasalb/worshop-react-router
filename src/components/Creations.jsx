import deepEarthDesktop from '../../images/desktop/image-deep-earth.jpg'
import deepEarthMobile from '../../images/mobile/image-deep-earth.jpg'
import nightArcadeDesktop from '../../images/desktop/image-night-arcade.jpg'
import nightArcadeMobile from '../../images/mobile/image-night-arcade.jpg'
import soccerTeamDesktop from '../../images/desktop/image-soccer-team.jpg'
import soccerTeamMobile from '../../images/mobile/image-soccer-team.jpg'
import gridDesktop from '../../images/desktop/image-grid.jpg'
import gridMobile from '../../images/mobile/image-grid.jpg'
import fromAboveDesktop from '../../images/desktop/image-from-above.jpg'
import fromAboveMobile from '../../images/mobile/image-from-above.jpg'
import pocketBorealisDesktop from '../../images/desktop/image-pocket-borealis.jpg'
import pocketBorealisMobile from '../../images/mobile/image-pocket-borealis.jpg'
import curiosityDesktop from '../../images/desktop/image-curiosity.jpg'
import curiosityMobile from '../../images/mobile/image-curiosity.jpg'
import fishEyeDesktop from '../../images/desktop/image-fisheye.jpg'
import fishEyeMobile from '../../images/mobile/image-fisheye.jpg'

const Creations = () => {
    const imgCreation = [ 
    {
        imgDesktop: deepEarthDesktop,
        imgMobile: deepEarthMobile,
        text: "DEEP EARTH" 
    },
    {
        imgDesktop: nightArcadeDesktop,
        imgMobile: nightArcadeMobile,
        text: "NIGHT ARCADE" 
    },
    {
        imgDesktop: soccerTeamDesktop,
        imgMobile: soccerTeamMobile,
        text: "SOCCER TEAM VR" 
    },
    {
        imgDesktop: gridDesktop,
        imgMobile: gridMobile,
        text: "THE GRID" 
    },
    {
        imgDesktop: fromAboveDesktop,
        imgMobile: fromAboveMobile,
        text: "FROM UP ABOVE VR" 
    },
    {
        imgDesktop: pocketBorealisDesktop,
        imgMobile: pocketBorealisMobile,
        text: "POCKET BOREALIS" 
    },
    {
        imgDesktop: curiosityDesktop,
        imgMobile: curiosityMobile,
        text: "THE CURIOSITY" 
    },
    {
        imgDesktop: fishEyeDesktop,
        imgMobile: fishEyeMobile,
        text: "MAKE IT FISHEYE" 
    },
    ];
    return (
        <section className="creations-section">
            <h2 className="creations-title">OUR CREATIONS</h2>
            <button className="see-all-button">SEE ALL</button>
            <div className="creations-grid">
                        {
                        imgCreation.map((item, index) => (

                            <div className="creation" key={index}>
                                <picture className="creation-img">
                        <source srcSet={item.imgDesktop} media="(min-width: 480px)"/>
                        <img src={item.imgMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">{item.text}</span>
                    </div> 
                </div>
                            ))
                        }
            </div>
        </section>
    )
}

export default Creations;

