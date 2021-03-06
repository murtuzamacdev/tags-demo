import { Injectable } from '@angular/core';
/// <reference types="@types/dom-mediacapture-record" />
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  recordAudio = () => {
    return new Promise(resolve => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream);
          const audioChunks = [];

          mediaRecorder.addEventListener("dataavailable", (event: any) => {
            audioChunks.push(event.data);
          });

          const start = () => {
            mediaRecorder.start();
          };

          const stop = () => {
            return new Promise(resolve => {
              mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks);
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                const play = () => {
                  audio.play();
                };

                resolve({ audioBlob, audioUrl, play });
              });

              mediaRecorder.stop();
            });
          };

          resolve({ start, stop });
        });
    });
  };
}
