import { api } from '../shared/api';

export default class HotelsService {

    async getData() {
        return await api.get(`/hotels`);
    }

    async onSaveData(data) {
        if (data._status === 'N') {
            return await this.postData(data);
        } else {
            return await this.putData(data);
        }
    }

    /**
     * guardar data
     * @param {*} data 
     * @returns 
     */
    async postData(data) {
        return await api.post(`/hotels`, data)
    }

    /**
     * actualizar data
     * @param {*} data 
     * @returns 
     */
    async putData(data) {
        return await api.put(`/hotels/${data.id}`, data)
    }

    /**
    * actualizar data
    * @param {*} data 
    * @returns 
    */
    async deleteData(data) {
        return await api.delete(`/hotels/${data.id}`)
    }
}