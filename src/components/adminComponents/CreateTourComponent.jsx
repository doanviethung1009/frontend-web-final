import React, { useState } from 'react';
import { Button, Form, Input, Space, Select, DatePicker, Mentions, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import Checkbox from 'antd/es/checkbox/Checkbox';



// const SubmitButton = ({ form, children }) => {
//     const [submittable, setSubmittable] = React.useState(false);

//     // Watch all values
//     const values = Form.useWatch([], form);
//     React.useEffect(() => {
//         form
//             .validateFields({
//                 validateOnly: true,
//             })
//             .then(() => setSubmittable(true))
//             .catch(() => setSubmittable(false));
//     }, [form, values]);
//     return (
//         <Button type="primary" htmlType="submit" disabled={!submittable}>
//             {children}
//         </Button>
//     );
// };

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};
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
    const [component1Disabled, setComponent1Disabled] = useState("false");
    const [component2Disabled, setComponent2Disabled] = useState("false");
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values from form: ', values);
    };

    // create tourPrices 
    const [disabled, setDisabled] = useState(false);
    const toggle = () => {
        setDisabled(!disabled);
    };
    const selectAfter = (
        <Select
            defaultValue="USD"
            style={{
                width: 60,
            }}
        >
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
        </Select>
    );
    // create tourPrices 

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
                label="Ngôn ngữ bài viết"
                name="language"
                {...config}
            >
                <Select mode="single" placeholder="">
                    <Option value="en">EN</Option>
                    <Option value="vi">VI</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Category"
                name="category"
                {...config}
            >
                <Select mode="single" placeholder="">
                    <Option value="inbound">Inbound</Option>
                    <Option value="outbound">Outbound</Option>
                </Select>
            </Form.Item>
            {/* input tour name */}
            <Form.Item
                label="Tên tour"
                name="tourName"
                {...config}
            >
                <Input />
            </Form.Item>

            {/* input words use for seo  */}
            <Form.Item
                label="Từ khóa SEO"
                name="seoTag"
            >
                <Mentions />
            </Form.Item>

            <Form.Item
                label="Châu lục"
                name="continence"
                {...config}
            >
                <Select mode="single" placeholder="">
                    <Option value="asia">Chau A</Option>
                    <Option value="eu">Chau Au</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Quốc gia"
                name="country"
                {...config}
            >
                <Select mode="single" placeholder="">
                    <Option value="vietnam">Viet nam</Option>
                    <Option value="laos">Lao</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Tour Code"
                name="tourCode"
                {...config}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Thời gian:"
                name="tourDaySub1"
                {...config}
                style={{
                    display: 'inline-block',
                    // width: 'calc(50% - 30px)',
                    width: "450px"
                }}
            >
                <Input style={{ width: "200px" }} placeholder="Input birth year" />
            </Form.Item>
            <Form.Item
                name="tourDaySub2"
                {...config}
                style={{
                    display: 'inline-block',
                    width: "200px",
                    // margin: '0 8px',
                }}
            >
                <Input placeholder="Input birth month" />
            </Form.Item>

            <Form.Item
                name="tourTrasport"
                label="Phương tiện di chuyển"
            // rules={[
            //     {
            //         required: true,
            //         message: 'Please select   !',
            //         type: 'array',
            //     },
            // ]}
            >
                <Select
                    showSearch
                    placeholder="Select a person"
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
                <Select mode="multiple" placeholder="Please select  ">
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
                name="tourScheduledChooseDate"
            >
                <DatePicker disabled={!component1Disabled} style={{ width: "200px" }} />
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
                name="tourScheduledSelectedDate"
            >
                <Select mode="single" disabled={!component2Disabled} placeholder="Please select" style={{ width: "200px" }}>
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
                rules={[
                    {
                        required: true,
                        message: 'Please choose!',
                    },
                ]}
            >
                <Select mode="single" placeholder="">
                    <Option value="vietnam">hcm</Option>
                    <Option value="laos">hn</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Hình thức tour"
                name="tourType"
                rules={[
                    {
                        required: true,
                        message: 'Please choose!',
                    },
                ]}
            >
                <Select mode="single" placeholder="">
                    <Option value="personal">Ca nhan</Option>
                    <Option value="team">Nhom</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Ngôn ngữ hỗ trợ"
                name="langSupport"
                rules={[
                    {
                        required: true,
                        message: 'Please choose!',
                    },
                ]}
            >
                <Select mode="single" placeholder="">
                    <Option value="EN">EN</Option>
                    <Option value="Vi">VI</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label=" Giá tour"
                name="tourPrice"

            >

                <InputNumber
                    addonAfter={selectAfter}
                    defaultValue={100}
                    // suffix="VND"
                    disabled={disabled}
                    value="price" />

                <Button onClick={toggle} type="primary">
                    Toggle disabled
                </Button>
            </Form.Item>


            <Form.Item
                label="Tổng quan"
                name="tourDescription"
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                label="Điểm nổi bật"
                name="tourHighlight"
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>


            <Form.Item
                label="Lịch trình chi tiết"
                name="tourDetail"
            >
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex',
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'first']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing first name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'last']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing last name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Last Name" />
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


