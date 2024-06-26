import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {


  @Input()title: any;
//para mostrar el menu desplegable de products
  dropdown = false;

  @ViewChild('productbtn', { read: ElementRef}) productbtn!: ElementRef;

  constructor() { }

  ngOnInit() {}

  //Logica para el menu desplegable de Products
  hideDropdown(event: any){
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect =this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundary = rect.left + 2;
    const rightBoundary = rect.right - 2;
    
    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary){
      this.dropdown = false;
    }

  }

}
