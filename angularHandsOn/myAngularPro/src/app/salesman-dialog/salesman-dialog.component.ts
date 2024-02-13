import { Component ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-salesman-dialog',
  templateUrl: './salesman-dialog.component.html',
  styleUrls: ['./salesman-dialog.component.css']
})

export class SalesmanDialogComponent {
  clickedSalesmanName : any;
  clickedSalesmanArea : any;
  totalSalesAmount: any;
  totalCommission: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {console.log("injected"+ data.clickedSalesmanArea)}
}
