function getDayOfTheWeek(utc) {
  const date = new Date(utc * 1000)
  //extragem ziua saptamanii sub forma de index pt ca asa e construit getDay
  const dayIndex = date.getDay()
  let day;

  switch (dayIndex) {
    case 0:
      day = 'Duminica'
      break;
    case 1:
      day = 'Luni'
      break;
    case 2:
      day = 'Marti'
      break;
    case 3:
      day = 'Miercuri'
      break;
    case 4:
      day = 'Joi'
      break;
    case 5:
      day = 'Vineri'
      break;
    case 6: 
      day = 'Sambata'
      break
    default:
    //aruncam o eroare daca indexul nu este valid (nu are cum sa ajunga aici)
      throw new Error('indexul trebuie sa fie intre 0 si 6')
  }

  return day;

}

function getHour(utc) {
  const date = new Date(utc * 1000)
  //extragem ora. daca ora are o valoare mai mica de 10 ii adaugam un 0
  let hours = date.getHours()
  if (hours < 10) {
    hours = "0" + hours
  }
  //extragem minutele
  let minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  return `${hours}:${minutes}`;
}