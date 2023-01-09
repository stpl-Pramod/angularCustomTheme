import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCustomTheme';
  isDarkTheme : boolean = false;
  ngOnInit(){
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }
  storeTheme(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }
}
