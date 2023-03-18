export class InitProperties {

    // PARAMETERS INITIALS
    id;
    _status;

    /**
     * INITIALIZATION VALUES
     * @param {*} id 
     * @param {*} _status 
     */
    constructor(id, _status) {
        this.id = id;
        this._status = _status;
    }

    /**
     * NEW OBJECT 
     */
    addData() {
        for (let obj of Object.keys(this)) {
            this[obj] = ''
        }
        this._status = 'N';
        return this;
    }

    /**
     * ADD VALUES TO CLASS
     * @param {*} obj 
     * @returns 
     */
    edithData(obj){
        for (let key of Object.keys(this)) {
            this[key] = obj[key]
        }
        this._status = 'E';
        return this;
    }
}
