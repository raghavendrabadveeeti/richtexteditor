import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdaRichTextEditorComponent } from './jda-rich-text-editor.component';

describe('JdaRichTextEditorComponent', () => {
  let component: JdaRichTextEditorComponent;
  let fixture: ComponentFixture<JdaRichTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdaRichTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdaRichTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
