import { InitProperties } from "./initial";

export class Hotel extends InitProperties {
    name;
    address;
    city;
    nit;
    room_count;

    constructor(name, address, city, nit, room_count) {
        super();
        this.name = name;
        this.address = address;
        this.city = city;
        this.nit = nit;
        this.room_count = room_count;
    }
}