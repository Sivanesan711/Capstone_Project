import { ContactService } from '../../../Service/contact.service';
import { ContactUs } from '../../../Model/contact';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  class: ContactUs = new ContactUs();
  submitted = false;
  id: number;

  constructor(private route: ActivatedRoute, private classService: ContactService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.classService.getClass(this.id)
      .subscribe(data => {
        console.log(data);
        this.class = data;
      }, error => console.log(error));
  }

  newClass(): void {
    this.submitted = false;
    this.class = new ContactUs();
  }

  // tslint:disable-next-line:typedef
  edit() {
    this.classService.updateClass(this.id, this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new ContactUs();
    this.gotoList();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.edit();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/contact-list']);
  }



}
