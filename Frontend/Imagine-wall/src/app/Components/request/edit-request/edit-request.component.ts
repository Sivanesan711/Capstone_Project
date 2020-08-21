import { RequestService } from '../../../Service/request.service';
import { RequestUs } from '../../../Model/request';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  class: RequestUs = new RequestUs();
  submitted = false;
  id: number;

  constructor(private route: ActivatedRoute, private classService: RequestService,
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
    this.class = new RequestUs();
  }

  // tslint:disable-next-line:typedef
  edit() {
    this.classService.updateClass(this.id, this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new RequestUs();
    this.gotoList();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.edit();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/request-list']);
  }




}
