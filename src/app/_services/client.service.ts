import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class ClientService {
    
    public getClients() {
        return this.http.get("http://www.mocky.io/v2/5808862710000087232b75ac");
    }

    constructor(private http: HttpClient) {}

}