import api from "./axiosCustomize";

const loginUser = async (credentials) => {
    console.log("check login", credentials);
    try {
        const response = await api.post('/v1/api/login', credentials);
        console.log("response", response)
        localStorage.setItem('token', response.message.token);
        return response.message;
    } catch (e) {
        throw e.response?.data || e.message
    }
}

const getTourAPI = async () => {
    try {
        const response = await api.get('/v1/api/tour');
        console.log("check getTourAPI", response)
        return response;
    } catch (e) {
        throw e.response?.data || e.message
    }

}

const createTourAPI = async (data) => {
    try {
        console.log("createTourAPI", data)
        const response = await api.post('/v1/api/tour', data);
        console.log("check createTourAPI", response)
        return response;
    } catch (e) {
        throw e.response?.data || e.message
    }
}

const uploadImageAPI = async (file, folder) => {

    console.log("check uploadImageAPI", file, folder)
    const URL_BACKEND = '/v1/api/files';
    let config = {
        headers: {
            "upload_type": folder,
            "Content-Type": "multipart/form-data",
        }
    }
    console.log("check ", config)
    const bodyFormData = new FormData();
    bodyFormData.append("image", file)
    return await api.post(URL_BACKEND, bodyFormData, config)
}



export { loginUser, getTourAPI, createTourAPI, uploadImageAPI }