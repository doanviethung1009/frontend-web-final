import React from "react";
import {
  Carousel,
  Flex,
  Typography,
  Button,
  Row,
  Col,
  ConfigProvider,
} from "antd";

const Partner = () => {
  const dataPartner = {
    session1: {
      title: {
        text1: "LET’S SHAPE THE FUTURE",
        text2: "OF",
        text3: "TRAVEL TOGETHER",
      },
      content: `Become part of a partnership that values authentic connections and elevates
               the travel experience for global explorers. Together, we can create journeys
               that inspire, engage, and contribute to a more responsible tourism industry.`,
      button: "READY TO JOIN?",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFG0UfYkTd0vzcglqDrQev3bJ0h2aKJ43-ahFIvuLMhH4wfm2m9ajCvYQDgTSd-6Rm_fD51W3772c8pMr-JG3ZCmiTJsMKA4oHnx6Hh7UvLMhC5Syevgg6ylfSRUCg28usGK4PhX70Q84/s1600/hinh-anh-bat-tay-hop-tac-kinh-doanh-3891+%25288%2529.jpg",
      text1: `Contact us to explore partnership opportunities with VEcoTra Travel.`,
      text2: ` Let’s make a positive impact on tourism, one journey at a time.`,
    },
    session2: {
      title: "PARTNER WITH VECOTRA TRAVEL TO TRANSFORM TOURISM",
      content: {
        introduce: {
          title:
            "Collaborate with VEcoTra Travel for a Greener, More Authentic Experience",
          description: `At VEcoTra Travel, we’re dedicated to making travel both meaningful and sustainable. 
                         We’re looking to create strategic partnerships with those who share our vision
                         for responsible tourism and exceptional service. Whether you’re a travel agency,
                         accommodation provider, local artisan,transportation service, or adventure expert, 
                         join us to offer unique journeys that resonate with today’s travelers and foster positive impacts.`,
        },
        reason: {
          title: "WHY PARTNER WITH VECOTRA TRAVEL?",
          content: [
            {
              title: "Exclusive, High-Quality Experiences",
              description: `VEcoTra is an advocate for eco-friendly practices and community-based tourism.
                    Our partnerships focus on promoting local economies,preserving nature,and fostering
                    a true connection between travelers and local communities..`,
            },
            {
              title: "Commitment to Sustainable Tourism",
              description: `We design itineraries that reveal the heart of each destination, offering your clients unique experiences that stand apart.
                    By partnering with us, you gain access to exclusive travel packages that highlight the authentic beauty of every locale.`,
            },
            {
              title: "Customized and Collaborative Approach",
              description: `We believe in co-creating journeys that reflect the strengths of each partner. 
                    From boutique hotels and eco-resorts to wellness retreats and community tours, 
                    we collaborate with each partner to tailor packages that suit diverse traveler interests.`,
            },
            {
              title: "Reliability and Quality Assurance",
              description: `VEcoTra is committed to high standards and customer satisfaction. By partnering with us, 
                    you’ll benefit from our focus on quality and safety, enhancing the experience and loyalty of your clients.`,
            },
          ],
        },
        idealPartner: {
          title: "OUR IDEAL PARTNERS",
          content: [
            "Travel Agencies seeking high-quality, responsible travel options for their clients",
            "Accommodation Providers including hotels, eco-resorts, and homestays passionate about sustainable practices",
            "Local and Cultural Experiences like artisans, cultural workshops, and community-led tours",
            "Transportation Services with eco-friendly, community-driven travel options",
            "Adventure and Wellness Providers offering activities like hiking, wellness retreats, and adventure sports",
          ],
        },
        future: {
          title: "LET’S SHAPE THE FUTURE OF TRAVEL TOGETHER",
          description: `Become part of a partnership that values authentic connections and elevates the travel experience for global explorers.
               Together, we can create journeys that inspire, engage, and contribute to a more responsible tourism industry.`,
        },
      },
    },
    session3: {
      title: "OUR PARTNERS",
      iconPartner: [
        {
          title: "partner1",
          src: "https://printgo.vn/uploads/media/796109/logo-thuong-hieu-thoi-trang-01_1631781893.jpg",
        },
        {
          title: "partner2",
          src: "https://printgo.vn/uploads/media/796109/logo-thuong-hieu-thoi-trang-01_1631781893.jpg",
        },
        {
          title: "partner3",
          src: "https://printgo.vn/uploads/media/796109/logo-thuong-hieu-thoi-trang-01_1631781893.jpg",
        },
        {
          title: "partner4",
          src: "https://printgo.vn/uploads/media/796109/logo-thuong-hieu-thoi-trang-01_1631781893.jpg",
        },
        {
          title: "partner5",
          src: "https://printgo.vn/uploads/media/796109/logo-thuong-hieu-thoi-trang-01_1631781893.jpg",
        },
        {
          title: "partner6",
          src: "https://printgo.vn/uploads/media/796109/logo-thuong-hieu-thoi-trang-01_1631781893.jpg",
        },
        {
          title: "partner7",
          src: "https://printgo.vn/uploads/media/796109/logo-thuong-hieu-thoi-trang-01_1631781893.jpg",
        },
        {
          title: "partner8",
          src: "https://printgo.vn/uploads/media/796109/logo-thuong-hieu-thoi-trang-01_1631781893.jpg",
        },
      ],
    },
  };

  return (
    <div
      className="partner-container"
      style={{
        padding: "400px 0",
      }}
    >
      {/*session Join */}

      <div className="partner-session session1">
        <Row>
          <Col flex="1 0 40%" justify="center" align="middel">
            <h1>{dataPartner.session1.title.text1}</h1>
            <h1>{dataPartner.session1.title.text2}</h1>
            <h1>{dataPartner.session1.title.text3}</h1>

            <p>{dataPartner.session1.content}</p>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#3AB54A",
                  borderRadius: 14,
                },
              }}
            >
              <Button type="primary">
                <h2>{dataPartner.session1.button}</h2>
              </Button>
            </ConfigProvider>
          </Col>
          <Col flex="1 0 60%">
            <div>
              <img
                src={dataPartner.session1.img}
                alt="image"
                style={{ width: "100%", position: "relative" }}
              />
              <i
                style={{
                  position: "absolute",
                  bottom: "20%",
                  right: "50px",
                  left: "50px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {dataPartner.session1.text1} <br />
                {dataPartner.session1.text2}{" "}
              </i>
            </div>
          </Col>
        </Row>
      </div>

      {/*session Content */}
      <div className="partner-session session2">
        <h1>{dataPartner.session2.title}</h1>

        {/* Content 1 : Introduce*/}
        <div className="partner-session2-introduce">
          <h3>{dataPartner.session2.content.introduce.title}</h3>
          <p>{dataPartner.session2.content.introduce.description}</p>
        </div>
        <div className="partner-session2-reason">
          <h2>{dataPartner.session2.content.reason.title}</h2>
          <ol>
            {dataPartner.session2.content.reason.content.map((item, index) => (
              <li key={index}>
                <strong> {item.title}:</strong>
                <br />
                {item.description}
              </li>
            ))}{" "}
          </ol>
        </div>
        {/* Content 2 : Ideal Partner*/}
        <div className="partner-session2-idealpartner">
          <h2>{dataPartner.session2.content.idealPartner.title}</h2>
          <ul>
            {dataPartner.session2.content.idealPartner.content.map((item) => (
              <li key={item.title}>{item}</li>
            ))}{" "}
          </ul>
        </div>
        {/* Content 3 : Future*/}

        <div className="partner-session2-future">
          <h2>{dataPartner.session2.content.future.title}</h2>
          <p>{dataPartner.session2.content.future.description}</p>
        </div>
      </div>
      {/*session Carousel */}
      <div
        className="partner-session  session3"
        style={{
          padding: "10px 0",
          margin: "0 15px ",
          height: "auto",
          width: "auto",
        }}
      >
        <h3
          style={{
            display: "inline-block",
            borderRight: "3px solid #F7B835",
            paddingRight: "10px",
            marginBottom: "15px",
            color: "green",
          }}
        >
          OUR PARTNERS
        </h3>
        <div
          style={{
            borderImage: "linear-gradient(to bottom, #E9B853, green) 1",
            borderWidth: "4px",
            borderStyle: "solid",
            padding: "0 10px",
          }}
        >
          <Carousel
            arrows
            dots={false}
            slidesToShow={5}
            infinite={true}
            draggable={true}
            style={{ backgroundColor: "#f5f5f5" }}
          >
            {dataPartner.session3.iconPartner.map((item) => (
              <Row
                justify="center"
                align="middle"
                className="img-container"
                key={item.title}
                style={{
                  backgroundColor: "white",
                }}
              >
                <img
                  src={item.src}
                  alt="Slide 1"
                  style={{
                    width: "100%",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                />
              </Row>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Partner;
