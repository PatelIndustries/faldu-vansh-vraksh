import { Component, Input } from '@angular/core';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  @Input() memberId: string = '';

  memberData:any;

  constructor(private memberService: MemberService) {}

ngOnInit(): void {
  console.log(this.memberId);
  this.memberService.getMemberById(this.memberId).subscribe((member) => {
    this.memberData = member;
  });
}
}
