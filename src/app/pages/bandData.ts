export class BandData {
    name: string;
    videoId: string;
    imgUrl: string;

    constructor(name:string,videoId:string,imgUrl:string){
        this.imgUrl=imgUrl;
        this.videoId = videoId;
        this.name = name;
    }

}