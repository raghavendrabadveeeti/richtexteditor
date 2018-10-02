import { Component } from '@angular/core';
import html2jsonLib from 'html2json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputString: string =
    '<h1><span style="color: rgb(230, 0, 0);">Hello World </span></h1><p><br></p><h3><strong style="color: rgb(0, 97, 0);">RichTextEditor demo</strong></h3>';

  htmlGeneratedByRTE: string = '';
  jsonGeneratedByLibrary: string = '';
  htmlGeneratedByLibrary: string = '';

  getUpdatedModelValueEvent(htmlString: any) {
    this.htmlGeneratedByRTE = htmlString;
    this.jsonGeneratedByLibrary = JSON.stringify(html2jsonLib.html2json(this.htmlGeneratedByRTE));
    this.htmlGeneratedByLibrary = html2jsonLib.json2html(JSON.parse(this.jsonGeneratedByLibrary));

  }

}
