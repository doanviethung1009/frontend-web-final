// import vd from "../assets/media/homeHeaderVideo.mp4"
// import vd3 from "/media/homeHeaderVideo.mp4"
//used }for compatibility with public folder assets
import SearchBar from "../components/SearchBar";
import "../styles/publicStyles/Home.scss";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect } from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

// data-why-choose-us
const dataWhyChooseUs = {
  firstRecords: [
    {
      icon: "/images/About/icon-environmental-stewardship.svg",
      title: "sustainable_travel",
      content: "content_sustainable_travel",
    },
    {
      icon: "/images/About/icon-environmental-stewardship.svg",
      title: "unique_experiences",
      content: "content_unique_experiences",
    },
  ],
  secondRecords: [
    {
      icon: "/images/About/icon-environmental-stewardship.svg",
      title: "expert_team",
      content: "content_expert_team",
    },
    {
      icon: "/images/About/icon-environmental-stewardship.svg",
      title: "customer_sasticfaction",
      content: "content_customer_sasticfaction",
    },
    {
      icon: "/images/About/icon-environmental-stewardship.svg",
      title: "safety_first",
      content: "content_safety_first",
    },
  ],
};

const Home = (props) => {
  const { checkLang, setCheckLang } = props;
  const { t, i18n } = useTranslation();

  // Memoize handleOnChangeLanguage to ensure it doesn't change on each render
  const handleOnChangeLanguage = useCallback(
    (key) => {
      if (key) {
        i18n.changeLanguage(key);
        console.log(`Language changed to: ${key}`);
      }
    },
    [i18n]
  );

  useEffect(() => {
    handleOnChangeLanguage(checkLang);
  }, [checkLang, handleOnChangeLanguage]);

  // const vd2 = `${import.meta.env.PUBLIC_URL}/homeHeaderVideo.mp4`
  return (
    <div className="homeContainer">
      <div className="homeHeaderContainer">
        <div className="videoContent">
          <video
            src={`${import.meta.env.VITE_API_URL}/videos/homeHeaderVideo.mp4`}
            autoPlay
            playsInline
            muted
            loop
          ></video>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/anZfnEQFnJM?si=p0M3PMp2eEROBVnV?autoplay=1&mute=0?controls=0" allow="autoplay; controls" ></iframe> */}
        </div>

        <div className="contentSlogan text-slogan ">
          <div className="sloganLevel1">
            <span>{t("sloganLevel1")}</span>
          </div>
          <div className="sloganLevel2">
            <span>
              GO GREEN, GO VIETNAM <br />A JOURNEY LIKE NO OTHER
            </span>
          </div>
          <div className="sloganLevel3">
            <span>
              Welcome to Vietnam – a land of timeless beauty, rich culture, and
              unforgettable adventures waiting to be explored.
            </span>
          </div>
        </div>
      </div>

      {/* SEARCH_BAR */}
      <div>{/* <SearchBar /> */}</div>

      {/* WHY_CHOOSE_US */}
      <div className="container-why-choose-us">
        <div
          style={{
            marginBottom: "20px",
            paddingRight: "15px",
            borderRight: "5px solid white",
            width: "fit-content",
            height: "40px",
          }}
        >
          <Title
            className="uppercase title-block"
            style={{ marginBottom: "0px", color: "white" }}
          >
            {t("why_choose_us")}
          </Title>
        </div>
        {/* FIRST_RECORD */}
        <div
          className="d-flex justify-center why-choose-us-list"
          style={{
            gap: "75px",
            flexWrap: "wrap",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {dataWhyChooseUs.firstRecords.map((item, index) => (
            <div key={index} className="why-choose-us-block">
              <div className="image-icon">
                <img
                  alt="avatar"
                  src={item.icon}
                  className="img-avatar"
                  style={{ width: "auto", height: "135px" }}
                />
              </div>
              <Title level={3} style={{ color: "white" }}>
                {t(item.title)}
              </Title>
              <Text style={{ color: "white" }}>{t(item.content)}</Text>
            </div>
          ))}
        </div>
        {/* SECOND_RECORD */}
        <div
          className="d-flex justify-center why-choose-us-list"
          style={{
            gap: "75px",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          {dataWhyChooseUs.secondRecords.map((item, index) => (
            <div key={index} className="why-choose-us-block">
              <div className="image-icon">
                <img
                  alt="avatar"
                  src={item.icon}
                  className="img-avatar"
                />
              </div>
              <Title level={3} style={{ color: "white" }}>
                {t(item.title)}
              </Title>
              <Text style={{ color: "white" }}>{t(item.content)}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
