import { Button, Checkbox, Form, Input } from 'antd';
import { loginUser } from '../services/apiService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth.Context';


const Login = () => {
    const { setUser } = useContext(AuthContext)
    // const onFinish = (values) => {
    //     console.log('Success:', values);
    // };

    // make redirect with hook
    const navigate = useNavigate();

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleOnLogin = async (values) => {
        // Call API to login
        // console.log('Login values:', values);

        // console.log('Data from API:', data);
        try {
            let message = await loginUser(values);
            console.log('Message:', message);
            if (message && message.errCode === 0) {
                // console.log('Success:', message.data)
                setUser(message.data)
                toast.success('Logged in successfully');
                navigate("/tourAdmin");  // Redirect to home or protected page
            } else {
                toast.error(`login page: ${message.message}`);
            }
        } catch (error) {
            console.log('Failed:', error);
        }
    }
    return (

        <div className="containerLogin">
            <div className="headerLogin">

            </div>
            <div className="formLogin">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                    onFinish={handleOnLogin}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="userName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="userPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                {/* <ToastContainer position="top-right" autoClose={3000} /> */}
            </div>

        </div >
    );
};

export default Login;