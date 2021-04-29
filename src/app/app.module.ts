import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserShortDescriptionComponent } from './components/user-short-description/user-short-description.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsButtonComponent } from './components/notifications-button/notifications-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    MenuComponent,
    MenuOptionComponent,
    SidebarComponent,
    UserShortDescriptionComponent,
    HeaderComponent,
    NotificationsButtonComponent,
    LogoutButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
