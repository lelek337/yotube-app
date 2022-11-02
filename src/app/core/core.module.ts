import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { LoginInfoComponent } from 'src/app/core/components/header/login-info/login-info.component';
import { ErrorComponent } from 'src/app/core/components/error/error.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { LogoComponent } from 'src/app/core/components/header/logo/logo.component';
import { SearchInputComponent } from 'src/app/core/components/header/search-input/search-input.component';
import { SettingsButtonComponent } from 'src/app/core/components/header/settings-button/settings-button.component';
import { SortingComponent } from 'src/app/core/components/header/sorting/sorting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { cardReducer } from 'src/app/state/reducers/user.reducer';
import { responseReducer } from 'src/app/state/reducers/response.reducer';
import { AppEffects } from 'src/app/state/effects/effects';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    LoginInfoComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    SortingComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ 'userState': cardReducer, 'itemsState': responseReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    ErrorComponent,
  ],
})
export class CoreModule { }
