import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule} from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule,
   MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatTableModule
} from "@angular/material";
import {PortalModule} from '@angular/cdk/portal'
import {MatBadge} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {CommandTabsComponent} from "./shared/command-tabs/command-tabs.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { PortalComponent } from './portal/portal.component';
import { ProposComponent } from './propos/propos.component';
import { PromoDialogComponent } from './promo-dialog/promo-dialog.component';


const appRoutes: Routes = [
  { path: '',   component: CommandTabsComponent },
  { path: 'statistics',   component: StatisticsComponent },
  { path: 'profile',   component: ProfileComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'propos',   component: ProposComponent },
  { path: 'portal',   component: PortalComponent }





  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MatBadge,
    StatisticsComponent,
    ProfileComponent,
    LoginComponent,
    LoginDialogComponent,
    PortalComponent,
    ProposComponent,
    PromoDialogComponent

  ],

  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PortalModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    PromoDialogComponent
  ],

})
export class AppModule { }
