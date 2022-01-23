
//-----------------Consulting object constructor------------------

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
            alert("You must use the function '.setPacienteConsultorio'") //_paciente array protection
        }
    })
}

//----------------Patient object constructor--------------

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


//--------------Consulting room prototype functions-----------------------

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

//-----------------------------To find some patient and his data, as object---------------------------------

 Consultorio.prototype.getAPatient = function(patientName) {

    let patientData; 

    this._paciente.forEach(element => {
        
      if (element._nombre == patientName) {
          
          patientData = (({ _nombre, _edad, _rut, _diagnostico }) => ({ _nombre, _edad, _rut, _diagnostico }))(element)
        console.log(patientData)
      }
    });

 }


 //------------------------To get all consulting room patient's names and other data, as string---------------------

 Consultorio.prototype.getAllPatients = function () {
     this._paciente.forEach(e => console.log(`nombre: ${e._nombre}, edad: ${e._edad}, rut: ${e._rut}, diagnostico: ${e._diagnostico}`) ) 
 }

 //------------patient prototype functions---------------

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









//--------instantiation------------

var p1 = new Paciente("lala", 29, "99999", "enferma");
var p2 = new Paciente("lili", 31, "44444", "grave");
var p3 = new Paciente("pepo", 40, "222222", "chomier")

var c1 = new Consultorio("Los alamos", p1);


//console.log(p1._nombre)

//console.log(c1._paciente._nombre)

//console.log(c1.getNombreConsultorio())

c1.setPacienteConsultorio(p2)
c1.setPacienteConsultorio(p3)

//console.log(c1._nombre)

//console.log(c1._paciente)

//--------------------search---------------------

c1.getAPatient("pepo")

c1.getAllPatients()



