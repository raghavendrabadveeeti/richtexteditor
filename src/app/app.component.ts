import { Component } from '@angular/core';
import html2jsonLib from 'html2json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputString: string =
    '<ul><li><strong class="ql-size-large" style="color: rgb(0, 138, 0);"><em><s><u>Hello World</u></s></em></strong></li></ul><p><br></p><ul><li><a href="https://www.npmjs.com/package/ng-quill" target="_blank" class="ql-size-large">NG-Quill Test for Angular 1.x</a></li></ul>';

  htmlGeneratedByRTE: string = '';
  jsonGeneratedByLibrary: string = '';
  htmlGeneratedByLibrary: string = '';

  getUpdatedModelValueEvent(htmlString: any) {
    this.inputString = htmlString;
    this.htmlGeneratedByRTE = htmlString;
    this.jsonGeneratedByLibrary = JSON.stringify(html2jsonLib.html2json(this.htmlGeneratedByRTE));
    this.htmlGeneratedByLibrary = html2jsonLib.json2html(JSON.parse(this.jsonGeneratedByLibrary));

  }

}
