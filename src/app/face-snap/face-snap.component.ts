import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createData!: Date;
  snaps!: number;
  imageUrl!: string;


  ngOnInit(){
    this.title = "Archibald";
    this.description = "The original face snap of Archibald the Great, taken by his loyal butler.";
    this.createData = new Date();
    this.snaps = 6;
    this.imageUrl ="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
  }
}
