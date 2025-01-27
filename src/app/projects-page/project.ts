export class Project {
    title: string;
    shortdescription:string;
    description: string;
    keypoints:string;
    mainImagePath: string; 
    carouselImages: string[]
    platform:string;
    urlToPlay:string;
    engine:string;
    languages:string;
    tools:string;
    numPlayers: string;

    // constructor() {
    //     this.title = '';
    //     this.description = '';
    //     this.mainImagePath = '';
    // }

    constructor(title:string, platform:string, numPlayers:string, shortdescription:string, keypoints:string, description:string, urlToPlay:string, 
        engine:string, languages:string, tools:string, mainImagePath:string, carouselimages:string[]) {
        this.title = title;
        this.shortdescription = shortdescription;
        this.description = description;
        this.mainImagePath = mainImagePath;
        this.carouselImages = carouselimages;
        this.platform=platform;
        this.urlToPlay=urlToPlay;
        this.engine=engine;
        this.languages=languages;
        this.tools=tools;
        this.numPlayers = numPlayers;
        this.keypoints = keypoints;
    }
}