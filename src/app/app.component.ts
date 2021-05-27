import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onTerm(term:string):any {
    console.log('I am the app and here is the term, ', term)
  }
}
