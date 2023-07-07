import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {

  maClasse:string="btn btn-success";
  colorier(nb:number){
    if(nb%3==0){
      return "magenta";
    } else{
      return "blue";
    }
  }
  titlebutton:string="Normal";
  style:string="italic";
  onModifStyle(){
    if(this.style =="italic"){
      this.style = "normal";
      this.titlebutton ="Italique";
      this.maClasse = "btn btn-danger";
    } else{
      this.style = "italic";
      this.titlebutton ="Normal";
      this.maClasse = "btn btn-success";
    }
  }


  titre:string="1. Opérations sur un tableau";
  titre2:string="2. Affichage des boutons des éléments pairs du tableau";
  tab= [15, 46, 0, 89, 80];

  onPosition(ind: number){
    console.log(this.tab[ind] + " a pour position " + (ind + 1));
  }

}
