import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Input, Flex, Tag, DatePicker, Button } from 'antd';
import DataTags from "../contents/DataTags";
import { EnvironmentOutlined, ProductOutlined } from '@ant-design/icons';
// import "./SearchBar.css"; // move style css to style folder --  20112024 edited by hungdv
import "../styles/SearchBar.css";

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const SearchBar = (props) => {
    const { checkLang, setCheckLang } = props;
    const { t, i18n } = useTranslation();

    const handleOnChangeLanguage = useCallback((key) => {
        if (key) {
            i18n.changeLanguage(key);
        }
    }, [i18n]);

    useEffect(() => {
        handleOnChangeLanguage(checkLang);
    }, [checkLang, handleOnChangeLanguage]);

    const dataFilter = [
        // filter_continent
        {
            label: t("continent"),
            input: <Input addonAfter={<EnvironmentOutlined />} />
        },
        // filter_country
        {
            label: t("country"),
            input: <Input addonAfter={<EnvironmentOutlined />} />
        },
        // filter_location_from
        {
            label: t("from"),
            input: <Input addonAfter={<EnvironmentOutlined />} />
        },
        // filter_location_to
        {
            label: t("to"),
            input: <Input addonAfter={<EnvironmentOutlined />} />
        },
        // filter_depart
        {
            label: t("depart"),
            input: <DatePicker onChange={onChange} style={{ width: '100%' }} />
        },
        // filter_return
        {
            label: t("return"),
            input: <DatePicker onChange={onChange} style={{ width: '100%' }} />
        }
    ]

    // HANDLE_FILTER_TAGS
    const [selectedTags, setSelectedTags] = useState([]);
    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
        // console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <>
            <div className="containerSearchBar">
                <Row className="row">
                    {dataFilter.map((item, index) => (
                        <Col key={index} flex="1 0 16%" className="column">
                            <div>
                                <p>{item.label}</p>
                                {item.input}
                            </div>
                        </Col>
                    ))}
                </Row>
                {/* filter_product */}
                <Row>
                    <Col flex="1 0 100%" className="column">
                        <div>
                            <p>{t("product")}</p>
                            <Flex gap={20}>
                                <Input addonAfter={<ProductOutlined />} />
                                <Button type="primary">Search</Button>
                            </Flex>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Flex gap={4} wrap align="center" justify="space-evenly">
                    {DataTags.map((tag) => (
                        <Tag.CheckableTag
                            key={tag.key}
                            checked={selectedTags.includes(tag.key)}
                            onChange={(checked) => handleChange(tag.key, checked)}
                        >
                            <span style={{ fontSize: '16px' }}>{t(tag.labelKey)}</span>
                        </Tag.CheckableTag>
                    ))}
                </Flex>
            </div>
        </>
    );
};

export default SearchBar;