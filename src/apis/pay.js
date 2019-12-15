//pay.js 用于定义代缴费相关接口

import req from './http.js'

// 小区查询接口
export const ListCommunities =params=>req('get','/baseinfo/listCommunities',params)

// 缴费列表接口
export const GetPayList =(id,params)=>req('get','/order/listOrders/'+id,params)
