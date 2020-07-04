import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "3f3df44b-12e8-476c-b3e6-089c3a820b9a",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const userAPI = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`)
            .then(response => {
                return response.data;                                
            });
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {                
                return response.data;
            })
    },
    auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    following(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
        })
    },
    unfollowing(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
        })
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
        })
    },
    updateStatus(statusText) {
        return instance.put(`profile/status`, {status: statusText})
            .then(response => {
                return response.data;
        })
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                console.log(response.data);
                return response.data;
        })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
        })
    },
    putPhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => {
                return response.data;
        })
    },      
}