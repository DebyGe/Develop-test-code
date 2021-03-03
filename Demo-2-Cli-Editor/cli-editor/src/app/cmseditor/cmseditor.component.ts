import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Content } from "../content";
import { DataCmsEditorService } from '../data-cms-editor.service';
interface Culture {
  value: string;
  viewValue: string;
}

interface ContentType {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-cmseditor',
  templateUrl: './cmseditor.component.html',
  styleUrls: ['./cmseditor.component.css']
})

export class CMSEditorComponent implements OnInit {

  public Editor = DecoupledEditor;  
  contentdata = new Content();
  cultures: Culture[] = [];
  contentTypes: ContentType[] = [];
  dataLinguageRet: any = [];

  public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );

        editor.setData( '<p><b>This is editor!</b></p>' );

        this.cultures  = this.dataCmsEditorService.getLinguage();
    
        this.contentTypes.push({value: 0, viewValue: 'Fragment'})
        this.contentTypes.push({value: 1, viewValue: 'Industries Description'})
        this.contentTypes.push({value: 2, viewValue: 'Static Label'})
        this.contentTypes.push({value: 3, viewValue: 'Other'})    
  }

  public onSaveEditorData() {
    console.log(this.contentdata.Name);  
    console.log(this.contentdata.Culture);  
    console.log(this.contentdata.ContentType);  
    console.log(this.contentdata.Content);  

  }

  constructor(private dataCmsEditorService: DataCmsEditorService) { 
  }

  ngOnInit(): void { 

  }

}
