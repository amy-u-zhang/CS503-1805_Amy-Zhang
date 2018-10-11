import { Injectable } from '@angular/core';
import { Problem } from '../model/problem.model';
import { PROBLEMS } from '../mock-problems';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // list of problems
  problems: Problem[] = PROBLEMS;

  constructor() { }

  // return a list of problems
  getProblems(): Problem[] {
  	return this.problems;
  }

  // input: id
  // return a problem by id
  getProblem(id: number): Problem {
    //return this.problem.find((problem) => problem.id ===id);
  	for(let problem of this.problems){
  	  if(problem.id === id){
  	    return problem;
  	  }
  	}
  }

  // add a new problem
  addProblem(problem: Problem) {
    // assign problem id
    problem.id = this.problems.length + 1;
    // add to the end of problems list
    this.problems.push(problem);
  }

}
