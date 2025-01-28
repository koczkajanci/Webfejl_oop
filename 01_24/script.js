class ArrayList {
    #state
    #count
    /**
     * @type {ArrayHTMLTable}
     */
    #htmlArray;

    get Count() {
        return this.#count;
    }
    

    constructor(array = undefined) {
        this.#count  = 0;
        this.#state = {}
        this.#htmlArray = array;
    }

    Add(param) {
        const index = this.#count
        this.#state[index] = param;
        Object.defineProperty(this, index, {
            get:() => {return this.#state [index]},
            enumerable: true,
            configurable: true,
            set:(value) => {this.#state[index] = value}
        })
        if(this.#htmlArray) {
            this.#htmlArray.addPersonRow(param)
        }
        this.#count++;
    }

    Clear() {
        console.log('Clear vége')
        for(const key in this) {
            delete this[key];
        }
        this.#count = 0;
        this.#state = {}
        console.log('Clear vége')
    }
}

class ArrayHTMLTable extends HTMLElement {

    #tbody

    connectedCallback(){
        const table = document.createElement('table')

        this.append(table)

        this.#tbody   = document.createElement('tbody')

        table.append(this.#tbody);

        const thead = document.createElement('thaed')

        table.append(thead);

  

    
}


addPersonRow(item) {
    const tr = document.createElement('tr')
    this.#tbody.appendChild(tr)

    const td1 = document.createElement('td')
    td1.textContent = item.nev;
    tr.appendChild(td1)
    
    const td2 = document.createElement('td')
    td2.textContent = item.kor;
    tr.appendChild(td2)
}
    }

const a = new ArrayList()
a.Add({nev:"Laci", kor: 18})
a.Add({nev:"Sanyi", kor: 21})
a.Clear()
console.log(a)

customElements.define('array-t', ArrayHTMLTable)

const Htmltable = new ArrayHTMLTable()

document.body.appendChild(Htmltable)

const b = new ArrayList(Htmltable)
b.Add({nev:"Laci", kor: 18})
b.Add({nev:"Sanyi", kor: 21})

const button = document.createElement('button')

button.innerHTML = "Hozzaad"
document.body.appendChild(button)

button.addEventListener('click', (e) =>{
    b.Add({nev:"Yapaki", eletkor:22})
})