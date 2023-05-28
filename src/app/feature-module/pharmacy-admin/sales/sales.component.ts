import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  sales = [];
  errorMessage!: string;
  id: any;
  key: any;
  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    // this.getSales();
    this.dtOptions = {
      searching: false,
      lengthChange: false,
      info: false,
      
    }
  }

  // getSales() {
  //   this.commonService.getSales().subscribe(
  //     (data: any[]) => {
  //       this.sales = data;
  //     },
  //     (error) => (this.errorMessage = <any>error)
  //   );
  // }

  // deleteModal(template: TemplateRef<any>, sales) {
  //   this.id = sales.id;
  // }

  // editModal(template: TemplateRef<any>, sale) {
  //   this.id = sale.id;
  // }

  save() {
    // this.modalRef.hide();
  }

  update() {
    let params = {
      id: this.id,
      key: this.key,
    };
    // this.modalRef.hide();
  }

  // deleteSales() {
  //   this.sales = this.sales.filter((a) => a.id !== this.id);
  //   this.commonService.deleteSale(this.id).subscribe((data: any[]) => {
  //     // this.modalRef.hide();
  //     this.getSales();
  //   });
  // }

  decline() {
    // this.modalRef.hide();
  }

}
