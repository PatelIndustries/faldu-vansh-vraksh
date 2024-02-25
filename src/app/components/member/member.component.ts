import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  @Input() memberId: string = '';

  memberData:any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.memberId);

  }
}
