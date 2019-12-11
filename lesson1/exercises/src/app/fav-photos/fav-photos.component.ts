import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://angular.io/assets/images/logos/angular/angular.svg';
  image3 = 'https://blog.logrocket.com/wp-content/uploads/2019/07/logo-frontend-monitoring.png';

  constructor() { }

  ngOnInit() {
  }

}