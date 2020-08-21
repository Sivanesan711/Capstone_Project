import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../../../Service/request.service';
import { RequestUs } from '../../../Model/request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  classes: Observable<RequestUs[]>;
  class: RequestUs[];

  constructor(private classService: RequestService,
              private router: Router) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getClasses();
  }

  // tslint:disable-next-line:typedef
  getClasses() {
    this.classService.getAllClasssList().subscribe((res => {
      console.log(res);
      this.class = res as RequestUs[];
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
    this.router.navigate(['request-detail', id]);
  }

  // tslint:disable-next-line:typedef
  EditClass(id: number){
    this.router.navigate(['edit-request', id]);
  }

}
