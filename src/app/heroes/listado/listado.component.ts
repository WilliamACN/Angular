import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  heroes:string [] = ['Spiderman','Ironman','Thor','Hulk'];
  heroeB :string | undefined = '';
  borrarHeroe(){
     this.heroeB = this.heroes.shift();
  }
}
