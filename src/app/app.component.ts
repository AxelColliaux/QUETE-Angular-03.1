import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = '03-Directives';
  isAdmin:boolean = true;

  isVisible(){
    this.isAdmin = !this.isAdmin;
  }
}
