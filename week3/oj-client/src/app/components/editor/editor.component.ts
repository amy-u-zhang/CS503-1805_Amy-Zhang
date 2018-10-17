import { Component, OnInit } from '@angular/core';
import { CollaborationService} from '../../services/collaboration.service';
import { ActivatedRoute, Params } from '@angular/router';
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
  	'Java': `public class Example {
  		        public static void main(String[] args) {
  		        	// Type your Java code here
  		        }
  	}
  	`,
  	'Python': `class Solution:
  	               def example():
  	                   # write your Python code here`
  };  //use `` to write multi-line text

  sessionId: string;

  // inject CollaborationService
  constructor(private collaboration: CollaborationService,
                private route: ActivatedRoute) { }

  ngOnInit() {
   //  // init collaboration service
   //  this.collaboration.init();
  	// // "editor" is the id in html
  	// this.editor = ace.edit("editor");
  	// this.editor.setTheme("ace/theme/eclipse");

    //use problem id as session id
    // since we subscribe the changes, every time the params changes
    // sessionId will be updated and editor will be initilized
    this.route.params.subscribe( params => {
      this.sessionId = params['id'];
      this.initEditor();
    });

    // restore buffer from backend
    this.collaboration.restoreBuffer();
  }

  initEditor(): void {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipes");
    this.resetEditor();
    document.getElementsByTagName('textarea')[0].focus();

    // set up collaboration socket
    this.collaboration.init(this.editor, this.sessionId);

    this.editor.lastAppliedChange = null;

    // register change callback
    this.editor.on("change", (e) => {
      console.log('editor changes: ' + JSON.stringify(e));
      // check if the change is same as last change,
      // if they are the same, skip this change
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    });
  }

  resetEditor(): void {
    this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
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