import { Component, OnInit } from '@angular/core';
import { IChildren, IParents } from '../../models/response.model';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-txns',
  templateUrl: './child-txns.component.html',
  styleUrls: ['./child-txns.component.scss']
})
export class ChildTxnsComponent implements OnInit {
  parentTransaction: IParents = {} as IParents;
  list: IChildren[] = [];
  totalAmount: number = 0;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && !isNaN(Number(id))) {
      this.getChildTxns(Number(id));
    } else {
      alert('Invalid parent id');
    }
  }

  getChildTxns(parentId: number): void {
    this.apiService.getChildren(parentId).subscribe(response => {
      if (response.status) {
        this.parentTransaction = response.data.parent;
        this.list = response.data.children;

        for (const txn of this.list) {
          this.totalAmount+= txn.paidAmount;
        }
      } else {
        alert(response.message);
      }
    }, err => {
      alert('System error, please try again later');
    });
  }
}
