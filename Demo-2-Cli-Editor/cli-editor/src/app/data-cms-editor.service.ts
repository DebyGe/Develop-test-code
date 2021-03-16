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

  public getLinguage() {
  	// http://www.lingoes.net/en/translator/langcode.htm
    const linguage = 
  	[
  		{'value': 'it', 'viewValue': 'IT'}, 
  		{'value': 'eg', 'viewValue': 'EG'},
  		{'value': 'fr', 'viewValue': 'FN'}
  	];

  	return linguage;
  }

  public getGTextTranslate(sourceLang, targetLang, sourceText) {
    // https://cloud.google.com/translate/docs/languages
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
              + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

    return this.httpClient.get(url);
  }

}
