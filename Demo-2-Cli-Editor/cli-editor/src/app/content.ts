import { Component, OnInit } from '@angular/core';

@Component({
  template: ''
})

export class Content {
  Name: string;
  Content: string;
  Culture: string;
  ContentType: number;

  constructor() {
  	this.Name = ''; 
  	this.Content = '';
  	this.Culture = 'Eg';
  	this.ContentType = 0;
  }

}
