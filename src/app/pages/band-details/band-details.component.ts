import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css']
})
export class BandDetailsComponent implements OnInit {

  @Input() videoId;
  videoUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.videoId = '_Uu12zY01ts';
  }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.videoId}?html5=1&amp;rel=0&amp;hl=es_ES&amp;version=3`)
  }

}
