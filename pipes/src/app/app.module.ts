import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
//para configurar el idioma antes recuerda ng add @angular/localize en la terminal
import { registerLocaleData } from '@angular/common';
import localesEs from '@angular/common/locales/es';
import localesFr from '@angular/common/locales/fr';
//
import { AppComponent } from './app.component';
//para cambiar el idioma
registerLocaleData(localesEs);
registerLocaleData(localesFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //este es para cambiar el idioma localmente (global en la aplicación pero amm es dependdiente)
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
