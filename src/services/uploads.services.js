import axios from 'axios'

class UploadsService {

    constructor() {
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL + '/upload',
            withCredentials: true
        })
    }

    uploadImage = imageFromForm => this.app.post('/image', imageFromForm)
}

export default UploadsService