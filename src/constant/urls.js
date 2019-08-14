import {API_SERVER}  from './apis'

export const HOME = '/'
export const TASK_MANAGE = '/taskmanage'


export const API_USER_SAVE    = API_SERVER + '/user/save'
export const API_COMP_SAVE    = API_SERVER + '/user/savecomp'
export const API_USER_REG     = API_SERVER + '/user/reg'
export const API_COMP_REG     = API_SERVER + '/user/regcomp'
export const API_USER_LOGIN   = API_SERVER + '/user/login'


export const API_QUERY_FAV    = API_SERVER + '/fav/query'
export const API_ADD_FAV      = API_SERVER + '/fav/add'
export const API_CANCEL_FAV   = API_SERVER + '/fav/cancel'



export const API_QUERY_APPLY  = API_SERVER + '/apply/query'
export const API_ADD_APPLY    = API_SERVER + '/apply/add'
export const API_STATUS_APPLY = API_SERVER + '/apply/setstatus'


export const API_PROJ_QUERY  = API_SERVER + '/proj/query'
export const API_PROJ_ADD    = API_SERVER + '/proj/add'
export const API_PROJ_DETAIL = API_SERVER + '/proj/detail'



export const HOST_IMG = API_SERVER + '/'