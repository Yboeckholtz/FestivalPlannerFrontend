export class Festival {
    public name: string;
    public description: string;
    // public price: Int16Array;
    public imagePath: string;
     
    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}