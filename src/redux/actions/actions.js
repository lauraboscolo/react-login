/** */
import axios from 'axios'
//const url = "http://localhost:5000/api/"

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"
export function loadPosts () {
    return (dispatch) => {
        axios.get(`${url}posts`)
        .then((res) => {
            let posts = res.data
            dispatch({type:'LOAD_POSTS', posts})
        }).catch((err) => {
            console.log(err)
        })
    }
}
export function getCandidate (_id) {
    return axios.get(`${url}candidate/${_id}`).then((res)=>{
        return res.data
    }).catch(err=>console.log(err))
}
export function getCandidateProfile (_id) {
    return (dispatch) => {
        axios.get(`${url}candidate/profile/${_id}`).then((res)=>{
            let profile = res.data
            dispatch({type: 'SET_PROFILE', profile})
        }).catch(err=>console.log(err))
    }
}
export function getPost (post_id) {
    return (dispatch) => {
        axios.get(`${url}post/${post_id}`)
        .then((res) => {
            let post = res.data
            dispatch({type: 'VIEW_POST', post})
        }).catch((err) => console.log(err))
    }
}
// post_id, author_id, comment
export function comment () {
    return (dispatch) => {
    }
}
//req.body.post_id
export function clap (post_id) {
    return (dispatch) => {
        axios.post(`${url}post/clap`,{ post_id }).then((res) => {
            dispatch({type:'CLAP_POST'})
        }).catch((err)=>console.log(err))
    }
}
//id, candidate_id
export function follow (id, candidate_id) {
    return (dispatch) => {
        axios.post(`${url}candidate/follow`,{ id, candidate_id }).then((res) => {
            dispatch({type:'FOLLOW_CANDIDATE', candidate_id})
        }).catch((err)=>console.log(err))        
    }
}
export function SignInCandidate (candidate_data) {
    return (dispatch) => {
        axios.post(`${url}candidate`,candidate_data).then((res)=>{
            let candidate = res.data
            localStorage.setItem('Auth', JSON.stringify(candidate))
            dispatch({type: 'SET_CANDIDATE', candidate})
        }).catch((err)=>console.log(err))
    }
}
export function toggleClose() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: true})        
    }    
}