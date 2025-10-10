import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
