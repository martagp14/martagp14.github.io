export class Project {
    title: string;
    shortdescription:string;
    description: string;
    mainImagePath: string; 

    // constructor() {
    //     this.title = '';
    //     this.description = '';
    //     this.mainImagePath = '';
    // }

    constructor(title:string, shortdescription:string, description:string, mainImagePath:string) {
        this.title = title;
        this.shortdescription = shortdescription;
        this.description = description;
        this.mainImagePath = mainImagePath;
    }
}