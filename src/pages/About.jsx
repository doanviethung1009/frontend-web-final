import { useState } from "react";
import { Carousel, Flex, Typography, Button, Row, Col } from "antd";
import "../styles/about.css";

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
  const [changeInfoLocate, setChangeInfoLocate] = useState(dataInfoLocate[0]);
  const handleChange = (current) => {
    setChangeInfoLocate(dataInfoLocate[current]);
  };

  return (
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
              Explore
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
            <Carousel autoplay autoplaySpeed={3000} afterChange={handleChange}>
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
  );
};

export default About;
