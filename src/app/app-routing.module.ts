import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { HomeComponent } from './home/home.component';
import { AdoptComponent } from './adopt/adopt.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'adopt', component: AdoptComponent}
=======
import { AdoptComponent } from './adopt/adopt.component';

const routes: Routes = [
  {path: 'adopt', component: AdoptComponent},
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
