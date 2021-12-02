import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class PolicyService {
    
    public getPolicies() {
        return this.http.get("http://www.mocky.io/v2/580891a4100000e8242b75c5");
    }

    constructor(private http: HttpClient) {}

}