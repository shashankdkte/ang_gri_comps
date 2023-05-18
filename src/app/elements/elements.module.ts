import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { HomeComponent } from './home/home.component';
import { ElementHomeComponent } from './element-home/element-home.component';

@NgModule({
  declarations: [HomeComponent, ElementHomeComponent],
  imports: [CommonModule, ElementsRoutingModule],
  exports: [],
})
export class ElementsModule {}
