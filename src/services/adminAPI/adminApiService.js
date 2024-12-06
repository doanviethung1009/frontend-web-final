import api from "../axiosCustomize"

const URL_BACKEND = "/v1/api"

const uploadImageAPI = async (file, folder) => {
    console.log("check uploadImageAPI", file, folder)
    let config = {
        headers: {
            "upload_type": folder,
            "Content-Type": "multipart/form-data",
        }
    }
    console.log("check ", config)
    const bodyFormData = new FormData();
    bodyFormData.append("image", file)
    console.log("check uploadImageAPI", bodyFormData)
    const message = await api.post(`${URL_BACKEND}/files`, bodyFormData, config)
    console.log("check log", message)
    return message
}

// Your API endpoints
const uploadMultiImage = async (files, folder) => {
    let config = {
        headers: {
            "upload_type": folder,
            "Content-Type": "multipart/form-data",
        }
    }
    const bodyFormData = new FormData()
    for (let i = 0; i < files.length; i++) {
        bodyFormData.append("images", files[i])
    }
    const message = await api.post(`${URL_BACKEND}/uploadFiles`, bodyFormData, config)
    console.log("check log", message)
    return message

}


// function soft delete tour with _id
const deleteSoftTourAPI = async (_id) => {
    console.log("soft delete", _id)
    let message = await api.delete(`${URL_BACKEND}/tourByID/?_id=${_id}`)
    console.log("check log", message)
    return message
}

// function soft delete tour with _id
const deleteTourAPI = async (_id) => {
    console.log("soft delete", _id)
    let message = await api.delete(`${URL_BACKEND}/tour/?_id=${_id}`)
    console.log("check log", message)
    return message
}

//fetch list tour deleted from backend
const fetchListTourDeletedAPI = async () => {
    console.log("fetchListTourDeletedAPI")
    let message = await api.get(`${URL_BACKEND}/tourTrash`)
    console.log("check log", message)
    return message
}

export {
    uploadMultiImage,
    uploadImageAPI,
    deleteSoftTourAPI,
    fetchListTourDeletedAPI,
    deleteTourAPI
}