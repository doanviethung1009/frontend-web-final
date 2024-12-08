import { useState } from 'react';
import { Button, Form, Input, Space, Select, DatePicker, Mentions, InputNumber, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { createTourAPI } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { toast } from 'react-toastify';
import "../../styles/adminStyles/createTourComponent.scss"
import dayjs from 'dayjs';
import { MDXEditor } from '@mdxeditor/editor';
import MarkdownModal from './modals/MarkdownModal';
import DataSelectOptionTransportation from '../../contents/DataSelectOptionTransportation';
import DataItemSelectState from '../../contents/DataItemSelectState';
import DataItemSelectAccommodation from '../../contents/DataItemSelectAccommodation';
import DataItemSelectFIlterTag from '../../contents/DataItemSelectFIlterTag';

const dateTimestamp = dayjs('2024-01-01').valueOf();


const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 }, lg: { span: 24 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 }, lg: { span: 24 } }
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
    const { checkLang, setCheckLang, next, listData, setListData } = props;
    const { Option } = Select;
    const [form] = Form.useForm();
    const navigate = useNavigate();
    // const [listData, setListData] = useState()
    const [markdown, setMarkdown] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [parentIndex, setParentIndex] = useState("");
    const [editingIndex, setEditingIndex] = useState("");

    const showModal = (parent_Index, child_index) => {
        setParentIndex(parent_Index); // Store which object in the array is being edited
        setEditingIndex(child_index); // Store which object in the array is being edited
        // const currentData = form.getFieldValue(['tourDetailEN', index]) || {};
        const currentData = form.getFieldValue([parentIndex, child_index]) || {};
        // console.log('currentData title', currentData.title);
        //validate title
        if (currentData.title) {
            setMarkdown(currentData.description || ''); // Load existing description or set empty

            // setMarkdown(''); // Load existing description or set empty
            setIsModalOpen(true);
        } else {
            message.info("please input title before open modal")
        }

    };

    const onFinish = async (values) => {
        // Extract filter tag and store it in an array
        const splitFilterTag = values.filterTag.split("@");
        const splitSeoTag = values.seoTag.split("@");

        // console.log(splitFilterTag);
        // get data in array
        // const extractedValues = splitFilterTag[splitFilterTag.length - 1]
        // console.log(extractedValues);
        setListData({
            ...values,
            splitFilterTag,
            splitSeoTag
        });
        console.log('Received values from form: ', values);
        next();
        // call api to create a new Tour
        // let res = await createTourAPI(values)

        // if (res.message && res.message.errCode === 0) {
        //     console.log("check log", res.message.errMess);
        //     toast.success('sucessfully created');
        //     // navigate('/tourAdmin');  // Use navigate to redirect to /tourAdmin
        // }
        // return <Navigate to="/tourAdmin" replace />;

    };
    const [component1Disabled, setComponent1Disabled] = useState(false);
    const [component2Disabled, setComponent2Disabled] = useState(false);

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
                            {...formItemLayout}
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
                            label="Tour Name"
                            name="tourName"
                            {...config}
                            style={{ width: "500px" }}

                        >
                            <Input />
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
                            style={{ width: "600px" }}
                        >
                            <Mentions style={{
                                width: "100%"
                            }} />
                        </Form.Item>

                    </div>
                    <div className="vecotra-Second seoTag">
                        {/* input words use for seo  */}
                        <Form.Item
                            label="Seo tag"
                            name="seoTag"
                            style={{ width: "600px" }}
                        >
                            <Mentions style={{
                                width: "100%"
                            }}
                                options={DataItemSelectFIlterTag}
                            />
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
                                {/* <Option value="laos">Laos</Option> */}
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
                            <Select
                                mode="tags"
                                placeholder=""  {...custLayout}
                                virtual={false}
                                options={DataItemSelectState}
                            >

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
                                    disabled={component2Disabled}
                                    onChange={(e) => {
                                        // console.log('Check e', e)
                                        setComponent1Disabled(e.target.checked)
                                        setComponent2Disabled(false)

                                    }}
                                />
                                <Form.Item
                                    label="Choose dates"
                                    {...custLayout}
                                    name="tourScheduledChooseDate"
                                    getValueProps={(value) => ({
                                        value: value && dayjs(Number(value)),
                                    })}
                                    normalize={(value) => value && `${dayjs(value).valueOf()}`}
                                >
                                    <DatePicker disabled={!component1Disabled} {...custLayout} />
                                </Form.Item>
                            </Space>
                            <Space >
                                <Checkbox
                                    checked={component2Disabled}
                                    disabled={component1Disabled}
                                    onChange={(e) => {
                                        // console.log('Check e', e)
                                        setComponent2Disabled(e.target.checked)
                                        setComponent1Disabled(false)
                                    }}
                                />
                                <Form.Item
                                    label="Choose day"
                                    {...custLayout}
                                    name="tourScheduledSelectedDate"
                                >
                                    <Select mode="single" disabled={!component2Disabled} placeholder="Please select"    {...custLayout}>
                                        <Option value="Monday">Monday</Option>
                                        <Option value="Tuesday">Tuesday</Option>
                                        <Option value="Wednesday">Wednesday</Option>
                                        <Option value="Thursday">Thursday</Option>
                                        <Option value="Friday">Friday</Option>
                                        <Option value="Saturday">Saturday</Option>
                                        <Option value="Sunday">Sunday</Option>
                                        <Option value="Sunday">To be updated</Option>
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
                                    name="tourDurationDay"
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
                                    name="tourDurationNight"
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
                            label="Tour Transportation"
                            {...config}
                            {...custLayout}
                        >
                            <Select mode="multiple" placeholder=""  {...custLayout} virtual={false} options={DataSelectOptionTransportation}>

                            </Select>
                        </Form.Item>
                    </div>
                    <div className="vecotra-Five tourAccommodation">
                        <Form.Item
                            name="tourAccommodation"
                            label="Accommodation"
                            {...rangeConfig} >
                            <Select
                                {...custLayout}
                                mode="multiple"
                                placeholder="Please select "
                                virtual={false}
                                options={DataItemSelectAccommodation}
                            >

                            </Select>
                        </Form.Item>
                    </div>
                </div>



                <div className="vecotra-Seven">
                    <div className="vecotra-Seven">
                        <Form.Item
                            label="Depart from"
                            name="departFrom"
                            {...config}
                            {...custLayout}
                        >
                            {/* <Select mode="single" placeholder=""  {...custLayout}>
                                <Option value="indian">Ấn độ</Option>
                            </Select> */}
                            <Input />
                        </Form.Item>
                    </div>
                    <div className="vecotra-Seven">
                        <Form.Item
                            label="Languages"
                            name="langSupport"
                            {...config}
                            {...custLayout}
                        >
                            <Input />
                            {/* <Select mode="multiple" placeholder=""  {...custLayout}>
                                <Option value="English">English</Option>
                                <Option value="Vietnamese">Vietnamese</Option>
                            </Select> */}
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
                            style={{ width: "530px" }}
                        // style={{
                        //     width: "1000px"
                        // }}
                        >
                            <Input.TextArea rows={5} />
                        </Form.Item>
                    </div>
                    <div className="vecotra-Six">
                        <Form.Item
                            label="Description EN"
                            name="tourDescriptionEN"
                            placeholder="nhập nội dung tiếng anh"
                            {...config}
                            // style={{ width: "800px" }}
                            style={{ width: "530px" }}
                        >
                            <Input.TextArea rows={5} />
                        </Form.Item>
                        {/* tourDescription */}
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
                                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                                min={0}
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
                                min={0}
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
                            label="Highlights VI"
                            name="tourHighlightVI"
                            {...config}
                            style={{ width: "530px" }}
                        >
                            <Input.TextArea style={{}} rows={4} />
                        </Form.Item>

                    </div>
                    <div className="vecotra-Night">
                        <Form.Item
                            label="Highlights EN"
                            name="tourHighlightEN"
                            {...config}
                            style={{ width: "530px" }}
                        >
                            <Input.TextArea style={{}} rows={4} />
                        </Form.Item>
                        {/* tourHighlight */}

                    </div>
                </div>

                <div className="vecotra-Ten">
                    <div className="vecotra-Ten tourDetailVI">
                        <Form.Item
                            label="Tour Detail VI"
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
                                                    style={{ width: "100px" }}
                                                >
                                                    <Input placeholder="Title Description" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'description']}
                                                    {...config}
                                                    style={{ width: "430px" }}
                                                >
                                                    {/* <Input.TextArea rows={4} placeholder="Content Description" /> */}
                                                    <Button type="primary" onClick={() => showModal("tourDetailVI", name)}>
                                                        Open Modal
                                                    </Button>
                                                    < MarkdownModal
                                                        isModalOpen={isModalOpen}
                                                        setIsModalOpen={setIsModalOpen}
                                                        markdown={markdown}
                                                        setMarkdown={setMarkdown}
                                                        form={form}
                                                        editingIndex={editingIndex}
                                                        parentIndex={parentIndex}
                                                    />

                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" style={{}} onClick={() => add()} block icon={<PlusOutlined />}>
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
                            label="Tour Detail EN"
                            {...custLayout}
                            {...formItemLayout}
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
                                                    style={{ width: "100px", maxWidth: "500px" }}
                                                >
                                                    <Input placeholder="Title Description" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'description']}
                                                    // {...config}
                                                    style={{ width: "400px", maxWidth: "500px" }}
                                                >
                                                    {/* <Input.TextArea rows={4} placeholder="Content Description" /> */}
                                                    <Button type="primary" onClick={() => showModal("tourDetailEN", name)}>
                                                        Open Modal
                                                    </Button>


                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" style={{}} onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            < MarkdownModal
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                                markdown={markdown}
                                setMarkdown={setMarkdown}
                                form={form}
                                editingIndex={editingIndex}
                                parentIndex={parentIndex}
                            />
                        </Form.Item>
                    </div>
                </div>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                        {/* <SubmitButton form={form}>Submit</SubmitButton> */}
                        <Button htmlType="reset">Reset</Button>
                    </Space>
                </Form.Item>
            </Form >
        </div >
    );
};
export default CreateTourComponent;


