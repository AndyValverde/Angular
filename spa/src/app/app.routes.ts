import {RouterModule,Routes} from '@angular/router';
//importamos componentes para poder utilizarlos
import {HomeComponent} from 'src/app/components/home/home.component';
import {AboutComponent} from 'src/app/components/about/about.component';
import {HeroesComponent} from 'src/app/components/heroes/heroes.component';
import {HeroeComponent} from 'src/app/components/heroe/heroe.component';
const APP_ROUTES: Routes = [ //estas rutas seran las que podemos utilizar
 {path : 'home', component : HomeComponent},
 {path : 'about', component : AboutComponent},
 {path : 'heroes', component : HeroesComponent},
//es necesario los :id
 {path : 'heroe/:id', component : HeroeComponent},
 {path : '**' , pathMatch: 'full', redirectTo : 'home'}///por defecto
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);