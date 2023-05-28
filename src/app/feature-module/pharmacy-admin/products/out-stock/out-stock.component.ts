import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-out-stock',
  templateUrl: './out-stock.component.html',
  styleUrls: ['./out-stock.component.css']
})
export class OutStockComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  products = [];
  errorMessage: string | undefined;
  name: any;
  id: any;
  key: any;
  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.dtOptions = {
      searching: false,
      lengthChange: false,
      info: false,
      
    }
  }

  getProducts() {
    // this.commonService.getProducts().subscribe(
    //   (data: any[]) => {
    //     this.products = data.filter((a) => a.out_stock === 1);
    //   },
    //   (error) => (this.errorMessage = <any>error)
    // );
  }

  
  save() {
    // this.modalRef.hide();
  }

  deleteProduct() {
    // this.products = this.products.filter((a) => a.id !== this.id);
    // this.commonService.deleteProduct(this.id).subscribe((data: any[]) => {
    //   // this.modalRef.hide();
    //   this.getProducts();
    // });
  }

  decline() {
    // this.modalRef.hide();
  }

}
