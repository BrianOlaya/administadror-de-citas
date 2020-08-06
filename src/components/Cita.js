import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => (
    <div className="cita">
        <p>Asistente: <span>{cita.asistente}</span> </p>
        <p># de contacto: <span>{cita.contacto}</span> </p>
        <p>Fecha de asistencia: <span>{cita.fecha}</span> </p>
        <p>Hora: <span>{cita.hora}</span> </p>
        <p>Observaciones: <span>{cita.observaciones}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}

        >Eliminar</button>
    </div>

);
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCitaP: PropTypes.func.isRequired
}

export default Cita;