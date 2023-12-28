
import { Injectable } from '@angular/core';
import { Globals } from 'src/app/globals';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    SERVER_URL: string;
    axiosInstance: any;
    constructor() {
        this.SERVER_URL = Globals.SERVER_URL;
        this.axiosInstance = Globals.axiosInstance;
    }

    saveProfile(data: any) {
        console.log(2222222, data.formData)
        return Globals.axiosInstance.post(`${Globals.SERVER_URL + 'users/' + data.userId}`, data.formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }
    getScheduleTiming(
        id:any , 
        ){
        return this.axiosInstance.get(`${this.SERVER_URL + 'users/getSchedule'}`, id)
    }
    addScheduleTiming(data: any){
        return this.axiosInstance.get(`${this.SERVER_URL + 'users/' +data.userId + '/addSchedule'}`,data)
    }
}