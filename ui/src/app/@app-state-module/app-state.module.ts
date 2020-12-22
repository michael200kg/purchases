import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { LoggerModule } from 'ngx-logger';

import { UserFacade, userStateReducer } from './user';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['userState', 'news'],
    rehydrate: true
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

const MODULES = [
  EffectsModule.forRoot([
    UserFacade
  ]),
  LoggerModule.forChild(),
  // Signature matches AppState interface
  StoreModule.forRoot({
        userState: userStateReducer
      }, {metaReducers}
  ),

  StoreDevtoolsModule.instrument({maxAge: 25})
];

@NgModule({
  imports: [
    MODULES
  ],
  providers: [
    UserFacade
  ]
})

export class AppStateModule {
  constructor(@Optional() @SkipSelf() parentModule: AppStateModule) {
    // throwIfAlreadyLoaded(parentModule, 'AppStateModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppStateModule,
      providers: [
        UserFacade
      ]
    } as any as ModuleWithProviders;
  }
}
