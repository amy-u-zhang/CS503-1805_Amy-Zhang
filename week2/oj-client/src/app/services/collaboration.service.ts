import { Injectable } from '@angular/core';
declare var io: any;  // io is already imported in .angular.cli.json

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {
  collaborationSocket: any;

  constructor() { }

  init(editor: any, sessionId: string): void {
  	// window.location.origin: the server location on the current page
  	// for example, the current page on the browser is 
  	// "localhost:3000/problems/1", the window.location.origin =
  	// "http://localhost:3000"
  	this.collaborationSocket = io(window.location.origin, {
  		query: 'sessionId=' + sessionId});
  	/// wait for 'message' event
  	/// when receive the message, for now just print the message
  	// handle the changes send from server
    this.collaborationSocket.on('change', (delta: string) => {
  		console.log('collabration: editor changes ' + delta);
      delta = JSON.parse(delta); // delta is in josn format
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
  	});
  }

  // emit event to make changes and inform server and other collaborators
  change(delta: string): void {
    // emit "change" event
    this.collaborationSocket.emit("change", delta);
  }
}
