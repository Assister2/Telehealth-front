import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  categories = [];
  errorMessage: string | undefined;
  name: string = 'Cardiology';
  id: any;
  key: any;
  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.geCategories();
    this.dtOptions = {
      searching: false,
      lengthChange: false,
      info: false,
      
    }
  }

  geCategories() {
    // this.commonService.getCategories().subscribe(
    //   (data: any[]) => {
    //     this.categories = data;
        
    //   },
    //   (error) => (this.errorMessage = <any>error)
    // );
  }


  editModal(template: TemplateRef<any>, category:any) {
    this.id = category.id;
    this.name = category.name;
  }

  deleteModal(template: TemplateRef<any>, category:any) {
    this.id = category.id;
  }

  save() {
    // this.modalRef.hide();
  }

  update() {
    let params = {
      id: this.id,
      key: this.key,
      speciality: this.name,
    };
    // this.modalRef.hide();
  }

  deleteCategory() {
    // this.categories = this.categories.filter((a) => a.id !== this.id);
    // this.commonService.deleteCategory(this.id).subscribe((data: any[]) => {
    //   // this.modalRef.hide();
    //   this.geCategories();
    // });
  }

  decline() {
    // this.modalRef.hide();
  }
}
