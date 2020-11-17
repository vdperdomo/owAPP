import React from 'react'
import axios from 'axios';
import { View } from 'react-native';

const instance = axios.create({
    baseURL: 'http://192.168.100.5:4000',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    },
});



const get = (url, params = {}) => {
    return instance({
        url: url,
        method: "GET",
        params: params
    })
}

const post = () => {

}

const put = () => {

}

const remove = () => {

}

export {
    get, post, put, remove
}
