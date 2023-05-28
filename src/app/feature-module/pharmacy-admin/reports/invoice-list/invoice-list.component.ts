import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  transactions: any = [];
  errorMessage: string | undefined;
  id: any;
  dtOptions: DataTables.Settings = {};

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.getPharmacyReports();
    this.dtOptions = {
      searching: false,
      lengthChange: false,
      info: false,
    }
  }

  getPharmacyReports() {
    this.commonService.getPharmacyReports()
      .subscribe(res => {
        this.transactions = res;
      },
        error => this.errorMessage = <any>error);
  }

  editModal(template: TemplateRef<any>, transaction: { id: any; }) {
    this.id = transaction.id;
  }

  deleteModal(template: TemplateRef<any>, transaction: { id: any; }) {
    this.id = transaction.id;
  }

  deleteReport() {
    this.transactions = this.transactions.filter((a: { id: any; }) => a.id !== this.id);
    // this.modalRef.hide();
  }

  update() {
    let params = {
      id: this.id
    };
    // this.modalRef.hide();
  }

}
