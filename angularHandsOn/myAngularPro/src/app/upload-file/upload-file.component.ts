import { Component } from '@angular/core';
import { UploadServiceService } from '../upload-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
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
       alert("Files Uploaded Successfully")
     })
   } else {
     alert("Please select a file first")
   }
 }
}
