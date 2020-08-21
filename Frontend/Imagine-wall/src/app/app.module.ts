import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SingleComponent } from './Components/single/single.component';
import { BlogComponent } from './Components/blog/blog.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ContactDetailComponent } from './Components/contact/contact-detail/contact-detail.component';
import { ContactListComponent } from './Components/contact/contact-list/contact-list.component';
import { EditContactComponent } from './Components/contact/edit-contact/edit-contact.component';
import { RequestComponent } from './Components/request/request.component';
import { RequestDetailComponent } from './Components/request/request-detail/request-detail.component';
import { RequestListComponent } from './Components/request/request-list/request-list.component';
import { EditRequestComponent } from './Components/request/edit-request/edit-request.component';
import { NavigatorComponent } from './Components/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    SingleComponent,
    BlogComponent,
    AdminComponent,
    ContactDetailComponent,
    ContactListComponent,
    EditContactComponent,
    RequestComponent,
    RequestDetailComponent,
    RequestListComponent,
    EditRequestComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
