const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1
        this.firstname2 = obj.firstname2
        this.lastname = obj.lastname
    }

    render(parentElement){
        const sor = document.createElement('tr')
        parentElement.appendChild(sor)
        const firstn1 = document.createElement('td')
        sor.appendChild(firstn1)
        
        
        if(this.firstname2 == "" || this.firstname2 == undefined){
            firstn1.colSpan = 2
        }
        else{
            const firstn2 = document.createElement('td')
            firstn2.innerText = this.firstname2
            sor.appendChild(firstn2)
        }
        firstn1.innerText = this.firstname1
        const lastn = document.createElement('td')
        lastn.innerText = this.lastname
        sor.appendChild(lastn)
        



        

    }
   
}
init();
function init() {
    const tbody = document.getElementById('tbodyId')
    for(const sigmarizz of array){
        const sigma = new Person(sigmarizz);
        sigma.render(tbody)

    }
}