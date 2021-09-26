import axios from 'axios' 
 
 class PropertiesService{

    constructor(){
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL + '/properties'
        })
    }

    getAllProperties = () => this.app.get('/')
    getProperty = propertyId => this.app.get(`/${propertyId}`)
    saveProperty = (property_info) => this.app.post('/new', property_info)
    editProperty = (property_info) => this.app.put(`/edit/${property_info._id}`, property_info)
    deleteProperty = propertyId => this.app.delete(`/${propertyId}`)
 }

 export default PropertiesService