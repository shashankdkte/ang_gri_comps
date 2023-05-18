import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModalComponent } from './modal/modal.component';
import { ModalHomeComponent } from './modal-home/modal-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ModalComponent, ModalHomeComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
