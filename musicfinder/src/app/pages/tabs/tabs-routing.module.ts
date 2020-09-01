import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,               
    children: [
      {
        path: 'home',
        children:[
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
 
          {
            path: 'results/:x', //ARTISTI
            children: [
              {
                path: '',
                loadChildren: () => import('../results/results.module').then(m => m.ResultsPageModule)
 
              }, 
              {path: 'artista/:id_artista/:nome/:storia/:immart',
                  children: [
                    {
                      path: '',
                      loadChildren: './pages/artista/artista.module#ArtistaPageModule' 
                    },
 
                    {
                      path: 'album/:id_album/:id_artista/:titolo/:genere/:anno/:immagine/:valutazione_media/:descrizione/:nome',
                      children: [
                  {
                    path: '',
                    loadChildren: './pages/album/album.module#AlbumPageModule' 
                  },
                  {
                    path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
                    loadChildren: './pages/song/song.module#SongPageModule'
                  }
                ]
                    },
 
                  ]
                }
            ]
 
        
      },
 
          {
            path: 'results/:x', //ALBUM
            children: [
              {
                path: '',
                loadChildren: () => import('../results/results.module').then(m => m.ResultsPageModule)
              }, 
              { 
                path: 'album/:id_album/:id_artista/:titolo/:genere/:anno/:immagine/:valutazione_media/:descrizione/:nome',
                children: [
                  {
                    path: '',
                    loadChildren: './pages/album/album.module#AlbumPageModule' 
                  },
                  {
                    path: 'reviews/:id_album',
                    loadChildren: './pages/reviews/reviews.module#ReviewsPageModule'

                  },
                  {
                    path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
                    
                    loadChildren: './pages/song/song.module#SongPageModule'
                  }
                ] 
            
              }
            ]
 
          } ,
          /*{
            path: 'results/search/:event/:filter', //ALBUM
            children: [
              {
                path: '',
                loadChildren: () => import('../results/results.module').then(m => m.ResultsPageModule)
              }, 
              { 
                path: 'album/:id_album/:id_artista/:titolo/:genere/:anno/:immagine/:valutazione_media/:descrizione/:nome',
                children: [
                  {
                    path: '',
                    loadChildren: './pages/album/album.module#AlbumPageModule' 
                  },
                  {
                    path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
                    loadChildren: './pages/song/song.module#SongPageModule'
                  }
                ] 
            
              }
            ]
 
          },*/
          {
            path: 'results/:x', //BRANI
            children: [
              {
                path: '',
                loadChildren: () => import('../results/results.module').then(m => m.ResultsPageModule)
 
              }, 
 
              {
                path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
                children: [
                  {
                    path: '',
                    loadChildren: './pages/song/song.module#SongPageModule' 
                  },
                  {
                    path: 'reviews/brani/:id_brano',
                    loadChildren: './pages/reviews/reviews.module#ReviewsPageModule'
                    
                  },
                ]
                
              }
 
            ]
 
          },
          {
            path: 'results/search/:event/:filter', //SEARCH
            children: [
              {
                path: '',
                loadChildren: () => import('../results/results.module').then(m => m.ResultsPageModule)
 
              }, 

              { 
                path: 'album/:id_album/:id_artista/:titolo/:genere/:anno/:immagine/:valutazione_media/:descrizione/:nome',
                children: [
                  {
                    path: '',
                    loadChildren: './pages/album/album.module#AlbumPageModule' 
                  },
                  {
                    path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
                    loadChildren: './pages/song/song.module#SongPageModule'
                  }
                ] 
            
              },
 
              {
                path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
                loadChildren: './pages/song/song.module#SongPageModule'
              }
 
            ]
 
          }
 
        ]
 
        
 
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'favourites',
        children: [
          {
            path: '',
            loadChildren: () => import('../favourites/favourites.module').then(m => m.FavouritesPageModule)
          },
          {path: ':y/artista/:id_artista/:nome/:storia/:immart',
                  children: [
                    {
                      path: '',
                      loadChildren: './pages/artista/artista.module#ArtistaPageModule' 
                    },
 
                    {
                      path: 'album/:id_album/:id_artista/:titolo/:genere/:anno/:immagine/:valutazione_media/:descrizione/:nome',
                      children: [
                  {
                    path: '',
                    loadChildren: './pages/album/album.module#AlbumPageModule' 
                  },
                  {
                    path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
                    loadChildren: './pages/song/song.module#SongPageModule'
                  }
                ]
                    },
 
                  ]
                },

        { 
        path: 'album/:id_album/:id_artista/:titolo/:genere/:anno/:immagine/:valutazione_media/:descrizione/:nome',
        children: [
          {
            path: '',
            loadChildren: './pages/album/album.module#AlbumPageModule' 
          },
          {
            path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
            loadChildren: './pages/song/song.module#SongPageModule'
          }
        ] 
    
        },

        {
          path: 'song/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine',
          loadChildren: './pages/song/song.module#SongPageModule'
        }

    ]
  },

      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },

      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'artista',
        loadChildren: () => import('../artista/artista.module').then(m => m.ArtistaPageModule)
      },
      {
        path: 'album',
        loadChildren: () => import('../album/album.module').then(m => m.AlbumPageModule)
      },
      {
        path: 'song',
        loadChildren: () => import('../song/song.module').then(m => m.SongPageModule)
      },
      {
        path: 'results',
        loadChildren: () => import('../results/results.module').then(m => m.ResultsPageModule)
      },
      {
        path: 'filter',
        loadChildren: () => import('../filter/filter.module').then(m => m.FilterPageModule)
      },
      {
        path: 'reviews',
        loadChildren: () => import('../reviews/reviews.module').then(m => m.ReviewsPageModule)
      },
      {
        path: 'addreview',
        loadChildren: () => import('../addreview/addreview.module').then( m => m.AddreviewPageModule)
      },
      { path: 'artista/:id_artista/:nome/:storia/:immart', loadChildren: './pages/artista/artista.module#ArtistaPageModule' },

      { path: 'album/:id_album/:id_artista/:titolo/:genere/:anno/:immagine/:valutazione_media/:descrizione/:nome', loadChildren: './pages/album/album.module#AlbumPageModule' },

      { path: 'brano/:id_brano/:id_album/:titolo/:durata/:valutazione_media/:descrizione/:testo/:youtube/:genere/:titalb/:nome/:immagine', loadChildren: './pages/song/song.module#SongPageModule' },

      { path: 'results/album/:id_album/:titolo/:genere/:valutazione_media/:descrizione/:id_artista', loadChildren: './pages/album/album.module#AlbumPageModule' },


      { path: 'reviews/:id', loadChildren: './pages/reviews/reviews.module#ReviewsPageModule' },

      { path: 'reviews/brani/:id_brano', loadChildren: './pages/reviews/reviews.module#ReviewsPageModule' },

      { path: 'addreview/album/:id', loadChildren: './pages/addreview/addreview.module#AddreviewPageModule' },
      { path: 'addreview/brano/:id_brano', loadChildren: './pages/addreview/addreview.module#AddreviewPageModule' },

      { path: 'results/search/:event/:filter', loadChildren: './pages/results/results.module#ResultsPageModule' }, //search

      { path: 'results/artisti/:x', loadChildren: './pages/results/results.module#ResultsPageModule' },

      { path: 'results/brani/:x', loadChildren: './pages/results/results.module#ResultsPageModule' },

      { path: 'results/album/:x', loadChildren: './pages/results/results.module#ResultsPageModule' },

      
     
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
