import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HeadComponentModule } from '../../../projects/head/src/lib/adapters/primary/ui/head.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  HeadComponentModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [HomePage] })
export class HomePageModule {
}
