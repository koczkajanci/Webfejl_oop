/**
 * A student entitasokat kezeli a managerunk, peldaul amikor hozzaadjuk vagy selectjalunk egy studentet
 */
class Student{
 
    /**
     * @type {Number}
     */
    #average;

 
    /**
     * @type {string}
     */
    #name;
 
    /**
     * @type {string}
     */
    #comment;
 
    /**
     * @type {boolean}
     */
    #bad;


    /**
     * @returns {Number} Visszater az atlaggal
     */
    get average(){
        return this.#average
    }
    /**
     * @returns {string} Visszater a diak nevevel
     */
    get name(){
        return this.#name
    }
    /**
     * @returns {string} visszater a velemennyel
     */
    get comment(){
        return this.#comment
    }
    /**
     * @returns {boolean} ha lebukik a diak akkor true
     */
    get bad(){
        return this.#bad
    }

    /**
     * 
     * @param {string} name 
     * @param {number} average 
     * @param {string} comment 
     * @param {boolean} bad 
     */
    constructor(name,average,comment,bad){
        this.#name = name;
        this.#average = average;
        this.#comment = comment;
        this.#bad = bad;
    }

}