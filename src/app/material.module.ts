// material.module.ts
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';;
@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
  ],
  imports: []
})
export class MaterialModule {}
