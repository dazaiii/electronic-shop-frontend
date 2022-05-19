import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.scss'],
})
export class AdministrationPageComponent implements OnInit {
  visibleItems: {
    addCategory: boolean;
    modifyCategory: boolean;
    deleteCategory: boolean;
    addProduct: boolean;
    modifyProduct: boolean;
    deleteProduct: boolean;
  };

  constructor() {}

  ngOnInit(): void {
    this.visibleItems = {
      addCategory: false,
      modifyCategory: false,
      deleteCategory: false,
      addProduct: false,
      modifyProduct: false,
      deleteProduct: false,
    };
  }

  panelIsVisible(): boolean {
    return Object.values(this.visibleItems).every((x) => x === false);
  }
}
