import { Component, SecurityContext, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { QuillEditorComponent } from 'ngx-quill';
import { JdaRichTextEditorComponent } from './jda-rich-text-editor/jda-rich-text-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputString: string =
    '<h1><span style="color: rgb(230, 0, 0);">Hello World </span></h1><p><br></p><h3><strong style="color: rgb(0, 97, 0);">RichTextEditor demo</strong></h3>';

  outputString: string = '';

  viewContent() {

  }

  getUpdatedModelValueEvent(outputString: any) {
    this.outputString = outputString;

  }

}
