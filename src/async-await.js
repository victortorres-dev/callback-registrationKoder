const koder = {
  recibioLlamada: false,
  asistioAentrevista: false,
  reservoLugar: false,
  tomoPrimerClase: false
}

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
    asistenciaAclase.tomoPrimerClase = true
    const error = asistenciaAclase.tomoPrimerClase
      ? null
      : 'Koder tiene inasistencia'
    callback(error, asistenciaAclase)
  }, 3000)
}

// -----------------Funciones promificadas

function llamarPromificado (koderAllamar) {
  return new Promise((resolve, reject) => {
    llamar(koderAllamar, (error, koderContactado) => {
      error
        ? reject(error)
        : resolve(koderContactado)
    })
  })
}

function entrevistarPromificado (koderAentrevistar) {
  return new Promise((resolve, reject) => {
    entrevistar(koderAentrevistar, (error, koderEntrevistado) => {
      error
        ? reject(error)
        : resolve(koderEntrevistado)
    })
  })
}

function reservarPromificado (lugarAreservar) {
  return new Promise((resolve, reject) => {
    reservar(lugarAreservar, (error, lugarReservado) => {
      error
        ? reject(error)
        : resolve(lugarReservado)
    })
  })
}

function asistirAclasePromificado (asistenciaAclase) {
  return new Promise((resolve, reject) => {
    asistirAclase(asistenciaAclase, (error, claseTomada) => {
      error
        ? reject(error)
        : resolve(claseTomada)
    })
  })
}

async function principal () {
  const koderContactado = await llamarPromificado(koder)
  console.log('Koder contactado')
  const koderEntrevistado = await entrevistarPromificado(koderContactado)
  console.log('Koder entrevistado')
  const lugarReservado = await reservarPromificado(koderEntrevistado)
  console.log('Lugar reservado')
  const claseTomada = await asistirAclasePromificado(lugarReservado)
  console.log('Koder asistió a su primer clase')
  return claseTomada
}

principal()
  .then(resultado => {
    console.log('Bienvenido Koder!!!: ', resultado)
  })
  .catch(error => console.log('ERROR!!!: ', error))
