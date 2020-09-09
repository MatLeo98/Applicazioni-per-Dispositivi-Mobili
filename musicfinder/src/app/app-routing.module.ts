import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'artista',
    loadChildren: () => import('./pages/artista/artista.module').then( m => m.ArtistaPageModule)
  },
  {
    path: 'album',
    loadChildren: () => import('./pages/album/album.module').then( m => m.AlbumPageModule)
  },
  {
    path: 'song',
    loadChildren: () => import('./pages/song/song.module').then( m => m.SongPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  { path: 'album/:id_album/:titolo/:genere/:valutazione_media/:descrizione/:id_artista', loadChildren: './pages/album/album.module#AlbumPageModule' },
  { path: 'results/album/:id_album/:titolo/:genere/:valutazione_media/:descrizione/:id_artista', loadChildren: './pages/album/album.module#AlbumPageModule' },

  { path: 'reviews/:id', loadChildren: './pages/reviews/reviews.module#ReviewsPageModule' },
  { path: 'reviews/brani/:id_brano', loadChildren: './pages/reviews/reviews.module#ReviewsPageModule' },
  { path: 'addreview/:id', loadChildren: './pages/addreview/addreview.module#AddreviewPageModule' },
  { path: 'results/:event/:filter', loadChildren: './pages/results/results.module#ResultsPageModule' }, //search
  {
    path: 'addreview',
    loadChildren: () => import('./pages/addreview/addreview.module').then( m => m.AddreviewPageModule)
  },

  { path: 'addreview/brano/:id_brano', loadChildren: './pages/addreview/addreview.module#AddreviewPageModule' },


  { path: 'artista/:id_artista/:nome/:storia/:immart', loadChildren: './pages/artista/artista.module#ArtistaPageModule' },

  { path: 'album/:id_album/:id_artista/:titolo/:genere/:anno/:immagine/:valutazione_media/:descrizione/:nome', loadChildren: './pages/album/album.module#AlbumPageModule' },

  { path: 'brano/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine', loadChildren: './pages/song/song.module#SongPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
