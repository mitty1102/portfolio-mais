import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  imports: [MatIconModule, CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

    contactForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
      this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  
  contact = [
      {
        icon:'email',
        title: 'Email',
        description: 'maisdalbah@gmail.com'
      },
      {
        icon:'person_add_alt',
        title: 'LinkedIn',
        description: 'www.linkedin.com/in/mais-dalbah'
      },
      {
        icon:'contact_phone',
        title: 'phone no',
        description: '+971 50 705 1885'
      },
    ]

    submitted = false;

  sendEmail() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    const form = this.contactForm.value;

    emailjs.send('service_mais_email', 'template_contact_mais', form, 'VE5aOvwyrVHocOEye')
      .then(() => console.log(' Message sent to your inbox'))
      .catch((error) => console.error(' Failed to send to you:', error));

    emailjs.send('service_mais_email', 'template_mais', form, 'VE5aOvwyrVHocOEye')
      .then(() => {
       this.snackBar.open(' Message sent successfully! Sender also received confirmation.', 'Close', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snackbar-success']
        });
        this.contactForm.reset();
        this.contactForm.markAsPristine();
        this.contactForm.markAsUntouched();
        this.submitted = false;
      })
      .catch((error) => {
        console.error('❌ Failed to send auto-reply:', error);
        alert('Something went wrong. Please try again later.');
      });
    }



}

