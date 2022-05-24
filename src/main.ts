import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections:any = document.getElementsByClassName('section')


function scrollActive(){
  const scrollY = window.pageYOffset

  for(let section of sections){
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 50;
    var sectionId = section.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      var element:any = document.getElementById(sectionId + 'A')
      element.classList.add("active-link")
    }else{
      var element:any = document.getElementById(sectionId + 'A')
      element.classList.remove("active-link")
    }
  }
  
}
window.addEventListener('scroll', scrollActive)