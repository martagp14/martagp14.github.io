export class Project {
    title: string;
    description: string;
    mainImagePath: string; 

    // constructor() {
    //     this.title = '';
    //     this.description = '';
    //     this.mainImagePath = '';
    // }

    constructor(title:string, description:string, mainImagePath:string) {
        this.title = title;
        this.description = description;
        this.mainImagePath = mainImagePath;
    }
}