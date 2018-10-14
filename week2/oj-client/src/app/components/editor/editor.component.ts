import { Component, OnInit } from '@angular/core';
// we must declare ace, since ace is not wroten by typescript, use type any
declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  public languages: string[] = ['Java', 'Python'];
  language: string = 'Java';

  defaultContent = {
  	'Java': `public calss Example {
  		        public static void main(String[] args) {
  		        	// Type your Java code here
  		        }
  	}
  	`,
  	'Python': `class Solution:
  	               def example():
  	                   # write your Python code here`
  };  //use `` to write multi-line text

  constructor() { }

  ngOnInit() {
  	// "editor" is the id in html
  	this.editor = ace.edit("editor");
  	this.editor.setTheme("ace/theme/eclipse");
  }

  resetEditor(): void {
    this.editor.getSession().setMode("ace/model/" + this.language.toLowerCase());
    // set the java
    this.editor.setValue(this.defaultContent[this.language]);
  }

  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }

  submit(): void {
    let usercode = this.editor.getValue();
    console.log(usercode);
  }

}
