import { Component, OnInit } from '@angular/core';
import { BandData } from '../bandData'

@Component({
  selector: 'app-queen',
  templateUrl: './queen.component.html',
  styleUrls: ['./queen.component.css']
})
export class QueenComponent implements OnInit {

  private queenData:BandData;

  constructor() { 
    this.queenData = new BandData('Queen','_Uu12zY01ts','http://i4.mirror.co.uk/incoming/article6736694.ece/ALTERNATES/s615b/Queen-rock-band-members-Freddie-Mercury-Brian-May-Roger-Taylor-Brian-Deacon.jpg');
  }

  ngOnInit() {
  }

}
