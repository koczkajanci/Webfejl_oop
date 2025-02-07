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
        this.#updateCallback(this.#array);
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

     filter(callback){
        const result = [];
        for(const bukarest of this.#array){
        if(callback(bukarest)){
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
            tbody.innerHTML = "";
            for(const szempillaspiral of persons){
                const tr = document.createElement('tr')
                tbody.appendChild(tr)

                const nevtd = document.createElement('td')
                nevtd.innerHTML = szempillaspiral.nev
                tr.appendChild(nevtd)

                const eletkortd = document.createElement('td')
                eletkortd.innerHTML = szempillaspiral.eletkor
                tr.appendChild(eletkortd)
            }
        })
        
   }
}

const dataManager = new DataManager([{nev: "Dominik", eletkor: 17}, {nev: "Gömbszab", eletkor: 21}, {nev:"DrKörte", eletkor:70}])
const dataTable = new DataTable(dataManager)

const szigma = document.createElement('input');
szigma.type = "file"
document.body.appendChild(szigma)

szigma.addEventListener('change',(e) =>{
   const file = e.currentTarget.files[0]
   const freader = new FileReader
   freader.readAsText(file)
   freader.onload = () => {
    const content =   freader.result
    const contentRows = content.split("\n");
    for(const row of contentRows){
        const splitimiti = row.split(";");
        const pers = {nev: splitimiti[0], eletkor: Number(splitimiti[1])};
        dataManager.add(pers)
    }
   }
})



