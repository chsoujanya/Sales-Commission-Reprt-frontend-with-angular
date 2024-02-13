import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { RetrieveCommissionReportComponent } from './retrieve-commission-report/retrieve-commission-report.component';
import { SalesmanDialogComponent } from './salesman-dialog/salesman-dialog.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatSortModule } from '@angular/material/sort';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    RetrieveCommissionReportComponent,
    SalesmanDialogComponent,
    ProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // required for input file change detection
   ReactiveFormsModule,
   HttpClientModule,
   BrowserAnimationsModule, // this is required for the actual http request
   BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDialogModule,
    MatSortModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
