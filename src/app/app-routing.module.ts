

import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoComponent } from './home/curriculo/curriculo.component';
import { HomepageComponent } from './home/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'curriculo', component: CurriculoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
