import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'
import {
  MatSidenavModule, MatListModule, MatButtonModule, MatExpansionModule,
  MatFormFieldModule, MatToolbarModule, MatIconModule, MatInputModule, MatGridListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatAutocompleteModule, MatRadioModule, MatCheckboxModule, MatSelectModule,
  MatTableModule,
  MatProgressBarModule
} from '@angular/material';
import { } from '@angular/material'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {ScrollDispatchModule, ScrollDispatcher} from '@angular/cdk/scrolling';

import { AccordionModule, PanelModule, ButtonModule, RadioButtonModule, CalendarModule } from 'primeng/primeng';


@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule,
  BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ScrollDispatchModule,
    // primeng modules
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule

  ],
  providers: [ScrollDispatcher],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
