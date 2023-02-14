import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiderLookupComponent } from './rider-lookup/rider-lookup.component';

const routes: Routes = [
  {path: "", component: RiderLookupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
