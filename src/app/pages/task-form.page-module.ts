import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskFormPage } from './task-form.page';
import { HeadComponentModule } from '../../../projects/head/src/lib/adapters/primary/ui/head.component-module';
import { DateLineComponentModule } from '../../../projects/date/src/lib/adapters/primary/ui/date-line.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TaskFormPage,
        }
      ]),
  HeadComponentModule,
  DateLineComponentModule
],
  	declarations: [TaskFormPage],
  	providers: [],
  	exports: [] })
export class TaskFormPageModule {
}
