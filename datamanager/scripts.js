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
    /**
     * 
     * @param {DataManager} unsigmadominik 
     */
   constructor(unsigmadominik){
        const table = document.createElement("table")
        document.body.appendChild(table)
        const tbody = document.createElement("tbody")
        table.appendChild(tbody)

        //addEventListener('', (e) => {
  //          function(e){
//
            //    
          //  }
        //})

        unsigmadominik.setUpdateCallback((persons) => {
            tbody = "";
            for(const szempillaspiral of persons){
                const tr = document.createElement('tr')
                tbody.appendChild(tr)

                const eletkortd = document.createElement('td')
                eletkortd.innerHTML = szempillaspiral.nev
                tr.appendChild(eletkortd)

                const nevtd = document.createElement('td')
                nevtd.innerHTML = szempillaspiral.nev
                tr.appendChild(nevtd)



            }
        })
        
   }
}