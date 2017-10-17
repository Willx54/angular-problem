import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies: string[] = ['tennis', 'swimming', 'golf'];
  newHobby = '';
  hobbyDel = false;

  addHobby() {
  	if (this.newHobby != '') {
  		this.hobbies.push(this.newHobby);
  	}
  }

  onHobbyRemoved(hobby:string) {
  	const position = this.hobbies.indexOf(hobby);
 	this.hobbies.splice(position, 1);
 	this.hobbyDel = true;
  }
}
