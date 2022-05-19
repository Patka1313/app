import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';

@NgModule({ imports: [CommonModule],
  	declarations: [HeadComponent],
  	providers: [],
  	exports: [HeadComponent] })
export class HeadComponentModule {
}
