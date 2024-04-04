import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
[x: string]: any;

  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Products',
      icon: 'list',
      path: '/products'
    },
    {
      title: 'About',
      icon: 'information',
      path: '/about'
    },

  ];
  

  //literal para controlar el menu xd//

  title= 'Home';
  constructor(private menuCtrl: MenuController, private plt: Platform) { }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }
  setTitle(title: any){
    this.title = title;
  }
//Para esconder el menu luego de extender en pantalla completa//
  toggleMenu(width: any){
    if (width > 768){
      this.menuCtrl.enable(false, 'myMenu');
    } else {
      this.menuCtrl.enable(true, 'myMenu');
   } 
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: { target: { innerWidth: any; }; }){
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth)
  }
}
