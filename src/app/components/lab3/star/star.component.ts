import { Component, OnInit ,Input, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() { 
    this.raiting = 0;
    this.startWith = this.raiting *90/5;
  }
  @Input("raiting") raiting : number = 0;
  @Output() raitingClicked : EventEmitter<string> = new EventEmitter<string>();
  public startWith : number =0;
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    this.startWith = this.raiting *90/5;
  }
  onclick(){
    this.raitingClicked.emit(`danh gia cua san pham la ${this.raiting} sao`)
  }
}
