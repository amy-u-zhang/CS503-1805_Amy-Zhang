import { Component, OnInit, OnDestroy } from '@angular/core';
import { Problem } from '../../model/problem.model';
import { DataService } from '../../services/data.service';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  
  problems: Problem[];
  subscriptionProblems: Subscription;

  constructor(private dataService: DataService) { }

  // initialize problems in this class
  ngOnInit() {
    this.getProblems();
  }

  ngOnDestroy() {
    this.subscriptionProblems.unsubscribe();
  }
  
  getProblems() {
  	//this.problems = this.dataService.getProblems();
    this.subscriptionProblems = this.dataService.getProblems()
      .subscribe(problems => this.problems = problems);
      //getProblems() return observable. need to subscribe it.
  }
  

}
