import { api } from '../shared/api';

export class roomsService {

    async getData() {
        return await api.get(`/rooms`);
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
        return await api.post(`/rooms`, data)
    }

    /**
     * actualizar data
     * @param {*} data 
     * @returns 
     */
    async putData(data) {
        return await api.put(`/rooms/${data.id}`, data)
    }

    /**
    * actualizar data
    * @param {*} data 
    * @returns 
    */
    async deleteData(data) {
        return await api.delete(`/rooms/${data.id}`)
    }
}