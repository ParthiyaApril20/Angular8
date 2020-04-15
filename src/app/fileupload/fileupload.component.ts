import { Component, OnInit, Input } from '@angular/core';
import { FileSelectModule } from '@progress/kendo-angular-upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UploaderService} from '../services/uploader.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  fileUploadForm: FormGroup;
  responseData: any;
  selectedFiles: FileList;
  currentFile: File;
  message = '';
  msg = '';
  @Input() isFileUpload : boolean
  constructor(private fb: FormBuilder, private uploadService: UploaderService) {
    console.log('upload componenr constructor called....')
    this.selectedFiles = null;
    this.message = '';
  }

  ngOnInit() {
    console.log('upload init method called....')
    this.message = '';
    this.fileUploadForm = this.fb.group({
      file: ['', Validators.required]
  })
  }

  selectFile(event) {
    console.log('file selected');
    this.message = '';
     this.selectedFiles = event.target.files;
   }

  /*public upoadFile(){
    if(this.selectedFiles != null && this.selectedFiles.length>0){
      this.currentFile = this.selectedFiles[0];
      console.log("this.currentFileUpload===>"+this.currentFile);
     }
    this.uploadService.SaveFile(this.currentFile)
	    .subscribe(
	      response => {
          this.responseData = response;
          alert('response in file ipload comp==>'+ JSON.stringify(this.responseData));
        },
        error => {
          alert("Failed to upload file");
        }
	    )
  }*/

  uploadFile(action : String) {
    console.log('uploadfile action::'+action)
    this.currentFile = this.selectedFiles.item(0);
    console.log('current file::'+this.currentFile.name);
    if(action == 'file'){
      this.uploadService.saveFile(this.currentFile).subscribe(
        event => {
           if (event instanceof HttpResponse) {
            this.message = event.body.msg;
            console.log('message::'+this.message);
          }
        },
        err => {
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
    } else {
      this.uploadService.saveResumes(this.currentFile).subscribe(
        event => {
           if (event instanceof HttpResponse) {
            this.msg = event.body.msg;
            console.log('message::'+this.message);
          }
        },
        err => {
          this.msg = 'Could not upload the zip file!';
          this.currentFile = undefined;
        });
    }
    console.log('file upload success::');
    this.selectedFiles = undefined;
  }

}
