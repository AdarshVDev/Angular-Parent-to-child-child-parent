import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  constructor(private http: HttpClient) {}

  file: File = null;

  public uploadfile() {
    let formParams = new FormData();
    formParams.append('image',this.file);
    return this.http.post("http://localhost:4200/", formParams);
  }
}
