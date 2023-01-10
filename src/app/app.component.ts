import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCustomTheme';
  isDarkTheme : boolean = false;
  lang: any = "mr";
  constructor(private translate: TranslateService) {
     translate.setDefaultLang(this.lang);
    
    this.lang = localStorage.getItem('lang') === "en" ? "en" : "mr";
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;

  }
  storeTheme(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }
  setLang(language:string){
    localStorage.setItem('lang', JSON.stringify(this.translate.use(language)) ? "en" : "mr");
    console.log(this.lang);
    
  }
}
