import { Injectable } from '@angular/core';
import axios from 'axios';



// axios.defaults.headers.patch['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.put['Content-Type'] = 'application/json multipart/form-data';

export class Globals {

    public static SERVER_URL: string = 'http://localhost:3000/api/v1/';

    public static axiosInstance = axios;
}