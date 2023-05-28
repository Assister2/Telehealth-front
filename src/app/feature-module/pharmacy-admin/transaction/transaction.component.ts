import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  transactionsList: any = [];
  errorMessage!: string;
  id: any;
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.getPharmacyTransactions();
    this.dtOptions = {
      searching: false,
      lengthChange: false,
      info: false,
      
    }
  }

  deleteModal(template: TemplateRef<any>, transaction: { id: any; }) {
    this.id = transaction.id;
  }

  deleteTrans() {
    this.transactionsList = this.transactionsList.filter((a: { id: any; }) => a.id !== this.id);
    // this.modalRef.hide();
  }

  decline() {
    // this.modalRef.hide();
  }
  

  getPharmacyTransactions() {
    this.commonService.getPharmacyTransactions()
      .subscribe(res => {
        this.transactionsList = res;
      },
        error => this.errorMessage = <any>error);
  }

}
