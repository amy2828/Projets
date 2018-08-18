import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastUpdate = new Date();
   
PostLists = [
    {
      title: 'Mon premier post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      loveIts:0
    },
    {
      title: 'Mon deuxieme post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      loveIts:0
    },
    {
      title: 'Mon troisieme post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      loveIts:0
    }
  ];

   constructor() { 
};
    

}
