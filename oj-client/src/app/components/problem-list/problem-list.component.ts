import { Component, OnInit } from '@angular/core';
import { Problem } from '../../model/problem.model';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  
  problems: Problem[];
  //problem: Problem;

  constructor(private dataService: DataService) { }

  // initialize problems in this class
  ngOnInit() {
    //this.getProblems();
    this.problems = this.dataService.getProblems();
  }

  /*
  getProblems() {
  	this.problems = this.dataService.getProblems();
  }
  */

  /*
  getProblem(id: number) {
  	this.problem = this.dataService.getProblem(id);
  }
  */

}
