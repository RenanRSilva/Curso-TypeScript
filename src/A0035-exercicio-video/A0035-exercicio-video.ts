interface VideoPlayerElements { //Ciramos os elementos necessários a serem utilizados no constructor
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol{
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol{
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor (videoPlayerElements: VideoPlayerElements){
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  iniciarEventos(): void{
    this.playButton.addEventListener('click', ()=> {
      console.log('OI')
    });

    this.stopButton.addEventListener('click', ()=> {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
    });
  }

  playToggle(): void{
    if (this.videoPlayer.paused){
      this.videoPlayer.play();
    } else{
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stop(): void{
    //
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.iniciarEventos();