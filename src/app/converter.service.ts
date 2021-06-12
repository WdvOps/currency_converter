import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private http: HttpClient) { }

  MakeConvert(): Observable<any> {
    const apiKey = "oRZVc7UFUD8w0pYZKpis6j2zjhmNN8OOk4sQ";
    const url = `https://currencyapi.net/api/v1/rates?key=${apiKey}&base=USD`;

    return this.http.get<any>(url);
  }
}
