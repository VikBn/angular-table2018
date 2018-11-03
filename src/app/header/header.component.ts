import { Component, OnInit } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer) {
  }
  public backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/2a240e32-0c3e-4cbb-b169-ff2087966a16/d2pme2k-3468c191-29ff-4803-9a45-453ece0a59ca.jpg/v1/fill/w_1131,h_707,q_70,strp/spectra_wood_by_tranceparadox_d2pme2k-pre.jpg)');


  ngOnInit() {
  }

}
