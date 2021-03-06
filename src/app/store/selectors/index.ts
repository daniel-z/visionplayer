import { get } from 'lodash';

import { PlayerStateInterface } from '../states/player.state';
import { TrackDisplayInterface } from '../states/track-display.state';
import { AppStateInterface } from '../states/app.state';
import { ViewerStateInterface } from '../states/viewer.state';
import { ConfigBarStateInterface } from '../states/config-bar.state';
import { AuthStateInterface } from '../states/auth.state';

//  Player State Selector
export const selectPlayerState = (
  state: AppStateInterface
): PlayerStateInterface => {
  return state.player;
};

//  Track Selector
export const selectTrackDisplay = (
  state: AppStateInterface
): TrackDisplayInterface => {
  const trackDisplayState = {
    albumArtAlwaysVisible: get(state, 'viewer.config.albumArtAlwaysVisible'),
    displayAlbumArt: get(state, 'viewer.config.displayAlbumArt'),
    trackName: get(state, 'player.track_window.current_track.name'),
    artistName: get(state, 'player.track_window.current_track.artists[0].name'),
    album: {
      albumImageUrl: get(
        state,
        'player.track_window.current_track.album.images[2].url'
      ),
      name: get(state, 'player.track_window.current_track.album.name')
    }
  };
  return trackDisplayState;
};

//  Viewer State Selector
export const selectViewerState = (
  state: AppStateInterface
): ViewerStateInterface => {
  return state.viewer;
};

//  Config State Selector
export const selectViewerConfigState = (
  state: AppStateInterface
): ConfigBarStateInterface => {
  return state.viewer.config;
};

//  auth selector
export const selectAuthState = (
  state: AppStateInterface
): AuthStateInterface => {
  return state.auth;
};
