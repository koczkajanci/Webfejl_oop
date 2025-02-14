class Area{
    /**
     * @type {HTMLDivElement}ez a kontener az elemnek
     */
    #div

    /**
     * @returns {HTMLDivElement} visszater az adott containerrel
     */
    get div(){
        return this.#div;
    }


    /**
     * 
     * @param {string} className 
     */

    constructor(className){
        const container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = className;
        container.appendChild(this.#div)
        
    }

    /**
     * A container classal rendelkezo elembe tesszuk bele az alkalmazas egyes reszeit
     * Elso korben megnezzuk letezik-e a container osztallyal rendelkezo div
     * Ha nem letezik letrehozunk egyet
     * 
     * @returns {HTMLDivElement} visszater acontainer classal rendelkezo elemmel
     */
    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){//ha nem letezik
            container = document.createElement('div')//letrehozzuk
            container.className = 'container'; // Fontos ha ujra meghivjuk akkor ne hozzon letre
            document.body.appendChild(container)
        }
        return container;
    }
}

/**
 * letrehoz egy Details Teruletet a megadott css osztallyal
 * @param {string} className
 */
class DetailsArea extends Area{
    constructor(className){
        super(className);
    }
}


/**
 * Ez fogja tartalmazni a diakok listajat
 */
class StudentsArea extends Area{

}