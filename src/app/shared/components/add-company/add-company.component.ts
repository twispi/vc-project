import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
