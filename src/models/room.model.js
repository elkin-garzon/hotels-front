import { InitProperties } from "./initial";

export class Room extends InitProperties {
    hotel_id;
    count;
    room_type;
    lodging;

    constructor(hotel_id, count, room_type, lodging) {
        super();
        this.hotel_id = hotel_id;
        this.count = count;
        this.room_type = room_type;
        this.lodging = lodging;
    }
}