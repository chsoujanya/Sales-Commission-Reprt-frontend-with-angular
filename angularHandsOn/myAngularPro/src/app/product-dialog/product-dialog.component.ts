import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  clickedProductName: any;
  clickedSalesmanArea: any;
  totalSalesAmount: any;
  totalQuantity: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {console.log("injected"+ data.clickedProductName )}
}
