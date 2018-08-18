import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

@Input() PostListItem : string ;
@Input() PostListContent: string ;
PostListlove = 0 ;


constructor() { 

 }
 lastUpdate = new Date();

  ngOnInit() {
  }

  getColor() {
    if(this.PostListlove >= 0 ) {
      return 'green';
    } else if(this.PostListlove < 0 ) {
      return 'red';
    }
}
  getstatus() {
   var a=true;
    if(this.PostListlove >= 0) {
      return a = true;
    } 
    
    else if(this.PostListlove <= 0) {
      return a = false;
    }
}
onAjouter(){
this.PostListlove = this.PostListlove + 1;
}
onDiminuer(){
this.PostListlove = this.PostListlove - 1;
}
}
  