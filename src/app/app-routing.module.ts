import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpGuideComponent } from './help-guide/help-guide.component';
import { RiderLookupComponent } from './rider-lookup/rider-lookup.component';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';

const routes: Routes = [
  {path: "help", component: HelpGuideComponent},
  {path: "riderProfile", component: RiderProfileComponent},
  {path: "", component: RiderLookupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
