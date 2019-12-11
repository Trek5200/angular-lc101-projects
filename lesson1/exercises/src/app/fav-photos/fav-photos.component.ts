import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://angular.io/assets/images/logos/angular/angular.svg';
  image3 = 'https://media1.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif?cid=790b7611a67badc5612529120a39d6e3cbc1b2880e194066&rid=giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}