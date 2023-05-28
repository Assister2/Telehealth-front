import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  purchase_list = [];
  errorMessage: string | undefined;
  name: any;
  id: any;
  key: any;
  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getPurchase();
  }

  getPurchase() {
    // this.commonService.getPurchase().subscribe(
    //   (data: any[]) => {
    //     this.purchase_list = data;
    //   },
    //   (error) => (this.errorMessage = <any>error)
    // );
  }

  deleteModal(template: TemplateRef<any>, purchase: { id: any; }) {
    this.id = purchase.id;
  }

  save() {
    // this.modalRef.hide();
  }

  deletePurchase() {
    // this.purchase_list = this.purchase_list.filter((a) => a.id !== this.id);
    // this.commonService.deletePurchase(this.id).subscribe((data: any[]) => {
    //   // this.modalRef.hide();
    //   this.getPurchase();
    // });
  }

  decline() {
    // this.modalRef.hide();
  }

}
