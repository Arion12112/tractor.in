import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: 'tabs',
     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {path : '', loadChildren: './onboarding/onboarding.module#OnboardingPageModule'},
  { path: 'monitor', loadChildren: './monitor/monitor.module#MonitorPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'qn-a', loadChildren: './qn-a/qn-a.module#QnAPageModule' },
  { path: 'education', loadChildren: './education/education.module#EducationPageModule' },
  { path: 'education-video', loadChildren: './education-video/education-video.module#EducationVideoPageModule' },
  { path: 'insight1', loadChildren: './insight1/insight1.module#Insight1PageModule' },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'profiles', loadChildren: './profiles/profiles.module#ProfilesPageModule' },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'olah-tanah', loadChildren: './insight1/olah-tanah/olah-tanah.module#OlahTanahPageModule' },
  { path: 'irigasi', loadChildren: './insight1/irigasi/irigasi.module#IrigasiPageModule' },
  { path: 'tanam', loadChildren: './insight1/tanam/tanam.module#TanamPageModule' },
  { path: 'panen', loadChildren: './insight1/panen/panen.module#PanenPageModule' },
  { path: 'barter', loadChildren: './barter/barter.module#BarterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'alsintan-olah', loadChildren: './AnalisisAlsintan/alsintan-olah-tanah/alsintan-olah-tanah.module#AlsintanOlahTanahPageModule' },
  { path: 'jual', loadChildren: './jual/jual.module#JualPageModule' },
  { path: 'tambahjual', loadChildren: './tambahjual/tambahjual.module#TambahjualPageModule' },
  { path: 'alsintan-olah', loadChildren: './AnalisisAlsintan/alsintan-olah-tanah/alsintan-olah-tanah.module#AlsintanOlahTanahPageModule' },
  { path: 'alsintan-irigasi', loadChildren: './AnalisisAlsintan/alsintan-irigasi/alsintan-irigasi.module#AlsintanIrigasiPageModule' },
  { path: 'alsintan-panen', loadChildren: './AnalisisAlsintan/alsintan-panen/alsintan-panen.module#AlsintanPanenPageModule' },
  { path: 'alsintan-tanam', loadChildren: './AnalisisAlsintan/alsinta-tanam/alsinta-tanam.module#AlsintaTanamPageModule' },
  { path: 'pinjam-tanam', loadChildren: './PinjamAlsintan/pinjam-tanam/pinjam-tanam.module#PinjamTanamPageModule' },
  { path: 'pinjam-irigasi', loadChildren: './PinjamAlsintan/pinjam-irigasi/pinjam-irigasi.module#PinjamIrigasiPageModule' },
  { path: 'pinjam-olah-tanah', loadChildren: './PinjamAlsintan/pinjam-olah-tanah/pinjam-olah-tanah.module#PinjamOlahTanahPageModule' },
  { path: 'pinjam-panen', loadChildren: './PinjamAlsintan/pinjam-panen/pinjam-panen.module#PinjamPanenPageModule' },
  { path: 'pinjam', loadChildren: './pinjam/pinjam.module#PinjamPageModule' },  { path: 'pinjamirigasi', loadChildren: './pinjam/pinjamirigasi/pinjamirigasi.module#PinjamirigasiPageModule' },
  { path: 'pinjamtanam', loadChildren: './pinjam/pinjamtanam/pinjamtanam.module#PinjamtanamPageModule' },
  { path: 'pinjampanen', loadChildren: './pinjam/pinjampanen/pinjampanen.module#PinjampanenPageModule' },
  { path: 'pinjamolahtanah', loadChildren: './pinjam/pinjamolahtanah/pinjamolahtanah.module#PinjamolahtanahPageModule' },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
