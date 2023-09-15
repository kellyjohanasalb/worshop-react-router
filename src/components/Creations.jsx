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
    return (
        <section className="creations-section">
            <h2 className="creations-title">OUR CREATIONS</h2>
            <button className="see-all-button">SEE ALL</button>
            <div className="creations-grid">
                <div className="creation">
                     <picture className="creation-img">
                        <source srcSet={deepEarthDesktop} media="(min-width: 480px)"/>
                        <img src={deepEarthMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">DEEP EARTH</span>
                    </div> 
                </div>
                <div className="creation">
                    <picture className="creation-img">
                        <source srcSet={nightArcadeDesktop} media="(min-width: 480px)"/>
                        <img src={nightArcadeMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">NIGHT ARCADE</span>
                    </div>   
                </div>
                <div className="creation">
                    <picture className="creation-img">
                        <source srcSet={soccerTeamDesktop} media="(min-width: 480px)"/>
                        <img src={soccerTeamMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">SOCCER TEAM VR</span>
                    </div>    
                </div>
                <div className="creation">
                    <picture className="creation-img">
                        <source srcSet={gridDesktop} media="(min-width: 480px)"/>
                        <img src={gridMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">THE GRID</span>
                    </div>    
                </div>
                <div className="creation">
                    <picture className="creation-img">
                        <source srcSet={fromAboveDesktop} media="(min-width: 480px)"/>
                        <img src={fromAboveMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">FROM UP ABOVE VR</span>
                    </div>    
                </div>
                <div className="creation">
                    <picture className="creation-img">
                        <source srcSet={pocketBorealisDesktop} media="(min-width: 480px)"/>
                        <img src={pocketBorealisMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">POCKET BOREALIS</span>
                    </div>
                </div>
                <div className="creation">
                    <picture className="creation-img">
                        <source srcSet={curiosityDesktop} media="(min-width: 480px)"/>
                        <img src={curiosityMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">THE CURIOSITY</span>
                    </div>
                </div>
                <div className="creation">
                    <picture className="creation-img">
                        <source srcSet={fishEyeDesktop} media="(min-width: 480px)"/>
                        <img src={fishEyeMobile} alt="" />
                    </picture>
                    <div className="creation-overlay">
                        <span className="overlay-text">MAKE IT FISHEYE</span>
                    </div>
                </div>                          
            </div>
        </section>
    )
}

export default Creations;

