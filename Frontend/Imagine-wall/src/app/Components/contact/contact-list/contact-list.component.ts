import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from '../../../Service/contact.service';
import { ContactUs } from '../../../Model/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

    classes: Observable<ContactUs[]>;
    class: ContactUs[];

    constructor(private classService: ContactService,
                private router: Router) {}

    // tslint:disable-next-line:typedef
    ngOnInit() {
      this.getClasses();
    }

    // tslint:disable-next-line:typedef
    getClasses() {
      this.classService.getAllClasssList().subscribe((res => {
        console.log(res);
        this.class = res as ContactUs[];
      }));
    }

    // tslint:disable-next-line:typedef
    deleteClass(id: number) {
      this.classService.deleteClass(id)
        .subscribe(
          data => {
            console.log(data);
            this.getClasses();
          },
          error => console.log(error));
    }

    // tslint:disable-next-line:typedef
    classDetails(id: number){
      this.router.navigate(['contact-detail', id]);
    }

    // tslint:disable-next-line:typedef
    EditClass(id: number){
      this.router.navigate(['edit-contact', id]);
    }

}
