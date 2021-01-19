import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  auto_co2 = 0;
  km
  verbrauch
  co2prokm = 0;
  auto() {
    this.auto_co2 = this.km * this.co2prokm * this.verbrauch
    this.co2auto.push(this.auto_co2)
  }


  co2auto = [0,];

  title = 'co2';

  aut = ["1"];
  autzahl = 1;

  co2prokmu;
  kmu;
  verbrauchu;
  auto_co2u = 0;

  autou() {
    this.auto_co2u = this.kmu * this.co2prokmu * this.verbrauchu

  }

  kwh
  co2prokwh = 0;
  leit_h2o_ver
  leit_h2o_co2 = 0;
  fla_h2o_ver
  fla_h2o_co2 = 0;
  flug_km
  flug_co2 = 0;
  internet_gbit
  internet_co2 = 0;
  vheitzart = 0;
  heitzmenge
  strom_co2 = 0;
  co2_h2o = 0;

  Personen_im_Haushalt = 1;

  ernährungsplatzhalter

  heizart


  co2heizung

  Bahn_km;
  heizungtest = 0;
  Rbus_km;
  Reisebusco2 = 20;
  co2prokmBahn = 40;
  co2prolleitung = 0.3;
  co2prolflasche = 211;
  co2prokmflug = 369;
  g_pro_gbit = 7076;
  holzco2 = 1830000;

  mengeneinheitheizung = "m³"

  authinzu() {
    this.aut.push("1");
    this.autzahl = this.autzahl + 1;
  }

  strom() {
    this.strom_co2 = this.kwh * this.co2prokwh/this.Personen_im_Haushalt
    console.log(this.strom_co2)
  }
  urlaub_co2:number  = 0;
  urlaub() {
    this.urlaub_co2 = this.flug_km * this.co2prokmflug + this.Bahn_km * this.co2prokmBahn + this.Rbus_km * this.Reisebusco2 + this.kmu * this.verbrauchu * this.co2prokmu
  }

  wasser() {
    this.leit_h2o_co2 = this.leit_h2o_ver * this.co2prolleitung/this.Personen_im_Haushalt
    this.fla_h2o_co2 = this.fla_h2o_ver * this.co2prolflasche
    this.co2_h2o = this.leit_h2o_co2 + this.fla_h2o_co2
    console.log(this.co2_h2o)
  }

  internet() {
    this.internet_co2 = this.internet_gbit * this.g_pro_gbit
  }
  heiz_co2:number = 0;
  heizung() {
    this.heizungtest = this.heitzmenge * this.heizart
    if (this.heizart === "1830000") {
      this.mengeneinheitheizung = "m³ Festmeter"
    } else if (this.heizart === "2650") {
      this.mengeneinheitheizung = "l"
    } else if (this.heizart === "1630") {
      this.mengeneinheitheizung = "m³"
    } else if (this.heizart === "40") {
      this.mengeneinheitheizung = ""
    }
    this.heiz_co2 = this.heitzmenge * this.heizart/this.Personen_im_Haushalt
  }

  Mahlzeiten_mit_Fleisch;
  co2promahlmitfl = 2294;
  Mahlzeiten_ohne_Fleisch;
  co2promahlohnefl = 76.5;
  ernarungs_co2:number = 0;
  Ernahrung() {
    this.ernarungs_co2 = this.Mahlzeiten_mit_Fleisch * this.co2promahlmitfl + this.Mahlzeiten_ohne_Fleisch * this.co2promahlohnefl
  }
  co2_shuhe = 1692;
  co2_kleidung = 10587.5;
  Neue_Kleidungsstucke;
  Neue_Schuhe;
  kleidung_co2:number = 0;
  Kleidung() {
    this.kleidung_co2 = this.Neue_Kleidungsstucke * this.co2_kleidung + this.Neue_Schuhe * this.co2_shuhe

  }
  co2gesamt1;
  co2gesamt2;
  co2gesamt3;
  co2gesamt;

  co2gesamtkg;
  co2gesamtt;
  gesamt() {

    this.co2gesamt1 = this.auto_co2 + this.strom_co2 + this.co2_h2o 
this.co2gesamt2=this.urlaub_co2 + this.internet_co2 
this.co2gesamt3=this.heiz_co2 + this.ernarungs_co2 + this.kleidung_co2
    this.co2gesamt=this.co2gesamt1+    this.co2gesamt2 +    this.co2gesamt3 + 1104000
    console.log(this.co2gesamt)
    this.co2gesamtkg= Math.floor(this.co2gesamt/1000);
    console.log(this.co2gesamtkg)
    this.co2gesamtt= Math.floor(this.co2gesamtkg/1000);
    console.log(this.co2gesamtt)


  }



}