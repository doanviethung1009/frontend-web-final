import { useState } from 'react';
import { Button, Form, Input, Space, Select, DatePicker, Mentions, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { createTourAPI } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { toast } from 'react-toastify';
import "../../styles/adminStyles/createTourComponent.scss"


const formItemLayout = {
    labelCol: {
        lg: {
            span: 120,
        },
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
    // wrapperCol: {
    //     lg: {
    //         span: 32,
    //     },
    //     xs: {
    //         span: 24,
    //     },
    //     sm: {
    //         span: 12,
    //     },
    // },
};

const custLayout = {
    style: {
        width: '350px'
    }
}
const config = {
    rules: [
        {
            // type: 'object',
            required: true,
        },
    ],
};
const rangeConfig = {
    rules: [
        {
            type: 'array',
            required: true,
        },
    ],
};

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const CreateTourComponent = (props) => {
    const { checkLang, setCheckLang, next } = props;
    const { Option } = Select;
    const [form] = Form.useForm();
    const navigate = useNavigate();


    const onFinish = async (values) => {

        console.log('Received values from form: ', values);
        next();

        // call api to create a new Tour
        // let res = await createTourAPI(values)

        // if (res.message && res.message.errCode === 0) {
        //     console.log("check log", res.message.errMess);
        //     toast.success('sucessfully created');
        //     navigate('/tourAdmin');  // Use navigate to redirect to /tourAdmin
        // }
        // // return <Navigate to="/tourAdmin" replace />;

    };
    const [component1Disabled, setComponent1Disabled] = useState("false");
    const [component2Disabled, setComponent2Disabled] = useState("false");

    return (
        <div className="vecotra-CreateTour-Container">
            <Form
                {...formItemLayout}
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
                onFinish={onFinish}
            >
                <div className="vecotra-First">
                    <div className="vecotra-First">
                        <Form.Item

                            label="Category"
                            name="tourCategory"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="single" placeholder="" {...custLayout}>
                                <Option value="domestic">Domestic Tour</Option>
                                <Option value="inbound">Inbound Tour</Option>
                                <Option value="outbound">Outbound Tour</Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div className="vecotra-First">
                        {/* input tour name */}
                        <Form.Item
                            label="Class"
                            name="tourClass"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="single" placeholder="" {...custLayout}>
                                <Option value="luxury">Luxury</Option>
                                <Option value="premium">Premium</Option>
                                <Option value="economy">Economy</Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div className="vecotra-First">
                        <Form.Item
                            label="Privacy"
                            name="tourPrivacy"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="single" placeholder=""  {...custLayout}>
                                <Option value="private">Private</Option>
                                <Option value="group">Group</Option>
                            </Select>
                        </Form.Item>
                    </div>

                </div>

                <div className="vecotra-Second">
                    <div className='vecotra-Second tourName' >
                        {/* input tour name */}
                        <Form.Item
                            label="Tên tour"
                            name="tourName"
                            {...config}

                        >
                            <Input
                                style={{
                                    width: "700px"
                                }} />
                        </Form.Item>
                    </div>
                    <div className="vecotra-Second tourCode">
                        <Form.Item
                            label="Tour Code"
                            name="tourCode"
                            {...config}
                        >
                            <Input style={{
                                width: "360px"
                            }} />
                        </Form.Item>
                    </div>

                    <div className="vecotra-Second seoTag">
                        {/* input words use for seo  */}
                        <Form.Item
                            label="Filter tag"
                            name="filterTag"
                        >
                            <Mentions style={{
                                width: "1070px"
                            }} />
                        </Form.Item>

                    </div>
                </div>

                <div className="vecotra-Third">
                    <div className="vecotra-Third">
                        <Form.Item
                            label="Continent"
                            name="tourContinent"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="single" placeholder=""  {...custLayout}>
                                <Option value="asia">Asia</Option>
                                <Option value="africa">Africa</Option>
                                <Option value="northAmerica">North America</Option>
                                <Option value="southAmerica">South America</Option>
                                <Option value="antarctica">Antarctica</Option>
                                <Option value="eu">Europe</Option>
                                <Option value="australia">Australia</Option>
                            </Select>
                        </Form.Item>

                    </div>
                    <div className="vecotra-Third">
                        <Form.Item
                            label="Country"
                            name="tourCountry"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="single" placeholder=""  {...custLayout}>
                                <Option value="vietnam">Viet nam</Option>
                                <Option value="laos">Lao</Option>
                            </Select>
                        </Form.Item>

                    </div>

                    <div className="vecotra-Third">
                        <Form.Item
                            label="State/Province/City"
                            name="tourState"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="single" placeholder=""  {...custLayout}>
                                <Option value="vietnam">Viet nam</Option>
                                <Option value="laos">Lao</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                <div className="vecotra-Four">
                    <div className="vecotra-Four Schedule">
                        <Form.Item
                            label="Schedule"
                        >
                            <Space>
                                <Checkbox checked={component1Disabled}
                                    onChange={(e) => {
                                        console.log('Check e', e)
                                        setComponent1Disabled(e.target.checked)
                                    }}
                                />
                                <Form.Item
                                    label="Choose dates"
                                    {...custLayout}
                                    name="tourScheduledChooseDate"
                                >
                                    <DatePicker disabled={!component1Disabled} {...custLayout} />
                                </Form.Item>
                            </Space>
                            <Space >
                                <Checkbox
                                    checked={component2Disabled}
                                    onChange={(e) => {
                                        console.log('Check e', e)
                                        setComponent2Disabled(e.target.checked)
                                    }}
                                />
                                <Form.Item
                                    label="Choose day"
                                    {...custLayout}
                                    name="tourScheduledSelectedDate"
                                >
                                    <Select mode="single" disabled={!component2Disabled} placeholder="Please select"    {...custLayout}>
                                        <Option value="monday">Thu 2</Option>
                                        <Option value="Tuesday">Thu 3</Option>
                                        <Option value="Wednesday">Thu 4</Option>
                                        <Option value="Thursday">Thu 5</Option>
                                        <Option value="Friday">Thu 6</Option>
                                        <Option value="Saturday">Thu 7</Option>
                                        <Option value="Sunday">Chu nhat</Option>
                                    </Select>
                                </Form.Item>
                            </Space>
                        </Form.Item>

                    </div>
                    <div className="vecotra-Four durations">
                        <Form.Item
                            label="Duration"
                        >
                            <Space
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                    justifyItems: "center"
                                }}
                                align="baseline"
                            >

                                <Form.Item
                                    name="tourDaySub1"
                                    {...config}
                                    style={{
                                        display: "flex",
                                        // width: 'calc(50% - 30px)',
                                    }}
                                >
                                    <Input style={{ width: "80px" }} placeholder="Input" />
                                </Form.Item>
                                <span>
                                    day(s)
                                </span>
                                <Form.Item
                                    name="tourDaySub2"
                                    {...config}
                                    style={{
                                        display: "flex",
                                        // margin: '0 8px',
                                    }}
                                >
                                    <Input style={{ width: "80px" }} placeholder="Input" />
                                </Form.Item>
                                <span>
                                    night(s)
                                </span>
                            </Space>
                        </Form.Item>
                    </div>
                </div>

                <div className="vecotra-Five">
                    <div className="vecotra-Five tourTransport">
                        <Form.Item
                            name="tourTransport"
                            label="Phương tiện di chuyển"
                            {...rangeConfig}
                            {...custLayout}
                        >
                            <Select
                                mode='multiple'
                                showSearch
                                placeholder="Select a person"
                                {...custLayout}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        label: "oto",
                                        value: "oto"
                                    },
                                    {
                                        label: "xe may",
                                        value: "xemay"
                                    },
                                    {
                                        label: "may bay",
                                        value: "maybay"
                                    }

                                ]}
                            />


                        </Form.Item>
                    </div>
                    <div className="vecotra-Five tourAccommodation">
                        <Form.Item
                            name="tourAccommodation"
                            label="Accommodation"
                            {...rangeConfig} >
                            <Select       {...custLayout} mode="multiple" placeholder="Please select  ">
                                <Option value="resort">Resort</Option>
                                <Option value="hotel">Hotel</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                <div className="vecotra-Six">
                    <div className="vecotra-Six tourDescriptionVI">
                        {/* tourDescription */}
                        <Form.Item
                            label="Description VI"
                            name="tourDescriptionVI"
                            {...config}
                        // style={{
                        //     width: "1000px"
                        // }}
                        >
                            <Input.TextArea style={{ width: "530px" }} rows={5} />
                        </Form.Item>
                    </div>
                    <div className="vecotra-Six">
                        <Form.Item
                            label="Description EN"
                            name="tourDescriptionEN"
                            placeholder="nhập nội dung tiếng anh"
                            {...config}
                        // style={{ width: "800px" }}
                        >
                            <Input.TextArea style={{ width: "530px" }} rows={5} />
                        </Form.Item>
                        {/* tourDescription */}
                    </div>
                </div>


                <div className="vecotra-Seven">
                    <div className="vecotra-Seven">
                        <Form.Item
                            label="Khởi hành từ"
                            name="departFrom"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="single" placeholder=""  {...custLayout}>
                                <Option value="hcm">hcm</Option>
                                <Option value="hn">hn</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="vecotra-Seven">
                        <Form.Item
                            label="Ngôn ngữ hỗ trợ"
                            name="langSupport"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="multiple" placeholder=""  {...custLayout}>
                                <Option value="EN">EN</Option>
                                <Option value="Vi">VI</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>


                <div className="vecotra-Eight">
                    <div className="vecotra-Eight">
                        {/* tourPrices */}
                        <Form.Item
                            label=" Giá tour"
                            name="tourPriceVND"
                        >

                            <InputNumber
                                {...custLayout}
                                // addonAfter={selectAfter}
                                // defaultValue={0}
                                placeholder='Input price for vnd here:'
                                suffix="VND"
                                value="priceVI" />
                        </Form.Item>
                    </div>
                    <div className="vecotra-Eight">

                        <Form.Item
                            label=" Giá tour USD"
                            name="tourPriceEN"
                        >
                            <InputNumber
                                // addonAfter={selectAfter}
                                // defaultValue={0}
                                {...custLayout}

                                placeholder='Input price for vnd here:'
                                suffix="USD"
                                value="priceEN" />
                        </Form.Item>
                        {/* tourPrices */}

                    </div>
                    <div className="vecotra-Eight">
                        <Form.Item
                            label="Rating"
                            name="tourStar"
                        >

                            <InputNumber
                                // addonAfter={selectAfter}
                                // defaultValue={0}
                                {...custLayout}
                                min={0}
                                max={5}
                                defaultValue={3}

                                suffix="Star"
                                value="tourStar" />
                        </Form.Item>
                        {/* tourPrices */}

                    </div>
                </div>

                <div className="vecotra-Night">
                    <div className="vecotra-Night">
                        {/* tourHighlight */}
                        <Form.Item
                            label="Điểm nổi bật"
                            name="tourHighlightVI"
                            {...config}
                        >
                            <Input.TextArea style={{ width: "530px" }} rows={4} />
                        </Form.Item>

                    </div>
                    <div className="vecotra-Night">
                        <Form.Item
                            label="Điểm nổi bật EN"
                            name="tourHighlightEN"
                            {...config}
                        >
                            <Input.TextArea style={{ width: "530px" }} rows={4} />
                        </Form.Item>
                        {/* tourHighlight */}

                    </div>
                </div>

                <div className="vecotra-Ten">
                    <div className="vecotra-Ten tourDetailVI">
                        <Form.Item
                            label="Lịch trình chi tiết"
                            {...custLayout}
                        >
                            <Form.List
                                name="tourDetailVI"
                                {...custLayout}
                            >
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space
                                                key={key}
                                                style={{
                                                    display: 'flex',
                                                    justifyItems: "center",
                                                    marginBottom: 8,
                                                }}
                                                align="baseline"
                                            >
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'title']}
                                                    {...config}
                                                >
                                                    <Input style={{ width: "100px", maxWidth: "500px" }} placeholder="Title Description" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'description']}
                                                    {...config}
                                                >
                                                    <Input.TextArea style={{ width: "405px", maxWidth: "500px" }} rows={4} placeholder="Content Description" />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" style={{ width: "500px" }} onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Form.Item>
                    </div>
                    <div className="vecotra-Ten tourDetailEN">
                        <Form.Item
                            label="Lịch trình chi tiết EN"
                            {...custLayout}
                        >
                            <Form.List
                                name="tourDetailEN"
                                {...custLayout}
                            >
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space
                                                key={key}
                                                style={{
                                                    display: 'flex',
                                                    justifyItems: "center",
                                                    marginBottom: 8,
                                                }}
                                                align="baseline"
                                            >
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'title']}
                                                    {...config}
                                                >
                                                    <Input style={{ width: "100px", maxWidth: "500px" }} placeholder="Title Description" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'description']}
                                                    {...config}
                                                >
                                                    <Input.TextArea style={{ width: "405px", maxWidth: "500px" }} rows={4} placeholder="Content Description" />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" style={{ width: "500px" }} onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Form.Item>

                    </div>

                </div>






                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        {/* <SubmitButton form={form}>Submit</SubmitButton> */}
                        <Button htmlType="reset">Reset</Button>
                    </Space>
                </Form.Item>
            </Form >
        </div>
    );
};
export default CreateTourComponent;


