import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// app.module.ts (or standalone component imports)
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { CommonModule } from '@angular/common';
// Register the Swiper modules
Swiper.use([EffectCoverflow, Pagination, Autoplay]);
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]  // ✅ Add this line
})
export class ProjectsComponent {
  images = [
    'assets/images/baselineReport.png',
    'assets/images/FaqArabic.png',
    'assets/images/FeaturesPage.png',
    'assets/images/initiativeDialog.png',
    'assets/images/InitiativePageArabic.png',
    'assets/images/initiativePageEnglish.png',
    'assets/images/kpiPageArabic.png',
    'assets/images/kpiPageEnglish.png',
    'assets/images/landingPage.png',
    'assets/images/professionTab.png',
    'assets/images/pwh.jpg',
    'assets/images/pwhchoose.jpeg',
    'assets/images/pwhform.jpeg',
    'assets/images/pwhInfo.jpeg',
    'assets/images/formPageArabic.png',
    'assets/images/formPageEnglish.png',
    'assets/images/homepageEnglish.png',
    'assets/images/WorkflowRequestsArabic.png',
  ];

   config: SwiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: { clickable: true }
  };

  swiper = new Swiper('.mySwiper', {
  effect: 'coverflow', // 3D effect
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto', // allows multiple slides to be visible
  coverflowEffect: {
    rotate: 50,       // angle of rotation
    stretch: 0,       // space between slides
    depth: 100,       // distance of 3D depth
    modifier: 1,      // effect multiplier
    slideShadows: true, // adds shadows for depth
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
}
