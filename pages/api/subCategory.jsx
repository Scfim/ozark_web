import axios from 'axios'
import { server } from "../../constants/common"
axios.defaults.withCredentials = true;

export const addSubCategory = (data) => {
    const url = `${server}/subCategories/add`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const editSubCategory = (data) => {
    const url = `${server}/subCategories/add`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const deleteSubCategory = (data) => {
    const url = `${server}/subCategories/delete`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const getSubCategory =async () => {
    const url = `${server}/subCategories/getAll`
    try {
        const response =await axios.post(url,{}, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}
export const getSubCategoryLike = async (data) => {
    const url = `${server}/marks/getSubCategory`
    try {
        const response = await axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}
