import { Component } from '@angular/core';
// app.module.ts (or standalone component imports)
import { SwiperModule } from 'swiper/angular'; // ✅ import SwiperModule
@Component({
  selector: 'app-projects',
  imports: [SwiperModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
