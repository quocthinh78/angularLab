export class Todo {
    public id: number;
    public name : string;
    public des : string;
    constructor(id: number =0, name: string ='' , des: string = ''){
        this.id = id;
        this.name = name;
        this.des = des;
    }
}   