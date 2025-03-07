/**
 * Manageli es rendereli a formunkat a field segitsegevelS
 * 
 */

class FormController{
    /**
     * @type {Manager} 
     */
    #manager;
    /**
     * @type {FormField[]}
     * 
     */
    #formFieldArray
    /**
     * 
     * @param {Manager} manager 
     * @param {{label: string, type: string, id: string, id:string, optional?:boolean}[]} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
        this.#formFieldArray = []
        this.#manager = manager
        const form = document.createElement('form')
        document.body.appendChild(form)
        for(const field of fieldConfiguration){
            const formField = new FormField(field.id, field.label, field.type, field.optional)
            this.#formFieldArray.push(formField)
            form.appendChild(formField.getDivElement())
        }
        const sendButton = document.createElement('button');
        sendButton.textContent = 'Elküld';
        form.appendChild(sendButton)
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(this.#validateFields()){
                const value = this.#getValueObject();
                const card = new Card(value.cardtex, value.right)
                this.#manager.add(card)
                e.target.reset();
            }
            //validaljuk a fieldeket, megjeenitjuk errorokat
            //elkerjuk a fieldek ertekeit    
        })        

    }

    /** 
     * @returns {boolean} igazzal ter vissza ha minden field helyesen van kitoltve
     * 
     */
    #validateFields(){
        let valid = true;
        for(const formField of this.#formFieldArray){
            formField.error = '';
            if(!formField.optional){
                if(formField.value == ''){
                    formField.error = 'A mezo kitoltese kotelezo'
                    valid = false
                }
            }
        }
        return valid;
    }
    /**
     * Vegigmegy a formfieldeken es id-hoz
     * rendeli az ertekeket
     * @returns {{cardtext string, right: boolean}}
     * a formfieldek ertekei
     */
    #getValueObject(){
        const result = {};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value                                                                                                                                                                                                                                                                                                                                                                                                                             
        }
        console.log(result)
        return result;
        
    }
}

/**
 * Ez fogja tartalmazni a labeleket, inputokat errorspanokat
 * pl.: text input alatta errorspan
 */
class FormField{
    /**
     * @type {string}
     */
    #id

    /** 
     * @type {string}
     */
    #type

    /**
     * @type {boolean}
     */
    #optional

    /**
     * @type {HTMLInputElement}
     */
    #inputField

    /**
     * @type {HTMLLabelElement}
     */
    #labelElement


    /**
     * @type {HTMLSpanElement}
     */
    #errorField


    get id(){
        return this.#id;
    }
    /**
     * Ha az input tipusa checkbox, 
     * akkor visszater azzal, hogy be van pipalva,
     * vagy sem , ha pedig text, akkor visszater a szoveggel
     * 
     * 
     * @returns {boolean||string}
     */
    get value(){
        if(this.#type === 'checkbox'){
            return this.#inputField.checked
        }
        return this.#inputField.value
    }   

    get optional(){
        return this.#optional;
    }

    set error(value){
        this.#errorField.textContent = value
    }
    

    /**
     * 
     * @param {string} id 
     * @param {string} labelContent 
     * @param {string} type 
     * @param {boolean?} optional 
     */
    constructor(id, labelContent, type, optional = false){
        this.#id = id;
        this.#type = type;
        this.#optional = optional;
        this.#labelElement = Gomszab.makeLabel(id, labelContent);
        this.#inputField = Gomszab.makeInput(id,type);
        this.#errorField = Gomszab.makeErrorField();
    }

    /**
     * 
     * letrehoz egy div elementet, amiben benne van az input,
     *  a label, az errorspan
     * 
     * @returns {HTMLDivElement}
     */
    getDivElement(){
        const fields = [this.#labelElement, this.#inputField, this.#errorField]
        const div =  Gomszab.makeDiv(fields)
        return div;
    }
}