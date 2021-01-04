import {Component} from '@angular/core'

@Component({
    selector : 'app-body',
    templateUrl: 'body.component.html'
})
export class bodyComp{
    mostrar : boolean = true;
    frase : any = {
        mensaje : `Un gran poder conlleva una gran responsabilidad`,
        autor : `Ben parker`
    };
    super : string [] = ["spiderman", "batman", "superman"];
}