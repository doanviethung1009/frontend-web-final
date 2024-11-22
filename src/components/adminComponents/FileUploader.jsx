
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { uploadImageAPI, uploadMultiImage } from '../../services/adminAPI/adminApiService';

const FileUploader = (props) => {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState();
    const fileInputRef = useRef(null); // Create a ref for the file input element
    const { next, listData, setListData } = props;
    console.log(">>> check upload", listData);
    const onInputChange = (e) => {
        setFiles(e.target.files)

    };

    const onInputFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const onSubmit = async (e) => {
        // make sure the upload not go
        e.preventDefault();
        if (files.length === 0) {
            toast.error('Please select at least one image');
            return;
        }
        const res = await uploadMultiImage(files, `hero-${listData.tourCode}`)
        console.log(res);
        if (res && res.errCode === 0) {
            toast.success('Image uploaded successfully');
            setFiles([]); // Clear the state
            // Reset the file input field using the ref
            if (fileInputRef.current) {
                fileInputRef.current.value = ''; // Reset the file input field
            }
        } else {
            toast.error('Failed to upload images');
        }
        console.log(res);
        const thumbnailRes = await uploadImageAPI(file, `thumbnail-${listData.tourCode}`)
        console.log(thumbnailRes);
        if (thumbnailRes && thumbnailRes.errCode === 0) {
            toast.success('Image uploaded successfully');
            setFile([]); // Clear the state

        } else {
            toast.error('Failed to upload images');
        }
        setListData({
            ...listData,
            tourImageThumbnail: thumbnailRes.imageName,
            tourImageHero: res.nameArray,
        })
        next(); // Move to the next step in the process bar
    };


    return (
        <form
            style={{ padding: "15px" }}
            method="post" id="#" onSubmit={onSubmit}>
            <div className="form-group file">
                <label>Upload Your thumbnail File </label>
                <input type="file" className="form-control" onChange={onInputFileChange} />
            </div>
            <div className="form-group files" >
                <label>Upload Your Hero Files </label>
                <input type="file"
                    className="form-control"
                    onChange={onInputChange}
                    multiple
                    ref={fileInputRef} // Attach the ref to the input element
                />
            </div>


            <button style={{

            }} >Upload</button>
        </form>
    )
};

export default FileUploader;