import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component'; // for used these modules for upload
// import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUserComponent } from './get-user/get-user.component';
import { ChildComponent } from './child/child.component';


// const routes: Routes = [  
//   { path: 'C:UsersCCL 4OneDriveDesktopJavascriptLearningAngularsamplesrcassets', redirectTo: 'home', pathMatch: 'full'},  
// //   { path: 'home', component: HomeComponent },  
// //   { path: 'about', component: AboutComponent },  
// ];

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    FileUploadComponent,
    GetUserComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
