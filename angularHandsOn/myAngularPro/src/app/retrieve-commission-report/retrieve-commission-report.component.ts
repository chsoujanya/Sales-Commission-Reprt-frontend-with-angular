import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from '../upload-service.service';
import { formatDate } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { SalesmanDialogComponent } from '../salesman-dialog/salesman-dialog.component';
import {MatSort, Sort} from '@angular/material/sort';
import {AfterViewInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-retrieve-commission-report',
  templateUrl: './retrieve-commission-report.component.html',
  styleUrls: ['./retrieve-commission-report.component.css']
})

export class RetrieveCommissionReportComponent implements OnInit{
  commissions: any[] = [];
  displayedColumns: string[] = [
    'commissionId',
    'productName',
    'salesmanName',
    'quantity',
    'salesAmount',
    'salesmanArea',
    'salesmanCommission',
    'createdDate'
  ];
  
  dataSource = new MatTableDataSource(this.commissions);
  constructor(private uploadService: UploadServiceService, private dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      this.commissions = this.dataSource._orderData(this.commissions);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  onDateChange(date: Date): void {

    console.log(date);
    const formattedDate = formatDate(date, 'dd/MM/yyyy', 'en-US');
    console.log("formatted date"+formattedDate);
    this.uploadService.getCommissionsByDate(formattedDate).subscribe((commissions) => {
      console.log(commissions);
      this.commissions = commissions;
      this.dataSource= new MatTableDataSource();
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }
  openSalesManPopUp(clickedSalesmanName: string, clickedSalesmanArea: string): void{
    let data : any = {
      clickedSalesmanName: clickedSalesmanName,
      clickedSalesmanArea: clickedSalesmanArea,
      totalSalesAmount: 0,
      totalCommission: 0,
    };
    let totalSalesAmount = 0.0;
    let totalCommission = 0.0;
    this.commissions.forEach(eachCommission => {
      if(eachCommission.salesmanName == clickedSalesmanName && eachCommission.salesmanArea == clickedSalesmanArea){
        totalSalesAmount+=parseFloat(eachCommission.salesAmount);
        totalCommission+=parseFloat(eachCommission.salesmanCommission);
      }

    });
    data.totalSalesAmount = totalSalesAmount;
    data.totalCommission = totalCommission;
        console.log(data.clickedSalesmanName+" "+ data.clickedSalesmanArea + " "+ data.totalSalesAmount + " "+totalCommission );
    this.dialog.open(SalesmanDialogComponent, {
      data: data});
  }


  openProductPopUp(clickedProductName: string, clickedSalesmanArea: string): void{
    let data : any = {
      clickedProductName: clickedProductName,
      clickedSalesmanArea: clickedSalesmanArea,
      totalSalesAmount: 0,
      totalQuantity: 0,
    };
    let totalSalesAmount = 0.0;
    let totalQuantity = 0.0;
    this.commissions.forEach(eachCommission => {
      if(eachCommission.productName == clickedProductName && eachCommission.salesmanArea == clickedSalesmanArea){
        totalSalesAmount+=parseFloat(eachCommission.salesAmount);
        totalQuantity+=parseFloat(eachCommission.quantity);
      }

    });
    data.totalSalesAmount = totalSalesAmount;
    data.totalQuantity = totalQuantity;
        console.log(data.clickedSalesmanName+" "+ data.clickedSalesmanArea + " "+ data.totalSalesAmount + " "+totalQuantity );
    this.dialog.open(ProductDialogComponent, {
      data: data});
  }

}


