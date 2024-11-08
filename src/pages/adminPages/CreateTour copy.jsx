import { useState } from 'react';
import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
} from 'antd';
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
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};
const CreateTour = () => {
    const [componentVariant, setComponentVariant] = useState('outlined');
    const [component1Disabled, setComponent1Disabled] = useState("false");
    const [component2Disabled, setComponent2Disabled] = useState("false");
    // useEffect(() => { }, [componentDisabled])
    const onFormVariantChange = ({ variant }) => {
        setComponentVariant(variant);
    };
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    const { Option } = Select;
    return (
        <Form
            {...formItemLayout}
            // onValuesChange={onFormVariantChange}
            variant={componentVariant}
            onFinish={onFinish}
            method='post'
            action='/createTour'
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                variant: componentVariant,
            }}
        >

            <Form.Item
                label="Ngôn ngữ bài viết"
                name="language"
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}
            >
                <Select mode="single" placeholder="">
                    <Option value="en">EN</Option>
                    <Option value="vi">VI</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Category"
                name="category"
                rules={[
                    {
                        required: true,
                        message: 'Please choose!',
                    },
                ]}
            >
                <Select mode="single" placeholder="">
                    <Option value="en">Inbound</Option>
                    <Option value="vi">Outbound</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Tên tour"
                name="tourName"
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Từ khoá SEO"
                name="seoTag"
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}
            >
                <Mentions />
            </Form.Item>

            <Form.Item
                label="Châu lục"
                name="continence"
                rules={[
                    {
                        required: true,
                        message: 'Please choose!',
                    },
                ]}
            >
                <Select mode="single" placeholder="">
                    <Option value="asia">Chau A</Option>
                    <Option value="eu">Chau Au</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Quốc gia"
                name="country"
                rules={[
                    {
                        required: true,
                        message: 'Please choose!',
                    },
                ]}
            >
                <Select mode="single" placeholder="">
                    <Option value="vietnam">Viet nam</Option>
                    <Option value="laos">Lao</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Tour Code"
                name="tourCode"
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Thời gian"
                name="tourDuration"
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}
            >
                <Input style={{ width: "50px" }} /> Ngay <Input style={{ width: "50px" }} />  Dem
            </Form.Item>

            <Form.Item
                name="tourTrasport"
                label="Phương tiện di chuyển"
                rules={[
                    {
                        required: true,
                        message: 'Please select   !',
                        type: 'array',
                    },
                ]}
            >
                <Select mode="multiple" placeholder="Please select  ">
                    <Option value="oto">oto</Option>
                    <Option value="motobike">xe may</Option>
                    <Option value="flight">may bay</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="tourAccommodation"
                label="Lưu trú"
                rules={[
                    {
                        required: true,
                        message: 'Please select   !',
                        type: 'array',
                    },
                ]} >
                <Select mode="multiple" placeholder="Please select  ">
                    <Option value="oto">Resort</Option>
                    <Option value="motobike">Hotel</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Khởi hành"
                name="tourSchedule"
                rules={[
                    {
                        required: true,
                        message: 'Please input!',
                    },
                ]}
            >
                <div>
                    <Checkbox
                        checked={component1Disabled}
                        onChange={(e) => {
                            console.log('Check e', e)
                            setComponent1Disabled(e.target.checked)

                        }}
                    />

                    <DatePicker disabled={!component1Disabled} style={{ width: "200px" }} />
                </div>
                <div>
                    <Checkbox
                        checked={component2Disabled}
                        onChange={(e) => {
                            console.log('Check e', e)
                            setComponent2Disabled(e.target.checked)

                        }}
                    />

                    <Select mode="single" disabled={!component2Disabled} placeholder="Please select" style={{ width: "200px" }}>
                        <Option value="monday">Thu 2</Option>
                        <Option value="Tuesday">Thu 3</Option>
                        <Option value="Wednesday">Thu 4</Option>
                        <Option value="Thursday">Thu 5</Option>
                        <Option value="Friday">Thu 6</Option>
                        <Option value="Saturday">Thu 7</Option>
                        <Option value="Sunday">Chu nhat</Option>
                    </Select>
                </div>
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
                rules={[
                    {
                        required: true,
                        message: 'Please choose!',
                    },
                ]}
            >
                <InputNumber value="price" />
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
                wrapperCol={{
                    offset: 6,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form >
    );
};

export default CreateTour;