import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies = ['tennis', 'swimming', 'golf'];
  newHobby = '';

  addHobby(newHobby) {
  	if (newHobby != '') {
  		this.hobbies.push(newHobby);
  	}
  }

  removeHobby(i) {
  	console.log(i);
  	this.hobbies.splice(i, 1);
  }
}
