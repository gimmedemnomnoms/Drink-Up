import { useState, useEffect } from 'react';
import { Typography  } from '@mui/material';
import { Howl } from 'howler'
import { playRandomAudio } from './AudioPlayer';
import soundFile1 from './assets/notif-sounds/chime-sound-7143.mp3';
import soundFile2 from './assets/notif-sounds/magic-mallet-6262.mp3';
import soundFile3 from './assets/notif-sounds/melancholy-ui-chime-47804.mp3';

// Define audio files
const audioFiles = [
    soundFile1,
    soundFile2,
    soundFile3
];


// eslint-disable-next-line react/prop-types
function Reminder({ interval }) {
    const [audio, setAudio] = useState(null);
    const [timeToNextReminder, setTimeToNextReminder] = useState(interval * 60)

    useEffect(() => {
        //load audio files
        const sound = new Howl({
            src: audioFiles,
            preload: true,
        });
        setAudio(sound);

        // clean up on unmount
        return () => {
            if (sound) {
                sound.unload();
            }
        };
    }, []);

    useEffect(() => {
        setTimeToNextReminder(interval * 60); // Reset countdown
        const intervalId = setInterval(() => {
            playRandomAudio();
            // if (audio) {
            //     const randomIndex = Math.floor(Math.random() * audioFiles.length);
            //     audio.stop();
            //     audio.play(randomIndex);
            // }
            setTimeToNextReminder(interval * 60)
        }, interval * 60 * 1000);

        // update countdown each second
        const countdownIntervalId = setInterval(() => {
            setTimeToNextReminder(prevTime => prevTime - 1);
        }, 1000);

        // CLean up on umount
        return () => {
            clearInterval(intervalId);
            clearInterval(countdownIntervalId);
        };
    }, [audio, interval]);

    // const playRandomAudio = () => {
    //     if (audio) {
    //         const randomIndex = Math.floor(Math.random() * audioFiles.length);
    //         audio.stop();
    //         audio.play(randomIndex);
    //     }
    // };

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <Typography variant='body1'>Next reminder in: {formatTime(timeToNextReminder)}</Typography>
        </div>
    );
}

export default Reminder;

