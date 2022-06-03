import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UploadService } from "./upload.service";
// import { RouterModule } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "sample";
  public name = "Simplilearn"; //variable Interpolation
  public image = "/assets/sample.jpg"; //Property
  public value = ""; // property value
  onClick() {
    console.log("That Event Binding is Working");
  }

  // Child to Parent & Parent to Child
  currentMessage = "The is new message for parent to child'";
  messages = ["This is Child to Parent"];
  addMessage(newCommand: string) {
    console.log('fkgesvkfbvvj');
    
    // this.messages.push(newCommand);
    // this.clearInput();
  }
  clearInput() {
    let input = <HTMLInputElement>document.getElementById("message-input");
    input.value = "";
  }

  file: File = null;
  // selecteFile: File = null;

  // constructor(private uploadService: UploadService) {
  //   // to add a component and used he HttpClientModule
  // }

  constructor(private http: HttpClient) {}

  // Child to Parent & Parent to Child
  message = "Sample Parent to Child Process";
  receivedMessage($event) {
    this.message = $event;
  }

  onFilechange(event: any) {
    // console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }

  upload() {
    const fd = new FormData();
    fd.append("image", this.file, this.file.name);
    // console.log(this.file.name)
    if (this.file) {
      this.http.post("http://localhost:4200/assets", fd);
      console.log(this.file);
      // if (this.file) {
      //   this.uploadService.uploadfile().subscribe(resp => {
      //     alert("Uploaded")
      //   })
      // console.log(this.file)
    } else {
      alert("Please select a file first");
    }
  }
}
