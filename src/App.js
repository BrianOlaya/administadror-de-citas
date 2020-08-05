import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import video from './components/video/video5.mp4';

function App() {

  //citas en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //state de citas, es un arreglo de citas 
  const [citas, actualizarCitas] = useState(citasIniciales);

  //useeffect para realizar ciertas acciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas]);

  //funcion que toma las citas actuales y agregue la nueva
  const crearCita = cita => {
    actualizarCitas([
      ...citas,
      cita
    ])
  }

  //funcion para eliminar un acita por su id
  const eliminarCita = id => {
    const lista = citas.filter(cita => cita.id !== id);
    actualizarCitas(lista)
  }

  const titulo = citas.length === 0 ? 'Sin asistencias agendadas' : 'Lista de asistentes';

  return (
    <Fragment>
      <div className="container-home"> 
        <video autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            height: "180%",
            objectFit: "cover",
            zIndex: "-1"

            
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <h1 className="title-icc">Control de asistencia icc itagüi</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario
                crearCita={crearCita}
              />
            </div>
            <div className="one-half column">

              <h2>{titulo}</h2>
              {citas.map(cita => (

                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />

              ))}

            </div>


          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
