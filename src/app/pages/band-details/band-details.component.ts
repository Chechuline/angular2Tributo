import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

import { BandData } from '../bandData'
import { WikiService } from '../../wiki.service'

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css']
})
export class BandDetailsComponent implements OnInit {

  @Input() bandData:BandData;
  private videoUrl: SafeResourceUrl;
  private imgUrl:SafeResourceUrl;
  private altImg:string;
 
  constructor(private sanitizer: DomSanitizer,private wikiService:WikiService) {
    //temp band info
    this.bandData = new BandData('queen','','');
    this.bandData.videoId = '_Uu12zY01ts';
    this.bandData.imgUrl = 'http://i4.mirror.co.uk/incoming/article6736694.ece/ALTERNATES/s615b/Queen-rock-band-members-Freddie-Mercury-Brian-May-Roger-Taylor-Brian-Deacon.jpg'
    
  }

  ngOnInit() {
    this.altImg = `${this.bandData.name} image`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.bandData.videoId}?html5=1&amp;rel=0&amp;hl=es_ES&amp;version=3`)
    this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.bandData.imgUrl);

    this.wikiService.getData(this.bandData.name).subscribe(result => {
      const data = JSON.stringify(result.parse.text);

      console.info(data);
    }, 
    error=>{
      console.info(error);
    });
  }

}
