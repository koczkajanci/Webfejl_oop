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
 * @param {Mangarer} manager
 * @param {string} className
 */
class DetailsArea extends Area{
    constructor(className, manager){
        super(className);
        manager.setSelectCallback((student) => {
            this.div.innerHTML = '';
            const detailsContainer = document.createElement('div')
            detailsContainer.innerHTML = student.comment
            this.div.appendChild(detailsContainer);
        })
    }
}



class StudentsArea extends Area{
    /**
 * Ez fogja tartalmazni a diakok listajat
 * @param {string} className a css osztaly
 * @param {Mangarer} manager manager peldany
*/
    constructor(className,manager){
        super(className)
        manager.setAddCallback((student) => {
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';
            const nameSpan = document.createElement('span');
            nameSpan.textContent = student.name;
            nameSpan.style.color = student.bad ? "red" : "black"
            studentCard.appendChild(nameSpan);
            
            studentCard.appendChild(document.createElement('br'));

            const averageSpan = document.createElement('span');
            averageSpan.textContent = student.average;
            
            studentCard.appendChild(averageSpan);
            this.div.appendChild(studentCard)
            studentCard.addEventListener('click', (e) => {
                const cardList = document.querySelectorAll('.student-card');
                for(const card of cardList){
                    card.className = 'student-card';
                //mivel a selectednel a student card mellett lesz egy selected css class ezert ha az osszesnek megadjuk az eredeti class, a selectedes torlodik.
                }
                e.currentTarget.classList.add('selected')
                manager.select(student)
            })
           
        })
    }
}