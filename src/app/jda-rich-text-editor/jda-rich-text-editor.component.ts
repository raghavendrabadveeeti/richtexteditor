///<reference path="../../../node_modules/ngx-quill/src/quill-editor.component.d.ts"/>
import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'jda-rich-text-editor',
  templateUrl: './jda-rich-text-editor.component.html',
  styleUrls: ['./jda-rich-text-editor.component.scss']
})
export class JdaRichTextEditorComponent {

  @Input('model') inputText: any;
  @Input('readonly') isReadOnly = false;
  @Output() getUpdatedModelValue = new EventEmitter<any>();

  modules: any = this.getDefaultModules();
  showToolbar = false;

  constructor() {
  }

  updatedModel() {
    this.getUpdatedModelValue.emit(this.inputText);
  }

  getDefaultModules() {
    return {
      toolbar: [
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        ['bold', 'italic', 'underline', 'strike'],
        [{'color': []}, {'background': []}],
        ['link'],
        [{'align': []}],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'indent': '-1'}, {'indent': '+1'}],
        ['clean']
      ]
    };
  }

  isEditable(): boolean {
    return (!this.isReadOnly && this.showToolbar);
  }

  showEditor(flag: boolean) {
    this.showToolbar = flag;
  }

  onClickedOutside(e: Event) {
      this.showToolbar = false;
    }
}
