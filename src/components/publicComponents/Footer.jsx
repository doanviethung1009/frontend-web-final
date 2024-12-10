import { Row, Col, Typography } from "antd";
import "../../styles/publicStyles/Footer.css";
import {
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const dataInfoContact = [
  {
    icon: <PhoneOutlined className="border-icon" />,
    content: "+84 123 456 789",
  },
  {
    icon: <MailOutlined className="border-icon" />,
    content: "info@vecotra.com",
  },
  {
    icon: <GlobalOutlined className="border-icon" />,
    content: "vecotra.com",
  },
];

const dataInfoLicense = [
  {
    title: "International Travel License:",
    content: "79-1967/2024/CDLQGVN-GP LHQT",
  },
  {
    title: "Tax code/ Business License no.:",
    content: "0318565202",
  },
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <Row className="row text-center">
        <Col flex="1 0 25%" className="column"></Col>
        <Col flex="1 0 50%" className="column">
          <Row className="row">
            <Col flex="1 0 20%" className="column">
              About us
            </Col>
            <Col flex="1 0 20%" className="column">
              Product
            </Col>
            <Col flex="1 0 20%" className="column">
              Partner
            </Col>
            <Col flex="1 0 20%" className="column">
              Travel Guide
            </Col>
            <Col flex="1 0 20%" className="column">
              Contact
            </Col>
          </Row>
        </Col>
        <Col flex="1 0 25%" className="column"></Col>
      </Row>
      <Row className="row">
        {/* first column */}
        <Col flex="1 0 35%" className="column first-column">
          <div style={{ padding: "0px 20px" }}>
            <Title
              level={3}
              className="uppercase text-white"
              style={{
                paddingRight: "20px",
              }}
            >
              VECOTRA TRAVEL SERVICE TRADING COMPANY LIMITED
            </Title>
            <Row>
              {/* LOGO */}
              <Col flex={2}>
                <div className="d-flex">
                  <img
                    alt="avatar"
                    src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="logo-footer"
                  />
                </div>
              </Col>
              {/* INFORMATION */}
              <Col flex={3}>
                {dataInfoContact.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex"
                    style={{ marginBottom: "10px" }}
                  >
                    {item.icon}
                    <Title level={4} className="content-info-contact">
                      {item.content}
                    </Title>
                  </div>
                ))}
              </Col>
            </Row>
            {/* INFO ADDRESS */}
            <Row>
              <Col flex={1}>
                <div className="d-flex">
                  <EnvironmentOutlined className="border-icon icon-address" />
                  <Title level={4} className="content-info-contact">
                    159/22F Dao Duy Anh, Ward 09, Phu Nhuan District, Ho Chi
                    Minh City, Vietnam
                  </Title>
                </div>
              </Col>
            </Row>
            {/* INFO LICENSE */}
            <Row>
              <Col flex={1}>
                {dataInfoLicense.map((item, index) => (
                  <div key={index} className="d-flex">
                    <Title
                      level={5}
                      className="content-info-license"
                      style={{ marginRight: "5px" }}
                    >
                      {item.title}
                    </Title>
                    <Text className="text-white content-info-license">
                      {item.content}
                    </Text>
                  </div>
                ))}
              </Col>
            </Row>
          </div>
        </Col>

        {/* second column */}
        <Col flex="1 0 30%" className="column second-column">
          <div className="d-flex">
            <img
              alt="avatar"
              src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="footer-map"
            />
          </div>
        </Col>
        {/* third column */}
        <Col flex="1 0 35%" className="column">
          Partner
        </Col>
      </Row>
      <Row className="row text-center">
        <Col flex="1 0 100%" className="column">
          <div>Copyright © 2024 VEcotra. All rights reserved</div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
