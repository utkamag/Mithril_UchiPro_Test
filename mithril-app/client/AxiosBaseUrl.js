//Базовый URl адрес

import axios from "axios";

export const AxiosBaseUrl = axios.create({
    baseURL: "https://vuekez.herokuapp.com/"
})