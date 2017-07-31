import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Meta, Title } from '@angular/platform-browser'

import { Router } from '@angular/router';

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
  private oldTags: any[] = [];
  private contenido: string = '';
  private ready: boolean = false;
  private ulrBase: string = 'www.myPublicUrl.com';
  private mainTitle:string;

  constructor(private sanitizer: DomSanitizer, private wikiService: WikiService, private meta: Meta, private title: Title,private router:Router) {

    this.oldTags.push(this.meta.getTag('name="description"'));
    this.oldTags.push(this.meta.getTag('name="keywords"'));
    this.oldTags.push(this.title.getTitle());
  }

  ngOnInit() {
    this.mainTitle = this.bandData.name.replace(/_/g, ' ');

    this.title.setTitle(this.mainTitle);
    // open graph tags
    this.meta.addTags([
      { name: 'og:title', content: this.mainTitle },
      { name: 'og:image', content: this.bandData.imgUrl },
      { name: 'og:locale', content: 'es_ES' },
      { name: 'og:url', content: `${this.ulrBase}${this.router.url}` },
    ]);

    console.log(this.router.url);

    this.wikiService.getData(this.bandData.name).subscribe(result => {
      //rellena datos
      debugger;
      const subArticles = (JSON.stringify(result.parse.text)).split("<p>");
      let artIndex = subArticles.findIndex((item:string)=>{
        return item.includes(`<b>${this.mainTitle}</b>`);
      })
      let data = this.limpiar(subArticles[artIndex]).split(".");
      const limpia = data.slice(0, data.length - 1).join(".");
      let data2 = this.limpiar(subArticles[artIndex+1]).split(".");
      this.contenido = `${limpia}. ${data2.slice(0, data2.length - 1).join(".")}`;

      this.altImg = `${this.bandData.name} image`;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.bandData.videoId}?html5=1&amp;rel=0&amp;hl=es_ES&amp;version=3`)
      this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.bandData.imgUrl);

      this.meta.removeTag('name="description"');
      this.meta.removeTag('name="keywords"');

      this.meta.addTags([
        { name: 'og:description', content: limpia },
        { name: 'description', content: limpia },
        { name: 'keywords', content: `banda rock ${this.bandData.name.replace(/_/g, ' ')}` }
      ]);

      this.ready = true;

    },
      error => {
        console.error(error);
      });
  }
  ngOnDestroy(): void {
    //remove Opem graph tags
    const OgTag: any[] = ['name="og:title"','name="og:description"','name="og:image"','name="og:locale"','name="og:url"'];
    OgTag.map(tag=>{
      this.meta.removeTag(tag);
    });

    // update meta tags
    this.oldTags.map(tag => {
      (typeof tag !== 'string') ? this.meta.updateTag({ name: tag.name, content: tag.content }) : this.title.setTitle(tag);
    });

  }

  limpiar(str): string {
    var limpia = str.replace(/<\/?[^>]+(>|$)/g, '').replace(/\[.{1,2}\]/g, '');
    return limpia;
  }

}
