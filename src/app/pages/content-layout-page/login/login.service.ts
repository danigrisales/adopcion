import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:Http, 
    private httpClient: HttpClient,
    public  router:Router
    ) { }



  // Headers
  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return myHeaders;
  }

  

  public obtenerProductos(): Observable<any> {
    //const url = `${this.urlService.loginValidateUser}${dataLogin.userName}&password=${dataLogin.password}&db=${this.urlService.database}`;
   const url='http://localhost:3000/asientos'

    return this.http.get(url,
     { headers: this.headersREST() }).pipe(
      map(response => {        
        return response.json();
      }), pipe(catchError(this.handleError)))
  }

 // Erros
  private handleError(error: Response) {
    const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return Observable.throw(json);
  }
  
 

public login(email: string, password: string):Observable<any> {
  return this.http.post(`http://localhost:3000/signin`
    , { email, password },{headers : this.headersREST()})
    .pipe(map(res => {
      //return localStorage.setItem('access_token',res.token);
      return res.json();
    }), pipe(catchError(this.handleError)))
}


}

