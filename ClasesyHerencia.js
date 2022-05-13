class Persona{
     nombre;
     apellido;
     edad;

     //Metodos
    constructor(nombre , apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles(){
        console.log("Nombre : " + this.nombre + " " + this.apellido )
    }


}

class Empleado extends Persona{
    TipoEmpleado;

    constructor(nombre, apellido, edad, TipoEmpleado) {
        super(nombre, apellido, edad);
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.TipoEmpleado = TipoEmpleado;
    }
    getDetalles(){
        console.log("Nombre : " + this.nombre + " Apellido: " + this.apellido + " Tipo Empleado: " + this.TipoEmpleado  )
    }

}

class Nomina{
    
}

let persona = new Persona("Juan", "Zuluaga","37");
persona.getDetalles();
let empleado = new Empleado("Juan", "Zuluaga","37","S");
empleado.getDetalles();