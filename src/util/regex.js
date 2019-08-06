export default function clone(e) {
  return JSON.parse(JSON.stringify(e))
}


//验证年龄格式（年龄只能0~99，两位数）
export let va_age = (age) => {
  var regNum = /^[0-9]{1,2}$/;
  if (regNum.test(age)) {
    return true;
  } else {
    return false;
  }   
}

//验证Email格式
export let va_email = (Email)=>{
  if (Email==null || Email == "") {
      return false;
  } else {
    var r = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (r.test(Email)) {
      return true;
    } else {
      return false;
    }
  }
}


//验证手机格式  
export let va_phone = (mobile)=>{
  if (mobile !== "") {
    var r = /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/;
    if (!r.test(mobile)) {
      return false;
    }
  }
  return true;
}