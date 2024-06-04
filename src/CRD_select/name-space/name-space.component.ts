import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-name-space',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './name-space.component.html',
  styleUrl: './name-space.component.css'
})
export class NameSpaceComponent {

 
}
