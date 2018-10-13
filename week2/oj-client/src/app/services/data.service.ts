import { Injectable } from '@angular/core';
import { Problem } from '../model/problem.model';
//import { PROBLEMS } from '../mock-problems';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // list of problems
  //problems: Problem[] = PROBLEMS;

  // private field start with _
  // BehaviorSubject: when subscribe, we can get the value that emitted last time.
  // Subject: when subscribe, we can only get the value that emitted 
  // after subscribe and we cannot get value that emitted before we subscribe
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private httpClient: HttpClient) { }

  // return a list of problems
  getProblems(): Observable<Problem[]> {
    this.httpClient.get('api/v1/problems')
      .toPromise()
      .then((res: any) => {
        // .next: next data
        this._problemSource.next(res);
      })
      .catch(this.handleError);
  	return this._problemSource.asObservable();
  }

  // input: id
  // return a problem by id
  getProblem(id: number): Promise<Problem> {
    //return this.problem.find((problem) => problem.id ===id);
  	// for(let problem of this.problems){
  	//   if(problem.id === id){
  	//     return problem;
  	//   }
  	// }
    return this.httpClient.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: any) => res)  // same as ( return res)
      .catch(this.handleError);
  }

  // add a new problem
  addProblem(problem: Problem) {
    // assign problem id
    // problem.id = this.problems.length + 1;
    // add to the end of problems list
    // this.problems.push(problem);

    // "content-Type" is case sensitive
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.httpClient.post('api/v1/problems', problem, options)
      .toPromise()
      .then((res: any) => {
        // any: type, 
        // update the _problemSource
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
