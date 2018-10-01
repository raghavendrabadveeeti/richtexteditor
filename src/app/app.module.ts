import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JdaRichTextEditorComponent } from './jda-rich-text-editor/jda-rich-text-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    JdaRichTextEditorComponent
  ],
  imports: [
    BrowserModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
