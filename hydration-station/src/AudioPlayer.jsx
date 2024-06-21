import { Howl } from 'howler';
import soundFile1 from './assets/notif-sounds/chime-sound-7143.mp3';
import soundFile2 from './assets/notif-sounds/magic-mallet-6262.mp3';
import soundFile3 from './assets/notif-sounds/melancholy-ui-chime-47804.mp3';

const audioFiles = [soundFile1, soundFile2, soundFile3];
const playRandomAudio = () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const sound = new Howl({ src: [audioFiles[randomIndex]]});
    sound.play();
}

export { playRandomAudio };