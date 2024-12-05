import { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { uploadImageAPI } from '../../services/apiService';
import { toast } from 'react-toastify';
import InboundPolicies from '../../components/publicComponents/InboundPolicies';

const TestApi = () => {

    //get url to show image
    const [saveUrl, setSaveUrl] = useState(null)
    const [saveFile, setSaveFile] = useState(null)


    const handleOnChangeUploading = (event) => {
        console.log(">>> check uploading ", event.target.files[0])
        if (event.target.files && event.target.files.length === 0) {
            setSaveFile(null);
            setSaveUrl(null);
            return alert('Uploading error ')
        }
        const fileSave = event.target.files[0];
        if (fileSave) {
            setSaveFile(fileSave)
            setSaveUrl(URL.createObjectURL(fileSave))
        }
    }

    // const handleUpdateData = () => {
    //     //upload image to server
    //     const formData = new FormData();
    //     formData.append('file', saveFile);

    //     fetch('http://localhost:8080/upload-image', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Data from API:', data);
    //             if (data.errCode === 0) {
    //                 // success
    //                 console.log('Success:', data.data)
    //             } else {
    //                 // error
    //                 console.log('Error:', data.message)
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error:', error)
    //         });
    // }

    const handleUpdateData = async () => {
        let data = await uploadImageAPI(saveFile, "background")
        if (data.errCode === 0) {
            console.log('Success:', data)
            toast.success('Image uploaded successfully');

        }
        else {
            toast.error(`Error: ${data.message}`);
        }
    }



    return (

        < div >

            {/* {console.log(`Uploading`, saveFile)}
            <label htmlFor="btnUpload"
                style={
                    {
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        background: "orange"
                    }
                }>
                {<UploadOutlined />}
                upload image

            </label>
            <input type="file" hidden id='btnUpload' onChange={(event) => handleOnChangeUploading(event)} />
            {saveFile &&
                <img src={saveUrl} alt="" />

            }
            <Button type='primary' onClick={() => handleUpdateData()}>
                save
            </Button> */}
            <InboundPolicies />
            <div>
                {/* <img src={`${import.meta.env.VITE_API_URL}images/thumbnail-123/thumbnail-123-imag.png`} alt="" /> */}
                test
            </div>
        </ div>
    );
};

export default TestApi;