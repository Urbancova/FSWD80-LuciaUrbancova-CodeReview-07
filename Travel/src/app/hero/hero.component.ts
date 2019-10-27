import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private  heroText: string;
private heroBtnText : string;
private heroBtnUrl:   string;

  constructor() { 
  	this.heroHeading="Do you like challenges and want to see places no one has seen before?";
  	this.heroText="Bear Grylls recommended TravEx provides 100+ destinations, with experienced guides exploring the untouched nature like never before!";
  	this.heroBtnText="Learn more";
  	this.heroBtnUrl="https://beargryllssurvivalacademy.com/";
  }

  ngOnInit() {
  }

}
