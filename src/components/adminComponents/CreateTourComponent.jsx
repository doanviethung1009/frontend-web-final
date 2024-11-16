import { useState } from 'react';
import { Button, Form, Input, Space, Select, DatePicker, Mentions, InputNumber, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { createTourAPI } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { toast } from 'react-toastify';


const formItemLayout = {
    labelCol: {
        lg: {
            span: 120,
        },
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        lg: {
            span: 32,
        },
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};

const custLayout = {
    style: {
        width: '550px'
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

const CreateTourComponent = (props) => {
    const { checkLang, setCheckLang } = props;
    const { Option } = Select;

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {

        console.log('Received values from form: ', values);
        // call api to create a new Tour
        let res = await createTourAPI(values)

        if (res.message && res.message.errCode === 0) {
            console.log("check log", res.message.errMess);
            toast.success('sucessfully created');
            navigate('/tourAdmin');  // Use navigate to redirect to /tourAdmin
        }
        // return <Navigate to="/tourAdmin" replace />;

    };
    const [component1Disabled, setComponent1Disabled] = useState("false");
    const [component2Disabled, setComponent2Disabled] = useState("false");

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
        >

            <Form.Item
                label="Category"
                name="tourCategory"
                {...config}
                {...custLayout}
            >
                <Select mode="single" placeholder="" {...custLayout}>
                    <Option value="inbound">Inbound</Option>
                    <Option value="outbound">Outbound</Option>
                </Select>
            </Form.Item>
            {/* input tour name */}
            <Form.Item
                label="Tên tour"
                name="tourName"
                {...config}
                {...custLayout}
            >
                <Input {...custLayout} />
            </Form.Item>

            {/* input words use for seo  */}
            <Form.Item
                label="Từ khóa SEO"
                name="seoTag"
                {...custLayout}
            >
                <Mentions {...custLayout} />
            </Form.Item>

            <Form.Item
                label="Châu lục"
                name="tourContinence"
                {...config}
                {...custLayout}
            >
                <Select mode="single" placeholder=""  {...custLayout}>
                    <Option value="asia">Chau A</Option>
                    <Option value="eu">Chau Au</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Quốc gia"
                name="tourCountry"
                {...config}
                {...custLayout}
            >
                <Select mode="single" placeholder=""  {...custLayout}>
                    <Option value="vietnam">Viet nam</Option>
                    <Option value="laos">Lao</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Tour Code"
                name="tourCode"
                {...config}
                {...custLayout}
            >
                <Input  {...custLayout} />
            </Form.Item>
            <Form.Item>
                <Space
                    style={{
                        display: 'flex',
                        marginBottom: 8,
                        justifyItems: "center"
                    }}
                    align="baseline"
                >
                    <span style={{ display: "flex" }}>
                        thoi gian:
                    </span>
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
                        Ngay
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
                        Dem
                    </span>
                </Space>
            </Form.Item>


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

            <Form.Item
                name="tourAccommodation"
                label="Lưu trú"
                {...rangeConfig} >
                <Select       {...custLayout} mode="multiple" placeholder="Please select  ">
                    <Option value="resort">Resort</Option>
                    <Option value="hotel">Hotel</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Khởi hành"
            >
                <Checkbox checked={component1Disabled}
                    onChange={(e) => {
                        console.log('Check e', e)
                        setComponent1Disabled(e.target.checked)

                    }}
                />
            </Form.Item>
            <Form.Item
                label="Choose dates"
                {...custLayout}
                name="tourScheduledChooseDate"
            >
                <DatePicker disabled={!component1Disabled} {...custLayout} />

            </Form.Item>

            <Form.Item>
                <Checkbox
                    checked={component2Disabled}
                    onChange={(e) => {
                        console.log('Check e', e)
                        setComponent2Disabled(e.target.checked)
                    }}
                />
            </Form.Item>
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

            <Form.Item
                label="Hình thức tour"
                name="tourType"
                {...config}
                {...custLayout}
            >
                <Select mode="single" placeholder=""  {...custLayout}>
                    <Option value="personal">Cá nhân</Option>
                    <Option value="team">Nhóm</Option>
                </Select>
            </Form.Item>

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


            {/* tourPrices */}
            <Form.Item
                label=" Giá tour"
                name="tourPriceVND"
                {...custLayout}
            >

                <InputNumber
                    {...custLayout}
                    // addonAfter={selectAfter}
                    // defaultValue={0}
                    placeholder='Input price for vnd here:'
                    suffix="VND"
                    value="priceVI" />
            </Form.Item>
            <Form.Item
                label=" Giá tour USD"
                name="tourPriceEN"
                {...custLayout}
            >
                <InputNumber
                    {...custLayout}
                    // addonAfter={selectAfter}
                    // defaultValue={0}
                    placeholder='Input price for vnd here:'
                    suffix="USD"
                    value="priceEN" />
            </Form.Item>
            {/* tourPrices */}

            {/* tourDescription */}
            <Form.Item
                label="Tổng quan"
                name="tourDescriptionVI"
                {...config}
                {...custLayout}
            >
                <Input.TextArea style={{ width: "100%", maxWidth: "500px" }} rows={4} />
            </Form.Item>
            <Form.Item
                label="Tổng quan EN"
                name="tourDescriptionEN"
                placeholder="nhập nội dung tiếng anh"
                {...config}
                {...custLayout}
            >
                <Input.TextArea style={{ width: "100%", maxWidth: "500px" }} rows={4} />
            </Form.Item>
            {/* tourDescription */}

            {/* tourHighlight */}
            <Form.Item
                label="Điểm nổi bật"
                name="tourHighlightVI"
                {...config}
                {...custLayout}
            >
                <Input.TextArea style={{ width: "100%", maxWidth: "500px" }} rows={4} />
            </Form.Item>

            <Form.Item
                label="Điểm nổi bật EN"
                name="tourHighlightEN"
                {...config}
                {...custLayout}
            >
                <Input.TextArea style={{ width: "100%", maxWidth: "500px" }} rows={4} />
            </Form.Item>
            {/* tourHighlight */}


            {/* tourDetail */}
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
                                        <Input placeholder="Title Description" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'description']}
                                        {...config}
                                    >
                                        <Input.TextArea style={{ width: "100%", maxWidth: "500px" }} rows={4} placeholder="Content Description" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form.Item>
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
                                        <Input placeholder="Title Description" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'description']}
                                        {...config}
                                    >
                                        <Input.TextArea style={{ width: "100%", maxWidth: "500px" }} rows={4} placeholder="Content Description" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form.Item>
            {/* tourDetail */}



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
    );
};
export default CreateTourComponent;


