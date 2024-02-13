import { HttpResponse } from '@angular/common/http';
import { UploadServiceService } from './upload-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:[UploadServiceService]
})
export class AppComponent {
  title = 'myAngularPro';
  myFiles:File [] = [];
  file1: File | null = null;
  file2: File | null = null;
  selectedFiles: FileList| null = null;
 
 constructor(
   private uploadService: UploadServiceService
 ){
 
 }

 onFilechange(event: any) {
   console.log(event.target.files[0])
   this.file1 = event.target.files[0]
 }

 onFilechange2(event: any) {
   console.log(event.target.files[0])
   this.file2 = event.target.files[0]
 }
 
 upload() {
   if (this.file1 && this.file2) {
     this.uploadService.uploadfile(this.file1, this.file2).subscribe(resp => {
       alert("Uploaded")
     })
   } else {
     alert("Please select a file first")
   }
 }
}
