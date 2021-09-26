const { model, Schema } = require('mongoose');

const StudentSchema = new Schema({
    "Informacion personal": {
        nombre: {type: String},

        apellido: {type: String},

        edad: {type:Number},

        "Fecha de nacimiento": {type: String},
        telefono : Number,

        domicilio: {type: String},

        dni: {type:Number},

        tutores :{
            nombre_tutor: {type: String},

            apellido_tutor: {type: String},

            dni_tutor:{type: String},

            domicilio: {type: String}
        },
    },

    "Perfil de gitHub": {
        Link : {type: String},
    },

    "Datos Academicos/Profesionales":{
        Primaria: {
            Completo_p :{type: Boolean},
            Institucion_p: {type: String},
            direccion_p: {type: String}
        },
        Secundaria: {
            Completo_s : {type: Boolean},
            Institucion_s: {type: String},
            direccion_s: {type: String}
        },
    }
});

module.exports = model('Student', StudentSchema);