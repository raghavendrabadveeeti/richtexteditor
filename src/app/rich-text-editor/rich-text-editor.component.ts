import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {

  @Input() readonly = false;
  @Input() height: any = 100;
  @Input() inputText: any;
  @Input() richTextEditorForm: any;
  @Input() backGroundColor: any = '#E3EDF1';
  @Input() removeBorder: any = false;

  modules: any = this.getDefaultModules();
  showToolbar = false;

  static buildRichTextEditorFormGroup() {
    return new FormGroup({
      richText: new FormControl('', Validators.required)
    });

  }

  constructor() {
  }

  getViewModeHeight() {
    return this.height + 'px';
  }

  getEditModeHeight() {
    return (this.height - 42) + 'px';
  }

  getBorder() {
    return (this.removeBorder === true) ? '0' : '1';
  }

  isEditable(): boolean {
    return (!this.readonly && this.showToolbar);
  }

  showEditor(flag: boolean) {
    this.showToolbar = flag;
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

}
