import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentTxnsComponent } from './components/parent-txns/parent-txns.component';
import { ChildTxnsComponent } from './components/child-txns/child-txns.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'transactions',
  pathMatch: 'full'
}, {
  path: 'transactions',
  component: ParentTxnsComponent
}, {
  path: 'transactions/:id',
  component: ChildTxnsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
