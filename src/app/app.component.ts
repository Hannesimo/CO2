import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'co2';
 
  
  co2prokm 
  km
  verbrauch 
  auto_co2 
  kwh 
  co2prokwh 
  leit_h2o_ver
  leit_h2o_co2 
  fla_h2o_ver 
  fla_h2o_co2 
  flug_km = 0;
  flug_co2 = 0;
  internet_gbit = 0;
  internet_co2 = 0;
  vheitzart = 0;
  heitzmenge = 0;
  strom_co2
  co2_h2o
g="g"

heizart
co2prom3holz=1 ;//wert los
co2prolöl=2 ;//wert los


heizungtest=0;

  co2prolleitung = 0.3;
  co2prolflasche = 211;
  co2prokmflug = 366;
  g_pro_gbit = 884;  //auf Gbyt ändern
  holzco2 = 1;      //hier echten wert einsetzen

  mengeneinheitheizung="kg"

  

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

   }

/*
CheckAuswahl_krafftstof() {  //berechnet nach auswahl von Krafftstoff den co2 wert
 // co2prokm = getFloat("Kraftstof");

  km_woche = getFloat("km/woche");
  verbrauch = getFloat("verbrauch");
  auto_co2 = Math.round(verbrauch * co2prokm * km_woche)
  el("auto_co2").innerText = auto_co2 + "g";
}

CheckAuswahl_strom() {             //berechnet nach auswahl von Stromart Co2 wert
  co2prokwh = getFloat("Stromart")
  console.log(co2prokwh);

  kwh_woche = getFloat("kwh/woche")
  strom_co2 = Math.round(kwh_woche * co2prokwh)
  el("strom_co2").innerText = strom_co2 + "g";
}

Leitungswasser() {                  //berechnet nach eingabe von l/w co2 für reinigung
  leit_h2o_ver = getFloat("Leitungswasser_verbrauch")
  leit_h2o_co2 = Math.round(10 * (co2prolleitung * leit_h2o_ver)) / 10
  el("Leitungswasser_co2").innerText = leit_h2o_co2 + "g"
}

flaschenwasser() {                   //berechnet nach eingabe von l/w co2 für transport + verpackung + reinigung
  fla_h2o_ver = getFloat("flaschenwasser_verbrauch")
  fla_h2o_co2 = co2prolflasche * fla_h2o_ver
  el("Flaschenwasser_co2").innerText = fla_h2o_co2 + "g"
}


flug() {
  flug_km = getFloat("flug_km")
  flug_co2 = co2prokmflug * flug_km
  el("flugzeug_co2").innerText = flug_co2 + "g"
}

internet() {
  internet_gbit = getFloat("gbit_woche")
  internet_co2 = g_pro_gbit * internet_gbit
  el("internet_co2").innerText = `${internet_co2}g`
}

Heitzung() {
  vheitzart = getFloat("heitzart")
  heitzmenge = getFloat("mengeheitzung")
  heitzungco2 = vheitzart * heitzmenge
  el("heitzung_co2").innerText = heitzungco2
}

heitzart() {
  

}



el(id) {
  return document.getElementById(id)
}
getFloat(id) {
  return parseFloat(el(id).value);
}
*/
}
