import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddLeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
