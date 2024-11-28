import { useState, useCallback } from "react";
import { Carousel, Flex, Typography, Button, Row, Col } from "antd";
import "../styles/about.css";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

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
      location: "Ho Chi Minh City, Vietnam",
      title: "Nightview in Ho Chi Minh City",
      description:
        "Witness the dynamic nightlife of HCM City, where the skyline meets the sparkling riverside, and the energy of the city never sleep",
    },
  },
];

const About = () => {
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

  const [changeInfoLocate, setChangeInfoLocate] = useState(dataInfoLocate[0]);
  const handleChange = (current) => {
    setChangeInfoLocate(dataInfoLocate[current]);
  };

  return (
    <>
      <div
        className="img-background"
        style={{
          backgroundImage: `url(${changeInfoLocate.backgroundLocate})`,
        }}
      >
        <Row className="row">
          <Col flex="1 0 50%" className="column">
            <Flex
              vertical
              align="flex-end"
              justify="space-between"
              style={{ padding: 32 }}
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
              <Button type="primary" href="https://ant.design" target="_blank">
                {t("explore")}
              </Button>
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

      {/* Company information */}
      <div className="container-block container-company-info">
        <Row className="row">
          <Col flex="1 0 30%" className="column">
            <div className="block-info-left">
              <img
                alt="avatar"
                src="https://images.pexels.com/photos/4203842/pexels-photo-4203842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    </>
  );
};

export default About;
