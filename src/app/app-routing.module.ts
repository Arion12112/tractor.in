import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'monitor', loadChildren: './monitor/monitor.module#MonitorPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'qn-a', loadChildren: './qn-a/qn-a.module#QnAPageModule' },
  { path: 'education', loadChildren: './education/education.module#EducationPageModule' },
  { path: 'education-video', loadChildren: './education-video/education-video.module#EducationVideoPageModule' },
  { path: 'insight1', loadChildren: './insight1/insight1.module#Insight1PageModule' },
  { path: 'insight2', loadChildren: './insight2/insight2.module#Insight2PageModule' },
  { path: 'insight3', loadChildren: './insight3/insight3.module#Insight3PageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'profiles', loadChildren: './profiles/profiles.module#ProfilesPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
