import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Meta, Title } from '@angular/platform-browser'

import { BandData } from '../bandData'
import { WikiService } from '../../wiki.service'

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css']
})
export class BandDetailsComponent implements OnInit, OnDestroy {


  @Input() bandData: BandData;

  private videoUrl: SafeResourceUrl;
  private imgUrl: SafeResourceUrl;
  private altImg: string;
  private oldTags: any;
  private contenido: string = '';
  private ready:boolean = false;

  constructor(private sanitizer: DomSanitizer, private wikiService: WikiService, private meta: Meta, private title: Title) {

    this.oldTags = [];
    this.oldTags.push(this.meta.getTag('name="description"'));
    this.oldTags.push(this.meta.getTag('name="keywords"'));
    this.oldTags.push(this.title.getTitle());
  }

  ngOnInit() {

    this.title.setTitle(this.bandData.name.replace(/_/g, ' '));

    this.wikiService.getData(this.bandData.name).subscribe(result => {
      //rellenar datos
      let data = this.limpiar(JSON.stringify(result.parse.text).split("<p>")[1]).split(".");
      const limpia = data.slice(0, data.length - 1).join(".");
      let data2 = this.limpiar(JSON.stringify(result.parse.text).split("<p>")[2]).split(".");
      this.contenido = data2.slice(0, data2.length - 1).join(".");

      this.altImg = `${this.bandData.name} image`;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.bandData.videoId}?html5=1&amp;rel=0&amp;hl=es_ES&amp;version=3`)
      this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.bandData.imgUrl);

      //console.log(data2);

      this.meta.removeTag('name="description"');
      this.meta.removeTag('name="keywords"');

      this.meta.addTags([{ name: 'description', content: limpia }, { name: 'keywords', content: `banda rock ${this.bandData.name.replace(/_/g, ' ')}` }]);

      this.ready = true;

    },
      error => {
        console.error(error);
      });
  }
  ngOnDestroy(): void {
    this.oldTags.map(tag => {
      (typeof tag !== 'string') ? this.meta.addTag({ name: tag.name, content: tag.content }) : this.title.setTitle(tag);
      debugger;
    });

  }

  limpiar(str):string{
    var limpia = str.replace(/<\/?[^>]+(>|$)/g, '').replace(/\[.{1,2}\]/g,'');
    return limpia;
  }

}
