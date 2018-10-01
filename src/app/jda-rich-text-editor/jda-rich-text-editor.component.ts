import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, Renderer2 } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'jda-rich-text-editor',
  templateUrl: './jda-rich-text-editor.component.html',
  styleUrls: ['./jda-rich-text-editor.component.css']
})
export class JdaRichTextEditorComponent {

  @Input('model') private inputText: any;

  modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike'],
      [{'color': []}, {'background': []}],
      ['link'],
      [{'align': []}],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'indent': '-1'}, {'indent': '+1'}],
      ['clean']
    ],
  };

  getModel(): any {
    return this.inputText;
  }

  setModel(value: any) {
    this.inputText = value;
  }
}
