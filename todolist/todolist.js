class ToDoItem extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
       
        this.render()
    

    }
   
    static get observedAttributes(){
   
    return['task']
    }

    attributeChangedCallback(propname,oldvalue,newValue){
        this[propname] = newValue
        this.render();
    }

    deleteSelf(){
        this.remove()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/todolist/style.css">
        <li class="item">
        <input type="checkbox"name="Task1" id="task1">
        <label for="task1">${this.task}</label>
        <button>delete</button>
    </li>
        `
         const button = this.shadowRoot.querySelector('button')
       button.addEventListener('click',()=>this.deleteSelf())
    }
    





}
customElements.define('to-do-item',ToDoItem)
    export default ToDoItem;



    /*
    
    <li class="item">
    <input type="checkbox" ${this.done? 'checked':''}name="Task1" id="task1">
    <label for="task1">${this.task}</label>
    <button>delete</button>
</li>
*/