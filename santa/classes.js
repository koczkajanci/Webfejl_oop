
class Factory{
 // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manokList = []
    }
    ManoAdd(mano){
        this.manokList.push(mano)
        createRow(mano)
    }
}

class Companion{
 // TODO 5
    constructor(id,keresztnev,vezeteknev,reszleg){
        this.productList = []
        this.id = id
        this.keresztnev = keresztnev
        this.vezeteknev = vezeteknev
        this.reszleg = reszleg          
    }

    getName(){
        return this.keresztnev + " " + this.vezeteknev
    }

    productAdd(product){
        this.productList.push(product)
    }
}