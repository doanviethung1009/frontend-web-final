
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const FileUploader = () => {
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for (let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:4000/filesAPI/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            .catch((err) => {
                toast.error('Upload Error')
            })
    };


    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" className="form-control" onChange={onInputChange} multiple />
            </div>

            <button>Submit</button>
        </form>
    )
};

export default FileUploader;