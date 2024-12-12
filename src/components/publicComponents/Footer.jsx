import { Row, Col, Typography,Flex } from "antd";
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
const dataIconBank=[{
  alt:'MasterCard',
  image:'https://banner2.cleanpng.com/20190713/cfa/kisspng-mastercard-scalable-vector-graphics-credit-card-lo-financial-information-dental-distinction-1713879886032.webp'
},{
  alt:'Visa',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/200px-Visa.svg.png'
},{
  alt:'VnPay',
  image:'https://vnpay.vn/s1/statics.vnpay.vn/2023/6/0oxhzjmxbksr1686814746087.png'
},{
  alt:'Momo',
  image:'https://developers.momo.vn/v3/vi/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png'
}
]
const dataImageQR={
  imageIntroduce:{
    title:'image introduce',
    image:'https://hostelmanagement.com/sites/default/files/recommended-on-tripadvisor_0.jpg'
  },
  imageQR:[
    {
      title:'image qr zalo',
      image:'https://hostelmanagement.com/sites/default/files/recommended-on-tripadvisor_0.jpg'
    },
    {
      title:'image qr phonenumber',
      image:'https://hostelmanagement.com/sites/default/files/recommended-on-tripadvisor_0.jpg'
    }
  ]
}
const dataIconSocial=[
  {
    title:'facebook',
    image:'https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png'
  },
  {
    title:'instagram',
    image:'https://i.pinimg.com/736x/ff/5a/e7/ff5ae72f423c7a1a2e6daf347ff1b5e2.jpg'
  }, 
  {
    title:'tiktok',
    image:'https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338429_640.png'
  }
  , 
  {
    title:'youtube',
    image:'https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png'
  }
]

const Footer = () => {
  return (
    <footer className="footer-container">
      <Row className="row text-center">
        <Col flex="1 0 25%" className="column"></Col>
        <Col flex="1 0 50%" className="column ">
          <Row className="row list-menu-column">
            <Col flex="1 0 20%" className="column">
              <strong>About us</strong>
            </Col>
            <Col flex="1 0 20%" className="column">
              <strong>Product</strong>
            </Col>
            <Col flex="1 0 20%" className="column">
              <strong>Partner</strong>
            </Col>
            <Col flex="1 0 20%" className="column">
             <strong> Travel Guide</strong>
            </Col>
            <Col flex="1 0 20%" className="column">
              <strong>Contact</strong>
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
        <Col flex="1 0 25%" className="column thirt-column">
          
          <Flex className="thirt-column-content" vertical >
              <p>Payment Support On:</p>
              <Row gutter={[10,10]} className='list-icon-bank'> 
                {dataIconBank.map((item)=>
                  (
                    <Col key={item.alt} className='icon-bank'>
                       <img src={item.image} alt={item.alt} />
                    </Col>
                  )
                )}
              </Row>
              <Row className='contact-qr'>
                <Col className='image-introduce'>
                     <img src={dataImageQR.imageIntroduce.image} alt={dataImageQR.imageIntroduce.title}/>
                </Col>
                <Col className='list-image-qr'>
                    <Flex vertical> 
                       <p>For Business Cooperation:</p>
                         <Row className='wrapp-img-qr'>
                           <Col>
                           <img src={dataImageQR.imageQR[0].image} alt={dataImageQR.imageQR[0].title}/>
                           </Col>
                           <Col>
                           <img src={dataImageQR.imageQR[1].image} alt={dataImageQR.imageQR[1].title}/>
                           </Col>
                         </Row>
                    </Flex>
                </Col>
              </Row>
              <p>Follow Us On Social:</p>
              <Row className="list-icon-social">
                <Row>
                 {
                    dataIconSocial.map((item)=>(
                      <Col key={item.title}>
                       <img src={item.image} alt={item.title} />
                      </Col>
                    ))
                  }
                 </Row>
                 <Col  className="logo-vip" > <img src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png" alt="logo" /></Col>
                
              </Row>
          </Flex>

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
