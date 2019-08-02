import moment  from 'moment'

export let formatDate = (date) => {
  return moment(date).format("YYYY/MM/DD")
}


export let newDate = () => {
  return moment(new Date()).format("YYYY/MM/DD")
}

// date '2019/06/01 16:00:09'   =>  20190601
export let convertD2I = (date) => {
 return	parseInt(formatDate(date).split('/').join(''))
}

