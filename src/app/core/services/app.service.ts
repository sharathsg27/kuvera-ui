import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private searchTermSource = new Subject<string>();
  searchTermEntered$ = this.searchTermSource.asObservable();

  constructor(private http: HttpClient) {
  }

  /**
   * Emit search value for all the subscribers
   * @param {string} value
   */
  searchValue = (value: string) => {
    this.searchTermSource.next(value);
  };

  /**
   * Fetch list of records
   * @param {String} url
   */
  getRecords = (url: string): Observable<any[]> => {
    return this.http.get(url)
      .pipe(
        map((response: any[]) => response),
        catchError(error => throwError(error))
      );
  };

  /**
   * Get record detail
   * @param url
   * @param id
   */
  getRecordDetail = (url: string, id: string): Observable<any> => {
    return this.http.get(`${url}/${id}.json`)
      .pipe(
        map((response: any) => response),
        catchError(error => throwError(error))
      );
  };
}
