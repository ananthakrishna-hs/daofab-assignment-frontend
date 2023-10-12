import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentTxnsComponent } from './components/parent-txns/parent-txns.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'parent-transactions',
  pathMatch: 'full'
}, {
  path: 'parent-transactions',
  component: ParentTxnsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
