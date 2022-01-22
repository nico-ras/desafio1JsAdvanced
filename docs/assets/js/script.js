
function Consultorio(nombre, paciente) {
    let _nombre = nombre;
    let _paciente = [paciente] || [];

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

Consultorio.prototype.setNombreConsultorio = function (nuevoNombre) {
    this._nombre = nuevoNombre;
}

Consultorio.prototype.getPacienteConsultorio = function () {
    return this._paciente;
 }

 Consultorio.prototype.setPacienteConsultorio = function (nuevoPaciente) {
    this._paciente.push(nuevoPaciente);
 }



 Consultorio.prototype.getAPatient = function(patientName) {

    let patientData; 

    this._paciente.forEach(element => {
        
      if (element._nombre == patientName) {
          patientData = element;
      }
    });

     console.log(patientData)

 }

 Consultorio.prototype.getAllPatients = function () {
     this._paciente.forEach(e => console.log(e._nombre) ) 
 }

 //------------paciente---------------

 Paciente.prototype.getNombrePaciente = function () {
    return this._nombre;
 }

 Paciente.prototype.setNombrePaciente = function (nuevoNombre) {
    this._nombre = nuevoNombre;
 }

 Paciente.prototype.getEdadPaciente = function () {
    return this._edad;
 }

 Paciente.prototype.setEdadPaciente = function (nuevaEdad) {
    this._edad = nuevaEdad;
 }

 Paciente.prototype.getRutPaciente = function () {
    return this._rut;
 }

 Paciente.prototype.setRutPaciente = function (nuevoRut) {
    this._rut = nuevoRut;
 }

 Paciente.prototype.getDiagnosticoPaciente = function () {
    return this.diagnostico;
 }

 Paciente.prototype.setDiagnosticoPaciente = function (nuevoDiagnostico) {
    this.diagnostico = nuevoDiagnostico;
 }   











var p1 = new Paciente("lala", 29, "99999", "enferma");
var p2 = new Paciente("lili", 31, "44444", "grave");

var c1 = new Consultorio("Los alamos", p1);


console.log(p1._nombre)

console.log(c1._paciente._nombre)

console.log(c1.getNombreConsultorio())

c1.setPacienteConsultorio(p2)

console.log(c1._nombre)

console.log(c1._paciente)

c1.getAPatient("lala")

c1.getAllPatients()



