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
    
    this.lang = localStorage.getItem('lang');
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
    this.translate.use(this.lang)
  }
  storeTheme(){
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }
  setLang(language:string){
    this.translate.use(language)
    localStorage.setItem('lang', language);
    console.log(this.lang);
    
  }
}
