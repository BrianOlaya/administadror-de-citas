import React, {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

    const [cita, actualizarCita]=useState({
        asistente:'',
        contacto:'',
        fecha:'',
        hora:'',
        observaciones:'' 
        });

    const [error, actualizarError]=useState(false)
    

        const actualizarState =e=>{
            actualizarCita ({
                ...cita,
                [e.target.name]:e.target.value
            })
        }

        const {asistente,contacto, fecha, hora, observaciones}=cita

        const submitCita =e=>{
            e.preventDefault();

            //validar
            if (asistente.trim()==="" || contacto.trim()==="" || fecha.trim()==="" || hora.trim()===""){

              actualizarError(true)
                return;
            }

            //Eiminar mensaje de error 
            actualizarError(false);

            //asignar ID
            cita.id=uuidv4()
         
            //crear cita
            crearCita(cita)


            //resetear formulario
            actualizarCita({
                asistente:'',
                contacto:'',
                fecha:'',
                hora:'',
                observaciones:'' 
                })
        }


    return (
        <Fragment>
            <h2>Agendar asistencia</h2>
            {error ?  <p className="alerta-error">Hay campos sin diligenciar</p>  : null }

            <form
                onSubmit={submitCita}
                className="form-icc"
            
            >
                <label>Nombre completo del asistente</label>

                <input
                 type="text" 
                 name="asistente" 
                 className="u-full-width"   
                 placeholder="Nombre del asistente"  
                 onChange={actualizarState}   
                 value={asistente}  
                 />

                <label>Número de contácto</label>
                <input
                 type="number" 
                 name="contacto" 
                 className="u-full-width"   
                 placeholder="# de contacto"    
                 onChange={actualizarState} 
                 value={contacto} 
                 />

                <label>Fecha de asistencia</label>
                <input
                 type="date" 
                 name="fecha" 
                 className="u-full-width" 
                 onChange={actualizarState}
                 value={fecha}         
                 />

                <label>Hora</label>
                <input
                 type="time" 
                 name="hora" 
                 className="u-full-width"
                 onChange={actualizarState} 
                 value={hora}     
                 />

                <label>Observaciones</label>
                <textarea
                 name="observaciones" 
                 className="u-full-width" 
                 onChange={actualizarState} 
                 value={observaciones}       
                 >  
                 </textarea>  

                 <button
                 type="submit"
                 className="u-full-width button-icc "
                 >Agendar</button>               

            </form>

        </Fragment>
    );
}

Formulario.propTypes={
    crearCita:PropTypes.func.isRequired
}
 
export default Formulario;