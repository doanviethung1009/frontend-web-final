import vd from "../assets/media/homeHeaderVideo.mp4"
import SearchBar from "../components/SearchBar";
import "../styles/home.scss"

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="homeHeaderContainer">
                <div className="videoContent">
                    <video src={vd} autoPlay playsInline muted loop >
                    </video>
                </div>

                <div className="contentSlogan ">
                    <div className="sloganLevel1">
                        <span>Be part of our story</span>
                    </div>
                    <div className="sloganLevel2">
                        <span>
                            GO GREEN, GO VIETNAM <br />
                            A JOURNEY LIKE NO OTHER
                        </span>
                    </div>
                    <div className="sloganLevel3">
                        <span>
                            Welcome to Vietnam – a land of timeless beauty, rich culture, and unforgettable adventures waiting to be explored.
                        </span>
                    </div>
                </div>
            </div>
            {/* <SearchBar /> */}
        </div>

    );
};

export default Home;