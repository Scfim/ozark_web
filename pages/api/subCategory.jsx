import axios from 'axios'
import {server} from "../../constants/common"

export const addSubCategory=()=>{
    const url=`${server}/....`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const editSubCategory=()=>{
    const url=`${server}/....`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const deleteSubCategory=()=>{
    const url=`${server}/....`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const getSubCategory=()=>{
    const url=`${server}/....`
    return new Promise((resolve,reject)=>{
        axios.post(url).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}