// import vd from "../assets/media/homeHeaderVideo.mp4"
import vd3 from "/media/homeHeaderVideo.mp4" //used for compatibility with public folder assets
import SearchBar from "../components/SearchBar";
import "../styles/home.scss"
import { useTranslation } from "react-i18next";
import { useCallback, useEffect } from "react";

const Home = (props) => {
    const { checkLang, setCheckLang } = props;
    const { t, i18n } = useTranslation();


    // Memoize handleOnChangeLanguage to ensure it doesn't change on each render
    const handleOnChangeLanguage = useCallback((key) => {
        if (key) {
            i18n.changeLanguage(key);
            console.log(`Language changed to: ${key}`);
        }
    }, [i18n]);

    useEffect(() => {
        handleOnChangeLanguage(checkLang);
    }, [checkLang, handleOnChangeLanguage])

    // const vd2 = `${import.meta.env.PUBLIC_URL}/homeHeaderVideo.mp4`
    return (
        <div className="homeContainer">
            <div className="homeHeaderContainer">
                <div className="videoContent">
                    <video src={vd3} autoPlay playsInline muted loop >
                    </video>
                </div>

                <div className="contentSlogan ">
                    <div className="sloganLevel1" >
                        <span>{t("sloganLevel1")}</span>
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