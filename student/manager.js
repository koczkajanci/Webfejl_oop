/**
 * @callback AddCallback
 * @param {Student} student a hozzadaott diak
 * 
 * @callback SelectCallback
 * @param {Student} student a kivalasztott diak
 */

class Mangarer{
    /** 
     * @type {Student}
     */
    #array

    
    /** 
     * @type {SelectCallback} kivalasztas eseten fut
     */
    #selectCallback;

    /** 
     * @type {AddCallback}
     */
    #addCallback

    constructor(){
        this.#array = [];
    }

    /**
     * 
     * @param {AddCallback} callback 
     */
    setAddCallback(callback){
        this.#addCallback = callback;
    }

    /**
     * beallitjuk a select callback erteket
     * 
     * @param {SelectCallback} callback 
     */
    setSelectCallback(callback){
        this.#selectCallback = callback//tartalmazza a callback implementaciojat
    }
    /**
     * Hozzaadja a diakot a tombunkhoz
     * 
     * @param {student} student 
     */
    add(student){
        this.#array.push(student)
        this.#addCallback(student)
    }
    /**
     *  Akkor hivjuk meg ha szeretnenk modositani a detais tartalmat
     * @param {Student} student 
     */
    select(student){
        this.#selectCallback(student)
    }
}