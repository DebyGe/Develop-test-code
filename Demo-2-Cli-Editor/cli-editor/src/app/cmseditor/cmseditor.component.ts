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

  private editorFocusOutModel : any;
  private txtSelection : String = '';
  private txtTranslate : String = '';
  private errorMessage : String = '';

  public onReady( editor ) {
      
        // Show possible element in toolbar
        // console.log(Array.from( editor.ui.componentFactory.names() ));

        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
        
        this.Editor.editorConfig = function( config ) {
          config.toolbarGroups = [
            { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
            { name: 'clipboard', groups: [ 'clipboard', 'undo' ] }
          ];
        };

        editor.setData( '<p><b>This is editor!</b></p>' );

        this.cultures  = this.dataCmsEditorService.getLinguage();
    
        this.contentTypes.push({value: 0, viewValue: 'Fragment'})
        this.contentTypes.push({value: 1, viewValue: 'Industries Description'})
        this.contentTypes.push({value: 2, viewValue: 'Static Label'})
        this.contentTypes.push({value: 3, viewValue: 'Other'})    
  }

  public ckEditorFocusOut(event) {
    this.editorFocusOutModel = event.editor.model;

    /*
    var selection = event.editor.model.document.selection;
    const range = selection.getFirstRange();
    for (const item of range.getItems()) {
      this.txtSelection += item.data;
    }*/  

     /*
    const insertPosition = selection.getFirstPosition();
    event.editor.model.change( writer => {
      writer.insertText( 'foo', insertPosition, 'end' );
    } );
    */
    /*
    const insertPosition = selection.getFirstPosition();
    event.editor.model.change( writer => {
      writer.remove( range );
      writer.insertText( 'foo', insertPosition);
    });
    */
}


  public onTextTranslate() {

    var selection = this.editorFocusOutModel.document.selection;
    var att = selection.getAttributes();
    
    const range = selection.getFirstRange();
    this.txtSelection = '';
    for (const item of range.getItems()) {
      this.txtSelection += item.data;
    }    

    this.dataCmsEditorService.getGTextTranslate('auto', this.contentdata.Culture, this.txtSelection).subscribe(
        (response) => {                           //next() callback
          console.log('** response received ** ');
          this.txtTranslate = response[0][0][0];
        },
        (error) => {                              //error() callback
          console.error('Request failed with error');
          this.errorMessage = error;
        },
        () => {                                   //complete() callback

          const insertPosition = selection.getFirstPosition();
            this.editorFocusOutModel.change( writer => {
            writer.remove( range );
            writer.insertText( this.txtTranslate, att , insertPosition);
          });

          //console.log(this.txtTranslate);
          //console.error('Request completed');      //This is actually not needed 
        })
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