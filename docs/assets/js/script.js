
function Consultorio(nombre, paciente) {
    let _nombre = nombre;
    let _paciente = paciente || [];

    Object.defineProperty(this, "_nombre", {
        get: function(){
            return _nombre;
        },
        set: function(nuevoNombre){
            _nombre = nuevoNombre;
        }
    });

    Object.defineProperty(this, "_paciente", {
        get: function(){
            return _paciente;
        },
        set: function(nuevoPaciente){
            _paciente = this._paciente.push(nuevoPaciente);
        }
    })
}


function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    Object.defineProperty(this, "_nombre", {
        get: function(){
            return _nombre;
        },
        set: function(nuevoNombre){
            _nombre = nuevoNombre;
        }
    });

    Object.defineProperty(this, "_edad", {
        get: function() {
            return edad;
        },
        set: function(nuevaEdad){
            _edad = nuevaEdad;
        }
    });

    Object.defineProperty(this, "_rut", {
        get: function() {
            return rut;
        },
        set: function(nuevoRut){
            _rut = nuevoRut;
        }
    });

    Object.defineProperty(this, "_diagnostico", {
        get: function() {
            return diagnostico;
        },
        set: function(nuevoDiagnostico){
            _diagnostico = nuevoDiagnostico;
        }
    });


}

Consultorio.prototype.getNombreConsultorio = function () {
   return this._nombre;
}

var p1 = new Paciente("lala", 29, "99999", "enferma");

var c1 = new Consultorio("Los alamos", p1);


console.log(p1._nombre)

console.log(c1._paciente._nombre)

console.log(c1.getNombreConsultorio())

console.log(c1._nombre)

