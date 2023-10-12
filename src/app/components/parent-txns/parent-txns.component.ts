import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api/api.service';
import { IParents } from '../../models/response.model';

@Component({
  selector: 'app-parent-txns',
  templateUrl: './parent-txns.component.html',
  styleUrls: ['./parent-txns.component.scss']
})
export class ParentTxnsComponent implements OnInit {
  transactions: IParents[] = [];
  totalTransactions: number = 0;

  currentPage: number = 1;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getParentTxns(2, this.currentPage);
  }

  getParentTxns(limit: number, page: number): void {
    this.apiService.getAllParents(limit, page).subscribe(response => {
      if (response.status) {
        this.transactions = response.data.list;
        this.totalTransactions = response.data.size;
      } else {
        alert(response.message);
      }
    }, err => {
      alert('System error, please try again later');
    });
  }

  changePage(): void {
    this.getParentTxns(2, this.currentPage);
  }

}
