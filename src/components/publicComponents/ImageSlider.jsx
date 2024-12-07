import { useState } from 'react';
import '../../styles/publicStyles/ImageSlider.css';
import { Carousel, Flex, Typography, Button, Row, Col } from 'antd';

const { Title } = Typography;

const ImageSlider = ({dataInfoLocate}) => {

  const [changeInfoLocate, setChangeInfoLocate] = useState(dataInfoLocate[0]);
  const handleChange = (current) => {
    setChangeInfoLocate(dataInfoLocate[current]);
  };

  return (
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
                  padding: '80px 30px',
                  position: 'absolute',
                  top: '10px',
                }}
              >
                <Title level={2} style={{ color: 'white' }}>
                  {changeInfoLocate.content.location}
                </Title>
                <Title style={{ color: 'white' }}>
                  {changeInfoLocate.content.title}
                </Title>
                <Title level={5} style={{ color: 'white' }}>
                  {changeInfoLocate.content.description}
                </Title>
                <Button
                  type="primary"
                  href="https://ant.design"
                  target="_blank"
                >
                  {/* {t('explore')} */}
                  explore
                </Button>
              </div>
            </Flex>
          </Col>
          <Col flex="1 0 50%" className="column">
            <div
              style={{
                position: 'absolute',
                top: '120px',
                right: '140px',
                width: '30%',
                height: '100px',
                padding: '10px',
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
  );
};

export default ImageSlider;
