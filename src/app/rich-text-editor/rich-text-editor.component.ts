import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {

  @Input() readonly = false;
  @Input() height = 200;
  @Input() inputText: any;
  @Input() richTextEditorForm: any;

  modules: any = this.getDefaultModules();
  showToolbar = false;
  viewModeHeight: string = this.height + 'px';
  editModeHeight: string = (this.height - 66) + 'px';

  static buildRichTextEditorFormGroup() {
    return new FormGroup({
      richText: new FormControl('', Validators.required)
    });

  }

  constructor() {
    this.viewModeHeight = this.height + 'px';
    this.editModeHeight = (this.height - 66) + 'px';
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
    return (!this.readonly && this.showToolbar);
  }

  showEditor(flag: boolean) {
    this.showToolbar = flag;
  }
}
