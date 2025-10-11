import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// app.module.ts (or standalone component imports)
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // 👈 import this
// Register the Swiper modules
Swiper.use([EffectCoverflow, Pagination, Autoplay, Navigation]);
@Component({
  selector: 'app-projects',
  imports: [CommonModule,NgbModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]  // ✅ Add this line
})
export class ProjectsComponent {

  
  constructor(private modalService: NgbModal) {}

  images = [
    {
      src:'assets/images/landingPage.png',
      name: 'Landing Page',
      description: 'Built a modern landing page for a strategy platform with Angular and CSS, featuring responsive design, reusable components, and a visually engaging layout.'
    },
    {
      src: 'assets/images/featuresPage.png',
      name: 'Features Page',
      description: 'Developed a dynamic Features page for a strategy platform using Angular and CSS, showcasing key functionalities such as collaboration tools, personalized dashboards, task management, and ownership transfers. Implemented interactive components, modular design, and intuitive layouts to clearly communicate platform capabilities.'
    },
    {
      src: 'assets/images/FaqArabic.png',
      name: 'FAQs Page',
      description: 'Developed a responsive FAQs page for a strategy platform using Angular and CSS, featuring an interactive accordion layout for easy navigation and clear categorization of questions. Implemented full admin capabilities, allowing administrators to add, edit, or delete FAQs, ensuring content is always up-to-date and manageable.'
    },
    {
      src: 'assets/images/homepageEnglish.png',
      name: 'HomePage',
      description: 'Developed a Home page using Angular and CSS, providing a comprehensive summary of strategy information. Displayed overall strategy performance, execution progress, and progress for each perspective, alongside interactive pie and bar charts to visualize the status of all strategy elements. Designed the layout to give users quick insights and actionable overviews at a glance.'
    },
    {
      src: 'assets/images/strategyTree2.png',
      name: 'Strategy Tree',
      description: 'Developed a Strategy Tree page using Angular and GoJS, visualizing the platform’s strategy hierarchy in an interactive tree structure. Implemented a dimensions filter to manage Initiatives, KPIs, and Actions across different dimensions, enabling users to explore complex strategy relationships intuitively and efficiently.'
    },
    //'assets/images/baselineReport.png',
    {
      src: 'assets/images/InitiativePageArabic.png',
      name: 'Initiative Page in Arabic',
      description: 'Developed an Initiative Review page using Angular and CSS, displaying comprehensive details of each initiative. Implemented a tabbed interface to showcase cascaded initiatives, child KPIs, and child Actions, allowing users to navigate and manage strategy components efficiently within a single, organized view.'
    },
    {
      src: 'assets/images/initiativePageEnglish.png',
      name: 'Initiative Page in English',
      description: 'Developed an Initiative Review page using Angular and CSS, displaying comprehensive details of each initiative. Implemented a tabbed interface to showcase cascaded initiatives, child KPIs, and child Actions, allowing users to navigate and manage strategy components efficiently within a single, organized view.'
    },
    {
      src: 'assets/images/kpiPageEnglish.png',
      name: 'KPI Page',
      description: 'Developed a KPI Review page using Angular and CSS, presenting detailed information for each KPI, including targets and performance metrics. Implemented inline editing for KPI actuals, enabling users to update progress directly and maintain accurate, real-time tracking of strategic objectives.'
    },
    //'assets/images/initiativeDialog.png',
    //'assets/images/kpiPageArabic.png',
    {
      src: 'assets/images/settingsPage.png',
      name: 'Settings Page',
      description: 'Developed an Admin Settings page using Angular and CSS, featuring a multi-tab interface for managing all aspects of the platform. Tabs include Dimensions, Categories, Profession, Access Matrix for role-based permissions, Strategy Cycle, and Advanced Settings. Enabled administrators to add, edit, or delete items, configure user authorizations, and manage platform configurations efficiently in one centralized location.'
    },
    {
      src: 'assets/images/formPageArabic.png',
      name: 'Form Page in Arabic',
      description: 'Developed a Strategy Element Form page using Angular, Angular Material, and FormControl, enabling users to create and manage strategy elements efficiently. Implemented reactive forms with validation, ensuring accurate data entry and a smooth, user-friendly experience for adding or editing initiatives, KPIs, and Actions.'
    },
        {
      src: 'assets/images/formPageEnglish.png',
      name: 'Form Page in English',
      description: 'Developed a Strategy Element Form page using Angular, Angular Material, and FormControl, enabling users to create and manage strategy elements efficiently. Implemented reactive forms with validation, ensuring accurate data entry and a smooth, user-friendly experience for adding or editing initiatives, KPIs, and Actions.'
    },
    {
      src: 'assets/images/WorkflowRequestsArabic.png',
      name: 'Workflow Requests Page',
      description: 'Developed a Workflow page using Angular and CSS, featuring a three-tab interface to manage strategy approvals efficiently. Tabs include Pending for Approval, Past Workflows from Others, and My Workflow Approvals Sent to Others, enabling users to track, review, and manage workflow actions seamlessly within the platform.'
    },
    //'assets/images/pwh.jpg',
    //'assets/images/pwhchoose.jpeg',
    //'assets/images/pwhform.jpeg',
    //'assets/images/pwhInfo.jpeg',
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

selectedImage: any;
  openModal(content: any, img: any) {
    this.selectedImage = img;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
}
