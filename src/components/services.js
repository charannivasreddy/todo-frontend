import axios from "axios"
const getReq = async(uri)=>{
    const res = await axios.get(`http://localhost:4000/${uri}`).then(r=>r.data)
    return await res
}

const postReq = async(data)=>{
    const resd = await axios.post(`http://localhost:4000/posts/`,{"task":data}).then(res=>res.data)
    return await resd
}

const delReq = async(id)=>{
    const res = await axios.delete(`http://localhost:4000/posts/${id}`).then(r=>r.data)
    return await res
}

const updateReq = async(id,data)=>{
    const resd = await axios.put(`http://localhost:4000/posts/${id}`,{"task":data}).then(res=>res.data)
    return await resd
}
export default {getReq,postReq,delReq,updateReq}