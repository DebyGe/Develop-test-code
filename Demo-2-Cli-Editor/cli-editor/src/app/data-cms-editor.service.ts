import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataCmsEditorService {
  private REST_API_SERVER = "http://localhost:5000/api/v1/resources/books/all";
  private REST_API_JSON_REQUEST =  "http://localhost:5000/json-request";

  constructor(private httpClient: HttpClient) { }

   public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendPostRequest() {
    const body = { 'in1' : 'client', 'in2': 'angula' };
    return this.httpClient.post<any>(this.REST_API_JSON_REQUEST, body);
  }
}
