import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CMSEditorComponent } from './cmseditor/cmseditor.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'cmseditor', component: CMSEditorComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
