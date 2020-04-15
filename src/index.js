/*
Práctica:
Usando el metodo que aprendimos en clase para definir funciones que usan callbacks, replicar el ejercicio del muro pero con el proceso de inscripcion de un koder que pasa por estas 4 etapas:
Llamada
Entrevista
Apartado
Primer clase
y hacer uso de las funciones implementando los callbacks

1. Llamar al koder
2. Entrevistar al koder
3. Reservar lugar del koder
4. Tomar primer clase
*/

const koder = {
  recibioLlamada: false,
  asistioAentrevista: false,
  reservoLugar: false,
  tomoPrimerClase: false
}

console.log('Antes de ser koder: ', koder, '\n-------------------------------------')

function llamar (koderAllamar, callback) {
  setTimeout(() => {
    koderAllamar.recibioLlamada = true
    const error = koderAllamar.recibioLlamada
      ? null
      : 'El prospecto no recibió la llamada'
    callback(error, koderAllamar)
  }, 3000)
}

function entrevistar (koderAentrevistar, callback) {
  setTimeout(() => {
    koderAentrevistar.asistioAentrevista = true
    const error = koderAentrevistar.asistioAentrevista
      ? null
      : 'El prospecto no asistió a la entrevista'
    callback(error, koderAentrevistar)
  }, 3000)
}

function reservar (lugarAreservar, callback) {
  setTimeout(() => {
    lugarAreservar.reservoLugar = true
    const error = lugarAreservar.reservoLugar
      ? null
      : 'El prospecto no reservo su lugar en Kodemia'
    callback(error, lugarAreservar)
  }, 3000)
}

function asistirAclase (asistenciaAclase, callback) {
  setTimeout(() => {
    asistenciaAclase.tomoPrimerClase = false
    const error = asistenciaAclase.tomoPrimerClase
      ? null
      : 'Koder tiene inasistencia'
    callback(error, asistenciaAclase)
  }, 3000)
}

llamar(koder, (errorDeContacto, koderContactado) => {
  errorDeContacto
    ? console.log('Koder no contactado: ', errorDeContacto)
    : console.log('Koder contactado: ', koderContactado)
  entrevistar(koder, (errorDeEntrevista, koderEntrevistado) => {
    errorDeEntrevista
      ? console.log('Koder no entrevistado: ', errorDeEntrevista)
      : console.log('Koder entrevistado: ', koderEntrevistado)
    reservar(koder, (errorDeApartado, lugarReservado) => {
      errorDeApartado
        ? console.log('Koder no reservó lugar: ', errorDeApartado)
        : console.log('Lugar reservado a koder: ', lugarReservado)
      asistirAclase(koder, (errorDeAsistencia, claseTomada) => {
        errorDeAsistencia
          ? console.log('Koder no asistió a su primer clase: ', errorDeAsistencia)
          : console.log('Bienvenido a tu primer clase Koder!!!: ', claseTomada)
      })
    })
  })
})
