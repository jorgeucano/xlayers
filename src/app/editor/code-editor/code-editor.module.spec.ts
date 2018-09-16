import { CodeEditorModule } from './code-editor.module';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import { TestBed } from '@angular/core/testing';
 // TODO: this helper should be in @angular/platform-browser-dynamic/testing
try {
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
} catch {
  // Ignore exceptions when calling it multiple times.
}

describe('CodeEditorModule', () => {
  let editorModule: CodeEditorModule;

  beforeEach(() => {
    codeEditorModule = new CodeEditorModule();
  });

  it('should create an instance', () => {
    expect(codeEditorModule).toBeTruthy();
  });
});
