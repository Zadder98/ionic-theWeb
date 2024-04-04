import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    //permite agregar la sintaxis "ion-button, ion-icon..etc///"
    IonicModule,
    //__________________________________//
    RouterModule
  ],
  exports:[HeaderComponent]
})
export class SharedComponentsModule { }
