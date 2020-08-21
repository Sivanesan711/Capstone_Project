import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import { SingleComponent } from './Components/single/single.component';
import { BlogComponent } from './Components/blog/blog.component';
import { AdminComponent } from './Components/admin/admin.component';
import { RequestComponent } from './Components/request/request.component';
import { RequestDetailComponent } from './Components/request/request-detail/request-detail.component';
import { RequestListComponent } from './Components/request/request-list/request-list.component';
import { EditRequestComponent} from './Components/request/edit-request/edit-request.component';
import { ContactDetailComponent } from './Components/contact/contact-detail/contact-detail.component';
import { ContactListComponent } from './Components/contact/contact-list/contact-list.component';
import { EditContactComponent } from './Components/contact/edit-contact/edit-contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'single', component: SingleComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'request', component: RequestComponent},
  { path: 'request-detail', component: RequestDetailComponent},
  { path: 'request-list', component: RequestListComponent},
  { path: 'edit-request', component: EditRequestComponent},
  { path: 'contact-detail', component: ContactDetailComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'edit-contact', component: EditContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
