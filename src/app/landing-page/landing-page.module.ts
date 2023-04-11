import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
