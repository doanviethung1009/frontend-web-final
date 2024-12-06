import { useState, useCallback, useEffect } from "react";
import { Carousel, Flex, Typography, Button, Row, Col } from "antd";
import "../styles/about.css";
import { useTranslation } from "react-i18next";
import { NotificationOutlined, CarOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title, Text } = Typography;

const dataInfoLocate = [
  {
    avatarLocate:
      "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backgroundLocate:
      "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg",
    content: {
      location: "Ho Chi Minh City, Vietnam",
      title: "Nightview in Ho Chi Minh City",
      description:
        "Witness the dynamic nightlife of HCM City, where the skyline meets the sparkling riverside, and the energy of the city never sleep",
    },
  },
  {
    avatarLocate:
      "https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backgroundLocate:
      "https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: {
      location: "Ha Noi, Vietnam",
      title: "Nightview in Ha Noi City",
      description:
        "Witness the dynamic nightlife of HN City, where the skyline meets the sparkling riverside, and the energy of the city never sleep",
    },
  },
];

// data-other-business-sectors
const dataOtherBusinessSectors = [
  {
    icon: "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title_data_other_business_sectors_1",
  },
  {
    icon: "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title_data_other_business_sectors_2",
  },
  {
    icon: "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title_data_other_business_sectors_3",
  },
  {
    icon: "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title_data_other_business_sectors_4",
  },
  {
    icon: "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title_data_other_business_sectors_5",
  },
];

// data-core-values
const dataCoreValues = [
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "environmental_stewardship",
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "authentic_experiences",
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "continuous_innovation",
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "community_engagement",
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "cultural_respect",
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "customer_centric_service",
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "integrity_and_transparency",
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "safety_and_wellbeing",
  },
];

// data-vision
const dataVision = [
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    flex_css: "1 0 40%",
    title: "vision",
    contents: ["content_vision_1", "content_vision_2"],
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    flex_css: "1 0 60%",
    title: "mission",
    contents: ["content_mission_1", "content_mission_2", "content_mission_3"],
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    flex_css: "1 0 60%",
    title: "short_term_goals",
    contents: [
      "content_short_term_goals_1",
      "content_short_term_goals_2",
      "content_short_term_goals_3",
      "content_short_term_goals_4",
      "content_short_term_goals_5",
    ],
  },
  {
    icon: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
    flex_css: "1 0 40%",
    title: "long_term_goals",
    contents: [
      "content_long_term_goals_1",
      "content_long_term_goals_2",
      "content_long_term_goals_3",
      "content_long_term_goals_4",
    ],
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", zIndex: 100 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", zIndex: 100 }}
      onClick={onClick}
    />
  );
}

