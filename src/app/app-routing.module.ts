import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { TaskFormPageModule } from './pages/task-form.page-module';

const routes: Routes = [{ 
        path: 'homepage', 
        loadChildren: () => HomePageModule,
        pathMatch: 'full'
      },
  { 
        path: 'task-form', 
        loadChildren: () => TaskFormPageModule
      }
];

@NgModule({
  imports: [HomePageModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
