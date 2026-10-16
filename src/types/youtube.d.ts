/** Minimal YouTube IFrame API typings used by BackgroundMusic */

export {};

declare global {
  namespace YT {
    enum PlayerState {
      UNSTARTED = -1,
      ENDED = 0,
      PLAYING = 1,
      PAUSED = 2,
      BUFFERING = 3,
      CUED = 5,
    }

    interface PlayerOptions {
      videoId?: string;
      width?: string | number;
      height?: string | number;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (event: PlayerEvent) => void;
        onStateChange?: (event: OnStateChangeEvent) => void;
        onError?: (event: { data: number }) => void;
      };
    }

    interface PlayerEvent {
      target: Player;
    }

    interface OnStateChangeEvent {
      data: PlayerState;
      target: Player;
    }

    class Player {
      constructor(elementId: string | HTMLElement, options: PlayerOptions);
      playVideo(): void;
      pauseVideo(): void;
      stopVideo(): void;
      mute(): void;
      unMute(): void;
      isMuted(): boolean;
      setVolume(volume: number): void;
      getPlayerState(): PlayerState;
      destroy(): void;
    }
  }

  interface Window {
    YT?: typeof YT;
    onYouTubeIframeAPIReady?: () => void;
  }
}
