import { useState } from 'react';
import { Button, Form, Input, Space, Select, DatePicker, Mentions, InputNumber, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { createTourAPI, uploadImageAPI } from '../../services/apiService';
import Checkbox from 'antd/es/checkbox/Checkbox';



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

const TestApi = () => {
    { <UploadOutlined /> }
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Received values from form: ', values);
        // call api to create a new Tour
        // let res = await createTourAPI(values)
        // console.log(res);
        let res = await uploadImageAPI(values, "avatar")
        console.log(res);
    };


    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };





    return (
        <div>
            <Form
                {...formItemLayout}
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
                onFinish={onFinish}
            >
                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra=""
                >
                    <Upload name="logo"
                        // action="http://192.168.0.58:8080/v1/api/files"
                        listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
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
        </div>
    );
};

export default TestApi;