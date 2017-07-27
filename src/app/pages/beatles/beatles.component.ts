import { Component, OnInit } from '@angular/core';
import { BandData } from '../bandData'
@Component({
  selector: 'app-beatles',
  templateUrl: './beatles.component.html',
  styleUrls: ['./beatles.component.css']
})
export class BeatlesComponent implements OnInit {
private beatlesData:BandData;
  constructor() { 
    this.beatlesData = new BandData('The_Beatles','2uneYz201p0','http://www.1zoom.me/big2/756/260687-Sepik.jpg');
  }

  ngOnInit() {
  }

}
