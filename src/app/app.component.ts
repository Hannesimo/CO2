import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'co2';

  aut=["1"];
  autzahl=1;

  co2prokm =0;
  km=0;
  verbrauch =0;
  auto_co2 =0;
  kwh 
  co2prokwh =0;
  leit_h2o_ver
  leit_h2o_co2 =0;
  fla_h2o_ver
  fla_h2o_co2 =0;
  flug_km 
  flug_co2 = 0;
  internet_gbit 
  internet_co2 = 0;
  vheitzart = 0;
  heitzmenge 
  strom_co2=0;
  co2_h2o=0;
  
  Personen_im_Haushalt=1;
  
  ernährungsplatzhalter

heizart
co2prom3holz=1 ;//wert los
co2prolöl=2 ;//wert los
Co2prom3gas=3 ;//wert los
co2heizung

heizungtest=0;

  co2prolleitung = 0.3;
  co2prolflasche = 211;
  co2prokmflug = 366;
  g_pro_gbit = 884;  //auf Gbyt ändern
  holzco2 = 1;      //hier echten wert einsetzen

  mengeneinheitheizung="m³"

  authinzu(){
    this.aut.push(this.autzahl);
    this.autzahl=this.autzahl+1;
  }

   strom(){
     this.strom_co2= this.kwh*this.co2prokwh
console.log(this.strom_co2)
   }

   wasser(){
     this.leit_h2o_co2=this.leit_h2o_ver*this.co2prolleitung
     this.fla_h2o_co2=this.fla_h2o_ver*this.co2prolflasche
     this.co2_h2o=this.leit_h2o_co2+this.fla_h2o_co2
     console.log(this.co2_h2o)
   }


   heizung(){

     this.heizungtest=this.heitzmenge*this.heizart

     if (this.heizart === "co2prolöl") {
      console.log(this.co2prolöl);
      this.mengeneinheitheizung = "l"
    }else if (this.heizart === "co2prokwh") {
      console.log(this.co2prokwh);
      this.mengeneinheitheizung = "kwh"
    }else if (this.heizart === "40") {
      console.log(this.co2prokwh);
      this.mengeneinheitheizung = ""
    }else this.mengeneinheitheizung = "m³";
   }
}
