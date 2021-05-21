export class Todo {
    public id: number;
    public title : string;
    public status : boolean;
    constructor(id: number =0, title: string ='' , status: boolean = false){
        this.id = id;
        this.title = title;
        this.status = status;
    }
}   