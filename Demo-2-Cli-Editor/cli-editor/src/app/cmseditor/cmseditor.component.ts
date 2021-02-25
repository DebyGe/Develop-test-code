import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-cmseditor',
  templateUrl: './cmseditor.component.html',
  styleUrls: ['./cmseditor.component.css']
})

export class CMSEditorComponent implements OnInit {

  public Editor = DecoupledEditor;  
  

   public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );

        editor.setData( '<p><b>This is editor!</b></p>' );
       
    }

  constructor() { }

  ngOnInit(): void {
   
  }

}
