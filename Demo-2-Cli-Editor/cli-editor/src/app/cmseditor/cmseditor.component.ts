import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Content } from "../content";

@Component({
  selector: 'app-cmseditor',
  templateUrl: './cmseditor.component.html',
  styleUrls: ['./cmseditor.component.css']
})

export class CMSEditorComponent implements OnInit {

  public Editor = DecoupledEditor;  
  
  contentdata = new Content();

  public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );

        editor.setData( '<p><b>This is editor!</b></p>' );    
  }

  public onSaveEditorData() {
    console.log(this.contentdata.Name);  
    console.log(this.contentdata.Content);  
    //test this.contentdata.Content = this.contentdata.Name;
  }

  constructor() { 

  }

  ngOnInit(): void { 

  }

}
