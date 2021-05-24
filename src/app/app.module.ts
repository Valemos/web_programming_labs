import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserShortDescriptionComponent } from './components/user-short-description/user-short-description.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { SmallButtonComponent } from './components/small-button/small-button.component';
import { UserInfoGitHubComponent } from './components/user-info-git-hub/user-info-git-hub.component';

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
    InfoBlockComponent,
    SmallButtonComponent,
    UserInfoGitHubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
