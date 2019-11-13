import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BaseLayoutComponent,
} from './layouts';

const MODULES = [
  CommonModule,
  RouterModule,
];

const COMPONENTS = [
  BaseLayoutComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
  ],
  providers: [
  ]
})
export class SharedModule { }
