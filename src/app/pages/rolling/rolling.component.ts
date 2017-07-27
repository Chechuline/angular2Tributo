import { Component, OnInit } from '@angular/core';
import { BandData } from '../bandData'

@Component({
  selector: 'app-rolling',
  templateUrl: './rolling.component.html',
  styleUrls: ['./rolling.component.css']
})
export class RollingComponent implements OnInit {

  private rollingData:BandData;
  constructor() {
    this.rollingData = new BandData('The_Rolling_Stones','nrIPxlFzDi0','http://images4.fanpop.com/image/photos/17700000/Rolling-Stones-Wallpaper-classic-rock-17732124-1024-768.jpg');
   }

  ngOnInit() {
  }

}
