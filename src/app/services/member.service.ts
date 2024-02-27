import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  returnMemberById(memberId: string): Observable<any> {
    const memberData = [
      { id: '1', name: 'John Doe', age: 30, email: 'john@example.com' },
      { id: '2', name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      { id: '3', name: 'Bob Johnson', age: 40, email: 'bob@example.com' },

      {
        id: "5e1b7e0c-4f35-4e7d-bd4b-0dc3c9e89267",
        name: "John Doe",
        gender: "male",
        dateOfBirth: "1979-01-01",
        dateOfDeath: null,
        maritalStatus: "married"
      },
      {
        "id": "382ba20e-eb1d-42d4-9f69-9b63c055839f",
        "name": "Jane Doe",
        "gender": "female",
        "maidenName": "Smith",
        "dateOfBirth": "1982-03-05",
        "dateOfDeath": null,
        "maritalStatus": "married"
      },
      {
        "id": "c2e2b8ac-1888-49ec-96f3-7311d8a5ee67",
        "name": "Jack Doe",
        "gender": "male",
        "dateOfBirth": "2004-12-10",
        "dateOfDeath": null,
        "maritalStatus": "single"
      },
      {
        "id": "0b300fcc-9a1d-43b2-804c-7f29fb9edf7e",
        "name": "Jill Doe",
        "gender": "female",
        "maidenName": "Johnson",
        "dateOfBirth": "2006-09-15",
        "dateOfDeath": null,
        "maritalStatus": "single"
      }
    ];
    return of(memberData.find(member => member.id === memberId));
  }

}
