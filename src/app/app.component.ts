import { Component, SecurityContext } from '@angular/core';
import html2jsonLib from 'html2json';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputString: string =
    '<ul><li class="ql-indent-1 ql-align-center">Use<strong><em> Angular DOMSanitize</em></strong>r <s><u>to filter XSS</u></s> <strong style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 0);">issues </strong></li></ul>';

  htmlGeneratedByRTE: string = '';
  jsonGeneratedByLibrary: string = '';
  htmlGeneratedByLibrary: string = '';

  constructor(private sanitizer: DomSanitizer) {

  }

  getUpdatedModelValueEvent(htmlString: any) {
    this.htmlGeneratedByRTE = htmlString;
    this.jsonGeneratedByLibrary = JSON.stringify(html2jsonLib.html2json(this.htmlGeneratedByRTE));
    this.htmlGeneratedByLibrary = this.bypassSecurityTrustHtml(html2jsonLib.json2html(JSON.parse(this.jsonGeneratedByLibrary)));

  }

  bypassSecurityTrustHtml(htmlString: string | null): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, htmlString);
    return htmlString;
  }

}
