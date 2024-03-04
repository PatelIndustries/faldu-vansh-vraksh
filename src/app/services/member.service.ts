import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMemberById(memberId: string): Observable<any>{
    return this.http.get('../../assets/memberData.json').pipe(
      map((response: any) => {
        return response.members.find((member: any) => member.id === memberId);
      })
    );
  }
}
