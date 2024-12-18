import { useCallback, useEffect } from 'react';
import { Typography, Row, Col } from 'antd';
import '../styles/publicStyles/About.css';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../components/publicComponents/ImageSlider';
import ImageSwiper from '../components/publicComponents/ImageSwiper';

const { Title, Text } = Typography;

const dataInfoLocate = [
  {
    avatarLocate:
      'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backgroundLocate:
      'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
    content: {
      location: 'Ho Chi Minh City, Vietnam',
      title: 'Nightview in Ho Chi Minh City',
      description:
        'Witness the dynamic nightlife of HCM City, where the skyline meets the sparkling riverside, and the energy of the city never sleep',
    },
  },
  {
    avatarLocate:
      'https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backgroundLocate:
      'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: {
      location: 'Ha Noi, Vietnam',
      title: 'Nightview in Ha Noi City',
      description:
        'Witness the dynamic nightlife of HN City, where the skyline meets the sparkling riverside, and the energy of the city never sleep',
    },
  },
];

// data-other-business-sectors
const dataOtherBusinessSectors = [
  {
    icon: '/images/About/icon-advertising-market-research-and-event-organization.svg',
    title: 'title_data_other_business_sectors_1',
  },
  {
    icon: '/images/About/icon-road-passenger-transport-and-transport-support.svg',
    title: 'title_data_other_business_sectors_2',
  },
  {
    icon: '/images/About/icon-accommodation-and-restaurant-services.svg',
    title: 'title_data_other_business_sectors_3',
  },
  {
    icon: '/images/About/icon-agency-brokerage-for-goods-cosmetics-food-and-beverages.svg',
    title: 'title_data_other_business_sectors_4',
  },
  {
    icon: '/images/About/icon-education-training-and-artistic-activities.svg',
    title: 'title_data_other_business_sectors_5',
  },
];

// data-core-values
const dataCoreValues = [
  {
    icon: '/images/About/icon-environmental-stewardship.svg',
    title: 'environmental_stewardship',
  },
  {
    icon: '/images/About/icon-authentic-experiences.svg',
    title: 'authentic_experiences',
  },
  {
    icon: '/images/About/icon-continuous-innovation.svg',
    title: 'continuous_innovation',
  },
  {
    icon: '/images/About/icon-community-engagement.svg',
    title: 'community_engagement',
  },
  {
    icon: '/images/About/icon-cultural-respect.svg',
    title: 'cultural_respect',
  },
  {
    icon: '/images/About/icon-customer-centric-service.svg',
    title: 'customer_centric_service',
  },
  {
    icon: '/images/About/icon-integrity-and-transparency.svg',
    title: 'integrity_and_transparency',
  },
  {
    icon: '/images/About/icon-safety-and-wellbeing.svg',
    title: 'safety_and_wellbeing',
  },
];

// data-vision
const dataVision = [
  {
    icon: '/images/About/icon-vision.svg',
    flex_css: '1 0 40%',
    class_name: 'background-green',
    title: 'vision',
    contents: ['content_vision_1', 'content_vision_2'],
  },
  {
    icon: '/images/About/icon-mission.svg',
    flex_css: '1 0 60%',
    class_name: 'background-yellow',
    title: 'mission',
    contents: ['content_mission_1', 'content_mission_2', 'content_mission_3'],
  },
  {
    icon: '/images/About/icon-short-term-goals.svg',
    flex_css: '1 0 60%',
    class_name: 'background-yellow',
    title: 'short_term_goals',
    contents: [
      'content_short_term_goals_1',
      'content_short_term_goals_2',
      'content_short_term_goals_3',
      'content_short_term_goals_4',
      'content_short_term_goals_5',
    ],
  },
  {
    icon: '/images/About/icon-long-term-goals.svg',
    flex_css: '1 0 40%',
    class_name: 'background-green',
    title: 'long_term_goals',
    contents: [
      'content_long_term_goals_1',
      'content_long_term_goals_2',
      'content_long_term_goals_3',
      'content_long_term_goals_4',
    ],
  },
];

const dataWiperImage = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/26591086/pexels-photo-26591086/free-photo-of-portrait-of-blue-dacnis-sitting-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/15985570/pexels-photo-15985570/free-photo-of-view-of-trees-and-snowcapped-mountains-from-a-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/26591086/pexels-photo-26591086/free-photo-of-portrait-of-blue-dacnis-sitting-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/15985570/pexels-photo-15985570/free-photo-of-view-of-trees-and-snowcapped-mountains-from-a-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/26591086/pexels-photo-26591086/free-photo-of-portrait-of-blue-dacnis-sitting-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/15985570/pexels-photo-15985570/free-photo-of-view-of-trees-and-snowcapped-mountains-from-a-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    first_title: 'Vietnam Tourism',
    second_title: 'ECO-TOURISM ON THE RISE: EXPLORE VIETNAM’S GREEN TRAVEL DESTINATIONS',
    content: "With growing awareness about sustainable travel, eco-tourism is rapidly becoming the preferred choice for travelers seeking meaningful and environmentally-friendly experiences. Vietnam, with its stunning landscapes and diverse ecosystems, offers unique opportunities for eco-conscious visitors. Here are some top eco-tourism destinations that highlight Vietnam's natural beauty and commitment to conservation:",
    footer_content: 'Published on November 15th, 2024'
  },
];

