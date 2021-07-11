import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeComponent } from './tree/tree.component';
import { MatButtonModule } from '@angular/material/button';
import { ShowPathComponent } from './show-path/show-path.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreeComponent,
    ShowPathComponent
  ],
  imports: [
    MatMenuModule,
    MatTreeModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
