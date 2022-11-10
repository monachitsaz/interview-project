import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  id: number;
  name: string;
  email: string;
  showFiller = false;
  constructor(private api: ApiService) { }
  @ViewChild('drawer') drawer: MatDrawer

  ngOnInit(): void {
  }


  toggle(id: number) {
    this.api.getById(id).subscribe(res => {
      this.id = res.id;
      this.name = res.name;
      this.email = res.email;
    })
    this.drawer.toggle();
  }


}
