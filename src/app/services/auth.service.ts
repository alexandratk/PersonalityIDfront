import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { User } from "../interfaces/interfaces";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private token!: string;
    
    constructor (private http: HttpClient) {

    }
    
    login(user: User): Observable<{jwtToken: string}> {
        return this.http.post<{jwtToken: string}>('http://localhost:5000/user/authUser', user)
        .pipe(tap(
            ({jwtToken}) => {
                localStorage.setItem('auth-token', jwtToken)
                this.setToken(jwtToken)
            }
        ))
    }

    setToken (token: string) {
        this.token = token
    }

    getToken(): string{
        return this.token
    }

    isAuthenticated(): boolean {
        console.log(localStorage.getItem('auth-token'))
        return !!localStorage.getItem('auth-token')
        return !!this.token
    }

    logout() {
        this.setToken('')
        localStorage.clear()
    }
}