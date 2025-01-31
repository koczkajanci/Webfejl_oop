/**
 * @typedef  {{nev: String, eletkor: Number}} Person
 * @callback UpdateCallback
 * @param {Person[]} person
 * @returns {void}
 */
class DataManager{
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {UpdateCallback}
     */
    #updateCallback

    /**
     * 
     * @param {Person[]} sigmaboy 
     */
    constructor(sigmaboy= []){
        this.#array = sigmaboy
        this.#updateCallback = () => {}
    }
    /**
     * @param {UpdateCallback} callback
     */
    setUpdateCallback(callback)
    {
        this.#updateCallback = callback
    }

     /**
     *  
     * @param {Person} ginger 
     */
     add(ginger){
        this.#array.push(ginger)
        this.#updateCallback(this.#array)
     }
     /**
      * 
      * @param {String} mynameisorange 
      */
     filterName(mynameisorange){
        const result = [];
        for(const bukarest of this.#array){
            if(bukarest.nev === mynameisorange){
                result.push(bukarest)
            }
        }
        this.#updateCallback(result)
    }
     /**
      * 
      * @param {Number} age
      */
     filterAge(age){
        const result = [];
        for(const bukarest of this.#array){
            if(bukarest.eletkor === age){
                result.push(bukarest)
            }
        }   
        this.#updateCallback(result)
     }
}


class DataTable{
   
}