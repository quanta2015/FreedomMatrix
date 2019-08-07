import moment  from 'moment'



let prefixInteger = (num, length) => {
	let len = num.toString().length 
	num = (len<2)? ('0'+num):num
   return num
  }

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


export let convertI2D = (date) => {
  let _date = date + ''
  let year  = _date.substring(0,4)
  let month = prefixInteger(_date.substring(4,6), 2)
  let day   = prefixInteger(_date.substring(6,8), 2)
  return	moment(`${year}/${month}/${day}`,'YYYY/MM/DD')
}