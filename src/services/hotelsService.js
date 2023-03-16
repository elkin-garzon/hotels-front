import { api } from '../shared/api';

export default class HotelsService {

    async getData() {
        return await api.get(`/hotels`);
    }
}