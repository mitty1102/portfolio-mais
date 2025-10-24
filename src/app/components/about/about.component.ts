import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatIconModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
info = [
    {
      icon:'insights',
      title: 'Clean Code',
      description: 'scalable and maintainable structure'
    },
    {
      icon:'lightbulbs',
      title: 'User Focus',
      description: 'thoughtful UI & UX decisions'
    },
    {
      icon:'handshake',
      title: 'Collaboration',
      description: 'bridging design and engineering'
    },
  ]
}
