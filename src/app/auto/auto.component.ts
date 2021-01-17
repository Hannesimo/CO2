import { Component, OnInit } from '@angular/core';
import { kMaxLength } from 'buffer';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
 
  auto_co2=0;
  km 
  verbrauch
  co2prokm=0;
  auto() {
    


    this.auto_co2 =this.km*this.co2prokm*this.verbrauch 
    console.log(this.auto_co2)
    
  }
  ngOnInit(): void{
}
}
