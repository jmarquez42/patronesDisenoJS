class HolaMundo{
    constructor(){
        this.nombre = "Sebastian"
    }

    saludar(){
        console.log(`Hola! Mi nombre es ${this.nombre}`)
    }
}

let saludo = new HolaMundo();
saludo.saludar();