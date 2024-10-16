import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (

        <>
            <div className="home_section" id="home">
                <div className="gimage">
                    <img src="/gravelogo.png" alt="gravelogo" />
                </div>
                <div className="mainintro">
                    <span className="stroketext_intro">Grave</span>
                    <span>the only music bot you will ever need.</span>
                    <div className="linkbuttons">
                        <Link to='/invite'><button type="button" className="btn btn-outline-secondary" >Invite Me</button></Link>
                        <Link to='/support'><button type="button" className="btn btn-outline-secondary" >Support Server</button></Link>
                        <Link to='/docs'><button type="button" className="btn btn-outline-secondary" >Documentation</button></Link>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Home;