const About = (props) => {
  const { checkLang } = props;
  const { t, i18n } = useTranslation();

  // Memoize handleOnChangeLanguage to ensure it doesn't change on each render
  const handleOnChangeLanguage = useCallback(
    (key) => {
      if (key) {
        i18n.changeLanguage(key);
      }
    },
    [i18n]
  );

  useEffect(() => {
    handleOnChangeLanguage(checkLang);
  }, [checkLang, handleOnChangeLanguage]);

  return (
    <>
      {/* Image slider */}
      <ImageSlider dataInfoLocate={dataInfoLocate} />

      {/* Company information */}
      <div className="container-block container-company-info">
        <Row className="row">
          <Col flex="1 0 20%" className="column">
            <div className="block-info-left">
              <img
                alt="avatar"
                src={`${
                  import.meta.env.VITE_API_URL
                }/images/aboutUsImage/CEOVecotraImage.jpg`}
                className="img-avatar"
              />
            </div>
          </Col>
          <Col flex="1 0 75%" className="column">
            <div className="block-info-right">
              <Title className="info-title">{t('company_information')}</Title>
              <div
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '10px',
                  padding: '35px 50px',
                  border: '1px solid #fbfbfb',
                  boxShadow:
                    'rgb(0 0 0 / 10%) 25px 35px 24px -11px, rgb(0 0 0 / 10%) 20px 25px 20px -10px',
                  margin: '20px 0px',
                }}
              >
                <ol className="algin-left">
                  <li>
                    <Title level={5}>{t('company_name')}:</Title>
                    <p>
                      <span>- {t('vietnamese_name')}: </span>
                      <span className="font-normal">
                        CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ DU LỊCH VECOTRA
                      </span>
                    </p>
                    <p>
                      <span>- {t('international_name')}: </span>
                      <span className="font-normal">
                        VECOTRA TRAVEL SERVICE TRADING COMPANY LIMITED
                      </span>
                    </p>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>{t('date_of_establishment')}: </span>
                      <span className="font-normal">July 12, 2024</span>
                    </Title>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>
                        {t('tax_code')}/ {t('business_license_no')}:{' '}
                      </span>
                      <span className="font-normal">0318565202</span>
                    </Title>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>{t('international_travel_license')}: </span>
                      <span className="font-normal">
                        79-1967/2024/CDLQGVN-GP LHQT
                      </span>
                    </Title>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>{t('legal_representative')}: </span>
                      <span>(Mrs.) Dang Le Hao</span>
                      <span> - {t('title')}: </span>
                      <span className="font-normal">General Director</span>
                    </Title>
                  </li>
                  <li>
                    <Title level={5}>
                      <span>{t('address')}: </span>
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
                marginBottom: '20px',
                paddingRight: '15px',
                borderRight: '5px solid white',
                width: 'fit-content',
                height: '40px',
              }}
            >
              <Title
                className="uppercase"
                style={{ marginBottom: '0px', color: 'white' }}
              >
                {t('our_story')}
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
                  <Title level={5} style={{ padding: "25px 0px" }}>
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
                  </Title>
                </div>
              </Row>
            </div>
          </div>
        </div>
        {/* second block */}
        <div>
          <div className="second-block">
            <div>
              <Row className="row">
                <Col flex="1 0 65%" className="column">
                  <div className="block-info-left">
                    <div
                      style={{
                        border: '4px solid #3ab54a',
                        width: '10%',
                        position: 'absolute',
                        bottom: '-15px',
                      }}
                    ></div>
                    <div>
                      <Title level={5}>
                        <div style={{ marginBottom: '10px' }}>
                          <span className="font-normal font-italic">
                            From the beginning, we have taken pride in pioneering
                            green tourism solutions that minimize environmental
                            impact and honor local cultures. With a team of
                            passionate and professional staff,
                          </span>
                          <span className="font-italic text-yellow">VEcoTra </span>
                          <span className="font-normal font-italic">
                            is committed to providing you with memorable and
                            meaningful travel experiences.
                          </span>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                          <span className="font-normal">
                            At{' '}
                          </span>
                          <span className="font-italic text-yellow">VEcoTra, </span>
                          <span className="font-normal">
                            we believe that travel is not only about exploring new
                            destinations but also about protecting and valuing
                            natural and cultural treasures. Embracing our motto,
                            &quot;Green Journeys - Sustainable Connections,&quot;
                            we aim to build a sustainable and environmentally
                            friendly tourism future.
                          </span>
                        </div>
                        <div>
                          <span className="font-normal">
                            Join{' '}
                          </span>
                          <span className="font-italic text-yellow">VEcoTra </span>
                          <span className="font-normal">
                            to explore and experience the wonders of
                            Vietnam&apos;s nature in a completely new and
                            sustainable way.
                          </span>
                        </div>
                      </Title>
                    </div>
                  </div>
                </Col>
                <Col flex="1 0 35%" className="column">
                  <div className="block-info-right">
                    <div
                      style={{
                        border: '4px solid white',
                        width: '20%',
                        position: 'absolute',
                        right: '20px',
                      }}
                    ></div>
                    <img
                      alt="avatar"
                      src={`${
                        import.meta.env.VITE_API_URL
                      }/images/logoVecotra/mainLogoVecotra.png`}
                      className="img-avatar"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      {/* Business Sectors */}
      <div className="container-block container-business-sectors">
        <Title
          className="uppercase"
          style={{
            paddingRight: '20px',
            borderRight: '5px solid #e9b853',
            width: 'fit-content',
          }}
        >
          {t('business_sectors')}
        </Title>
        <div className="text-center" style={{ marginBottom: '20px' }}>
          <Title level={4} className="text-green">
            {t('main_business_sector')}
          </Title>
          <Text>
            {t('tour_operation')},{' '}
            {t('international_travel_license').toLowerCase()}
          </Text>{' '}
          <br />
          <Text>No.79-1967/2024/CDLQGVN-GPLHQT</Text> <br />
          <Text>
            {t('issued_by_the_vietnam_national_administration_of_tourism')}
          </Text>
        </div>
        <div className="text-center">
          <Title
            level={4}
            className="text-green"
            style={{ marginBottom: '20px' }}
          >
            {t('other_business_sectors_include')}
          </Title>
          <div
            className="d-flex"
            style={{ justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}
          >
            {dataOtherBusinessSectors.map((item, index) => (
              <div key={index} className="other-business-block">
                <div className="image-icon">
                  <img
                    alt="avatar"
                    src={item.icon}
                    className="img-avatar"
                    style={{ width: 'auto', height: '135px' }}
                  />
                </div>
                <Text style={{ color: 'white' }}>{t(item.title)}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container-block container-core-values">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div className="core-values-main-block">
            <div className="image-icon">
              <img
                alt="avatar"
                src="/images/About/icon-core-values.svg"
                className="img-avatar"
              />
            </div>
            <Title
              className="uppercase"
              style={{ color: 'white', fontSize: '60px' }}
            >
              {t('core_values')}
            </Title>
          </div>
        </div>
        <div
          className="d-flex justify-center core-values-list"
          style={{
            gap: '30px',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          {dataCoreValues.map((item, index) => (
            <div key={index} className="core-values-block">
              <div className="image-icon">
                <img
                  alt="avatar"
                  src={item.icon}
                  className="img-avatar"
                  style={{ width: 'auto', height: '135px' }}
                />
              </div>
              <Title level={4} style={{ color: 'white' }}>
                {t(item.title)}
              </Title>
            </div>
          ))}
        </div>
      </div>

      {/* Vision */}
      <div className="container-block container-vision">
        <Row className="row">
          {dataVision.map((item, index) => (
            <Col key={index} flex={item.flex_css} className="column">
              <div className="block-vision">
                {/* image */}
                <img
                  alt="avatar"
                  src={item.icon}
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '10%',
                  }}
                  className={item.class_name}
                />

                {/* title */}
                <Title
                  level={3}
                  className="uppercase"
                  style={{ color: '#575757', marginBottom: '0px' }}
                >
                  {t(item.title)}
                </Title>

                {/* content */}
                <div style={{ padding: '0px 30px' }}>
                  <ul>
                    {item.contents.map((content, index_content) => (
                      <li key={index_content} style={{ textAlign: 'left' }}>
                        <p>{t(content)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Our Network */}
      <div className="container-block container-our-network">
        <Title
          className="uppercase"
          style={{
            paddingRight: '20px',
            borderRight: '5px solid #e9b853',
            width: 'fit-content',
          }}
        >
          {t('our_network')}
        </Title>

        {/* google-map */}
        <div>
          <img
            alt="avatar"
            src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* image-swiper */}
      <div className="container-block container-image-swiper">
        <ImageSwiper dataWiperImage={dataWiperImage} />
      </div>
    </>
  );
};

export default About;
