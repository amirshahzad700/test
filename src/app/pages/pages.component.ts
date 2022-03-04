import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
public sidebar: boolean = true;
  constructor(private active: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
