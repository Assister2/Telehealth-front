import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  orders = [];
  errorMessage: string | undefined;
  name: any;
  id: any;
  key: any;
  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getOrders();
    this.dtOptions = {
      searching: false,
      lengthChange: false,
      info: false,
      
    }
  }

  getOrders() {
    // this.commonService.getOrders().subscribe(
    //   (data: any[]) => {
    //     this.orders = data;
    //   },
    //   (error) => (this.errorMessage = <any>error)
    // );
  }


  deleteModal(template: TemplateRef<any>, order: { id: any; }) {
    this.id = order.id;
  }

  save() {
    // this.modalRef.hide();
  }

  deleteOrder() {
    // this.orders = this.orders.filter((a) => a.id !== this.id);
    // this.commonService.deleteOrder(this.id).subscribe((data: any[]) => {
    //   // this.modalRef.hide();
    //   this.getOrders();
    // });
  }

  decline() {
    // this.modalRef.hide();
  }
}
