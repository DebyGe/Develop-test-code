import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get-json-data',
  templateUrl: './get-json-data.component.html',
  styleUrls: ['./get-json-data.component.css']
})
export class GetJsonDataComponent implements OnInit {

  data: any = [];
  dataRet: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data)=>{
      console.log(data);
      this.data = data;
    })
  }

  getData() {
    this.dataService.sendGetRequest().subscribe((data)=>{
      console.log(data);
      this.data = data;
    })
  }

  sendData() {
    this.dataService.sendPostRequest().subscribe((data)=>{
      console.log(data);
      this.dataRet = data;
    })
  }

}
