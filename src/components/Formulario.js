import React, {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

    const [cita, actualizarCita]=useState({
        paciente:'',
        responsable:'',
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

        const {paciente,responsable, fecha, hora, observaciones}=cita

        const submitCita =e=>{
            e.preventDefault();

            //validar
            if (paciente.trim()==="" || responsable.trim()==="" || fecha.trim()==="" || hora.trim()===""){

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
                paciente:'',
                responsable:'',
                fecha:'',
                hora:'',
                observaciones:'' 
                })
        }


    return (
        <Fragment>
            <h2>Crear cita</h2>
            {error ?  <p className="alerta-error">Hay campos sin diligenciar</p>  : null }

            <form
                onSubmit={submitCita}
            
            >
                <label>Paciente</label>

                <input
                 type="text" 
                 name="paciente" 
                 className="u-full-width"   
                 placeholder="Nombre paciente"  
                 onChange={actualizarState}   
                 value={paciente}  
                 />

                <label>Responsable</label>
                <input
                 type="text" 
                 name="responsable" 
                 className="u-full-width"   
                 placeholder="Nombre responsable"    
                 onChange={actualizarState} 
                 value={responsable} 
                 />

                <label>Fecha</label>
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
                 className="u-full-width button-primary "
                 >Agendar</button>               

            </form>

        </Fragment>
    );
}

Formulario.propTypes={
    crearCita:PropTypes.func.isRequired
}
 
export default Formulario;