const About = (props) => {
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

  const [changeInfoLocate, setChangeInfoLocate] = useState(dataInfoLocate[0]);
  const handleChange = (current) => {
    setChangeInfoLocate(dataInfoLocate[current]);
  };

  const settings = {
    className: "center",
    centerMode: true, // Center the main image
    centerPadding: "50px", // No padding between images
    slidesToShow: 3, // Show 3 slides (1 main + 2 blurred sub-images)
    infinite: true, // Loop through images infinitely
    speed: 500, // Animation speed
    focusOnSelect: true, // Clicking selects the slide
    arrows: true, // Hide navigation arrows
    nextArrow: <SampleNextArrow style={{ zIndex: 100 }} />,
    prevArrow: <SamplePrevArrow style={{ zIndex: 100 }} />
  };

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Eco-tourism in Vietnam",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/26591086/pexels-photo-26591086/free-photo-of-portrait-of-blue-dacnis-sitting-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Vietnamese Cuisine",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/15985570/pexels-photo-15985570/free-photo-of-view-of-trees-and-snowcapped-mountains-from-a-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Luxury Stay",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/26591086/pexels-photo-26591086/free-photo-of-portrait-of-blue-dacnis-sitting-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Vietnamese Cuisine",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/26591086/pexels-photo-26591086/free-photo-of-portrait-of-blue-dacnis-sitting-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Vietnamese Cuisine",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/26591086/pexels-photo-26591086/free-photo-of-portrait-of-blue-dacnis-sitting-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Vietnamese Cuisine",
    },
  ];

  return (
    <>
      {/* Image slider */}
      <div className="container-slider">
        <div
          className="img-background"
          style={{
            backgroundImage: `url(${changeInfoLocate.backgroundLocate})`,
          }}
        >
          <Row className="row">
            <Col flex="1 0 50%" className="column">
              <Flex vertical align="flex-end" justify="space-between">
                <div
                  style={{
                    padding: "80px 30px",
                    position: "absolute",
                    top: "10px",
                  }}
                >
                  <Title level={2} style={{ color: "white" }}>
                    {changeInfoLocate.content.location}
                  </Title>
                  <Title style={{ color: "white" }}>
                    {changeInfoLocate.content.title}
                  </Title>
                  <Title level={5} style={{ color: "white" }}>
                    {changeInfoLocate.content.description}
                  </Title>
                  <Button
                    type="primary"
                    href="https://ant.design"
                    target="_blank"
                  >
                    {t("explore")}
                  </Button>
                </div>
              </Flex>
            </Col>
            <Col flex="1 0 50%" className="column">
              <div
                style={{
                  position: "absolute",
                  top: "120px",
                  right: "140px",
                  width: "30%",
                  height: "100px",
                  padding: "10px",
                }}
              >
                <Carousel
                  autoplay
                  autoplaySpeed={3000}
                  afterChange={handleChange}
                >
                  {dataInfoLocate.map((item, index) => (
                    <div key={index}>
                      <img
                        alt="avatar"
                        src={item.avatarLocate}
                        className="img-avatar"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Company information */}
      <div className="container-block container-company-info">
        <Row className="row">
          <Col flex="1 0 30%" className="column">
            <div className="block-info-left">
              <img
                alt="avatar"
                src={`${import.meta.env.VITE_API_URL}/images/aboutUsImage/CEOVecotraImage.jpg`}
                className="img-avatar"
              />
            </div>
          </Col>
          <Col flex="1 0 70%" className="column">
            <div className="block-info-right">
              <Title className="info-title">{t("company_information")}</Title>
              <div
                style={{
                  backgroundColor: "#fbfbfb",
                  borderRadius: "10px",
                  padding: "20px 35px",
                  border: "1px solid #fbfbfb",
                  boxShadow:
                    "rgb(0 0 0 / 10%) 25px 35px 24px -11px, rgb(0 0 0 / 10%) 20px 25px 20px -10px",
                  margin: "20px 0px",
                  width: "fit-content",
                }}
              >
                <ol>
                  <li>
                    <Title level={5}>{t("company_name")}:</Title>
                    <p>
                      <span>- {t("vietnamese_name")}: </span>
                      <span className="font-normal">
                        CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ DU LỊCH VECOTRA
                      </span>
                    </p>
                    <p>
                      <span>- {t("international_name")}: </span>
                      <span className="font-normal">
                        VECOTRA TRAVEL SERVICE TRADING COMPANY LIMITED
                      </span>
                    </p>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>{t("date_of_establishment")}: </span>
                      <span className="font-normal">July 12, 2024</span>
                    </Title>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>
                        {t("tax_code")}/ {t("business_license_no")}:{" "}
                      </span>
                      <span className="font-normal">0318565202</span>
                    </Title>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>{t("international_travel_license")}: </span>
                      <span className="font-normal">
                        79-1967/2024/CDLQGVN-GP LHQT
                      </span>
                    </Title>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>{t("legal_representative")}: </span>
                      <span>(Mrs.) Dang Le Hao</span>
                      <span> - {t("title")}: </span>
                      <span className="font-normal">General Director</span>
                    </Title>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>{t("address")}: </span>
                      <span className="font-normal">
                        159/22F Dao Duy Anh Street, Ward 09, Phu Nhuan District,
                        HCMC, Vietnam
                      </span>
                    </Title>
                  </li>
                </ol>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Our Story */}
      <div className="container-block container-our-story">
        {/* first block */}
        <div className="first-block">
          <div className="sub-block">
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
                className="uppercase"
                style={{ marginBottom: "0px", color: "white" }}
              >
                {t("our_story")}
              </Title>
            </div>
            <div>
              <Row className="row">

                <div className="column">
                  <div
                    style={{
                      border: "4px solid white",
                      width: "7%",
                      position: "absolute",
                      right: "45px",
                    }}
                  ></div>
                  <p style={{ paddingTop: "25px" }}>
                    <span className="font-italic text-white">VEcoTra </span>
                    <span className="font-normal" style={{ color: "#bff0c7" }}>
                      Travel Service Trading Company Limited (Vietnam Eco
                      Travel) is one of the leading companies in green and
                      sustainable tourism in Vietnam. Guided by s strategy to
                      create eco-friendly journeys and foster lasting
                      connections,
                    </span>
                    <span className="font-italic text-white">VEcoTra </span>
                    <span className="font-normal" style={{ color: "#bff0c7" }}>
                      is dedicated to offering environmentally friendly travel
                      experiences while contributing to nature conservation and
                      preservation.
                    </span>
                  </p>
                </div>

                <Col flex="1 0 65%" className="column">
                  <div className="block-info-left">
                    <p>
                      <span className="font-italic">VEcoTra </span>
                      <span
                        className="font-normal"
                        style={{ color: "#bff0c7" }}
                      >
                        Travel Service Trading Company Limited (Vietnam Eco
                        Travel) is one of the leading companies in green and
                        sustainable tourism in Vietnam. Guided by s strategy to
                        create eco-friendly journeys and foster lasting
                        connections,
                      </span>
                      <span className="font-italic">VEcoTra </span>
                      <span
                        className="font-normal"
                        style={{ color: "#bff0c7" }}
                      >
                        is dedicated to offering environmentally friendly travel
                        experiences while contributing to nature conservation
                        and preservation.
                      </span>
                    </p>
                  </div>
                </Col>
                <Col flex="1 0 35%" className="column">
                  <div className="block-info-right">
                    <div>
                      <div
                        style={{
                          border: "4px solid white",
                          width: "20%",
                          position: "absolute",
                          right: "20px",
                        }}
                      ></div>
                      {/* <img
                        alt="avatar"
                        src={`${import.meta.env.VITE_API_URL}/images/logoVecotra/mainLogoVecotra.png`}
                        className="img-avatar img-logo"
                      /> */}
                    </div>
                  </div>
                </Col>

              </Row >
            </div >
          </div >
        </div >
        {/* second block */}
        <div  >
          <div className="second-block">
            <div>
              <Row className="row">
                <Col flex="1 0 65%" className="column">
                  <div className="block-info-left">
                    <div
                      style={{
                        border: "4px solid #3ab54a",
                        width: "10%",
                        position: "absolute",
                        bottom: "-15px",
                      }}
                    ></div>
                    <div>
                      <p>
                        <span
                          className="font-normal font-italic"
                          style={{ color: "#565656" }}
                        >
                          From the beginning, we have taken pride in pioneering
                          green tourism solutions that minimize environmental
                          impact and honor local cultures. With a team of
                          passionate and professional staff,
                        </span>
                        <span className="font-italic">VEcoTra </span>
                        <span
                          className="font-normal font-italic"
                          style={{ color: "#565656" }}
                        >
                          is committed to providing you with memorable and
                          meaningful travel experiences.
                        </span>
                      </p>
                      <p>
                        <span
                          className="font-normal"
                          style={{ color: "#565656" }}
                        >
                          At{" "}
                        </span>
                        <span className="font-italic">VEcoTra, </span>
                        <span
                          className="font-normal"
                          style={{ color: "#565656" }}
                        >
                          we believe that travel is not only about exploring new
                          destinations but also about protecting and valuing
                          natural and cultural treasures. Embracing our motto,
                          &quot;Green Journeys - Sustainable Connections,&quot;
                          we aim to build a sustainable and environmentally
                          friendly tourism future.
                        </span>
                      </p>
                      <p>
                        <span
                          className="font-normal"
                          style={{ color: "#565656" }}
                        >
                          Join{" "}
                        </span>
                        <span className="font-italic">VEcoTra </span>
                        <span
                          className="font-normal"
                          style={{ color: "#565656" }}
                        >
                          to explore and experience the wonders of
                          Vietnam&apos;s nature in a completely new and
                          sustainable way.
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col flex="1 0 35%" className="column">
                  <div className="block-info-right">
                    <div
                      style={{
                        border: "4px solid white",
                        width: "20%",
                        position: "absolute",
                        right: "20px",
                      }}
                    ></div>
                    <img
                      alt="avatar"
                      src={`${import.meta.env.VITE_API_URL}/images/logoVecotra/mainLogoVecotra.png`}
                      className="img-avatar"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div >
      </div >

      {/* Business Sectors */}
      <div className="container-block container-business-sectors" >
        <Title
          className="uppercase"
          style={{
            paddingRight: "20px",
            borderRight: "5px solid #e9b853",
            width: "fit-content",
          }}
        >
          {t("business_sectors")}
        </Title>
        <div className="text-center" style={{ marginBottom: "20px" }}>
          <Title level={4} className="text-green">
            {t("main_business_sector")}
          </Title>
          <Text>
            {t("tour_operation")},{" "}
            {t("international_travel_license").toLowerCase()}
          </Text>{" "}
          <br />
          <Text>No.79-1967/2024/CDLQGVN-GPLHQT</Text> <br />
          <Text>
            {t("issued_by_the_vietnam_national_administration_of_tourism")}
          </Text>
        </div>
        <div className="text-center">
          <Title
            level={4}
            className="text-green"
            style={{ marginBottom: "20px" }}
          >
            {t("other_business_sectors_include")}
          </Title>
          <div
            className="d-flex"
            style={{ justifyContent: "center", gap: "30px", flexWrap: "wrap" }}
          >
            {dataOtherBusinessSectors.map((item, index) => (
              <div key={index} className="other-business-block">
                <div className="image-icon">
                  <img
                    alt="avatar"
                    src={item.icon}
                    className="img-avatar"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <Text style={{ color: "white" }}>{t(item.title)}</Text>
              </div>
            ))}
          </div>
        </div>
      </div >

      {/* Core Values */}
      <div className="container-block container-core-values" >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="core-values-main-block">
            <div className="image-icon">
              <img
                alt="avatar"
                src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="img-avatar"
              />
            </div>
            <Title
              className="uppercase"
              style={{ color: "white", fontSize: "60px" }}
            >
              {t("core_values")}
            </Title>
          </div>
        </div>
        <div
          className="d-flex justify-center core-values-list"
          style={{
            gap: "30px",
            flexWrap: "wrap",
            textAlign: "center",

          }}
        >
          {dataCoreValues.map((item, index) => (
            <div key={index} className="core-values-block">
              <div className="image-icon">
                <img
                  alt="avatar"
                  src={item.icon}
                  className="img-avatar"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <Title level={4} style={{ color: "white" }}>
                {t(item.title)}
              </Title>
            </div>
          ))}
        </div>
      </div >

      {/* Vision */}
      <div className="container-block container-vision" >
        <Row className="row">
          {dataVision.map((item, index) => (
            <Col key={index} flex={item.flex_css} className="column">
              <div className="block-vision">
                {/* image */}
                <img
                  alt="avatar"
                  src={item.icon}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "10%",
                  }}
                />

                {/* title */}
                <Title
                  level={3}
                  className="uppercase"
                  style={{ color: "#575757", marginBottom: "0px" }}
                >
                  {t(item.title)}
                </Title>

                {/* content */}
                <div style={{ padding: "0px 30px" }}>
                  <ul>
                    {item.contents.map((content, index_content) => (
                      <li key={index_content}>
                        <p>{t(content)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div >

      {/* Our Network */}
      <div className="container-block container-our-network" >
        <Title
          className="uppercase"
          style={{
            paddingRight: "20px",
            borderRight: "5px solid #e9b853",
            width: "fit-content",
          }}
        >
          {t("our_network")}
        </Title>

        {/* image */}
        <img
          alt="avatar"
          src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{ width: "100%" }}
        />
      </div >

      {/*  */}
      <div className="container-block" >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img alt="avatar" src={image.src} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div >
    </>
  );
};

export default About;
