import { Component, ViewChild } from '@angular/core';
import { JdaRichTextEditorComponent } from './jda-rich-text-editor/jda-rich-text-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHtml: string =
    '<h1><span style="color: rgb(230, 0, 0);">Hello World </span></h1><p><br></p><h3><strong style="color: rgb(0, 97, 0);">RichTextEditor demo</strong></h3>';
  outputHtml: string = '';

  @ViewChild(JdaRichTextEditorComponent) jdaRTE: JdaRichTextEditorComponent;

  constructor() {
  }

  viewContent() {
    this.outputHtml = this.jdaRTE.getModel();
    console.log(this.outputHtml);
  }

}
