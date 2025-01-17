class ArrayLists{
    /**
     *@type {Number}
     */
    #length
    #obj

    get Count(){
        this.#length

        return this.#length
    }
    constructor(){
        this.#length = 0;
        this.#obj = {};
    }

    Add(item){
        const index = this.#length; //elkérjuk es eltaroljuk az aktuális hosszt
        this.#obj[index] = item     //beállítjuk az index tulajdonsagnak a bemeneti parametert
        Object.defineProperty(this,index,{
            get: function(){
                return this.#obj[index]
            },
            set: function(value){
                this.#obj[index] = value
            }
            
        })
        this.#length++;
    }
    Clear(){
        //objektum uritése es length 0-zása
        this.#obj = {};
        this.#length = 0;   
    }

    
}

const csirke = {};
csirke.a = 'def';
csirke[0] = 'asd';
csirke['nev'] = "Fezzo's pizzeria" //Fezzo = GOAT
console.log(csirke);



//1.objektum -> objektum aminek a tulajdonságát megadjuk
//2.string ->kulcs
//3.descriptor -> { }

const alma =  {};
Object.defineProperty(alma, "nev",{
    value: "Fezzo's pizzeria",
    writable:true
})

alma.nev = "asd";
console.log(alma)

