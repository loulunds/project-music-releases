import React from 'react'
import data from './data.json'
import playlistData from './stretch-goal.json'

// components to import in app.js
import Vinyl from './components/Vinyl'
import Playlists from './components/Playlists'
import MainHeader from './components/MainHeader'
import SidebarHeader from './components/SidebarHeader'
import Footer from './components/Footer'

// I just put this in variable so it's easier
const albumArray = data.albums.items
const playlistArray = playlistData.playlists.items

// then here we have the "entire" website
// run this and you will see all the albums and artists
export const App = () => {
  return (
    <div className="project-container">
      <aside className="sidebar">
        {/* Editor's picks sidebar container */}
        <SidebarHeader />
        <div className="playlist-container">
          {playlistArray.map((playlist) => {
            return (
              // prettier-ignore
              <Playlists
                key={playlist.id}
                cover={playlist.images[0].url}
                playlistName={playlist.name}
                playlistUrl={playlist.external_urls.spotify}
                trackNumber={playlist.tracks.total} />
            )
          })}
        </div>
        <Footer />
      </aside>
      <main>
        <MainHeader />
        <hr className="horizontal-line" />
        {/* main container for the vinyls */}
        <div className="container">
          {albumArray.map((album) => {
            return (
              // prettier-ignore
              <Vinyl
                key={album.artists[0].id}
                cover={album.images[1].url}
                song={album.name}
                titleUrl={album.external_urls.spotify}
                artist={album.artists} />
            )
          })}
        </div>
      </main>
    </div>
  )
}
