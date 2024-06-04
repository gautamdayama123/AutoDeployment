import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import Namespace from '../models/Namespace';

@Component({
  selector: 'app-name-space',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './name-space.component.html',
  styleUrl: './name-space.component.css'
})
export class NameSpaceComponent {

  namespace:Namespace=new Namespace({labels:{}, name:''});

    addLabel(){
      this.namespace.addLabel
    }

    // removeLabel(key:String){
    //   delete this.namespace.metadata.labels[key];
    // }

    onSubmit(){
      console.log('NameSpace',this.namespace)
    }
}
