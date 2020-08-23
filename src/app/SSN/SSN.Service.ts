import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class SSNService {
    constructor(private http: HttpClient) { }
    public PostData(data: any) {
        return this.http.post("http://localhost:5050/enrollment",data)
    }
    public GetStates() {
        return this.http.get("http://localhost:5050/getAllStates")
    }
    public GetVerification(data:any) {
        return this.http.get("http://localhost:5050/validate/"+data.ssn+"/"+data.state)
    }
}