import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public userSelectedImage;

  public setImage(item) {
    this.userSelectedImage = item.descTitle;
  }
}
