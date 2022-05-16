import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [{ 
        path: 'homepage', 
        loadChildren: () => HomePageModule,
        pathMatch: 'full'
      },
];

@NgModule({
  imports: [HomePageModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
