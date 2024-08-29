'use client' //NÃO ESQUEÇA DISSO
import { useContext, useRef } from "react";
import { HomeContext } from "./context/HomeContext";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";

export default function Home() {
  const{
    aux,
    play,
    pause,
    stop
  } = useContext(HomeContext);

  //Função que mexe no gif da hatsune miku
  const getImageSrc = () => {
    switch (aux) {
      case 1:
        return "/assets/miku-hatsune-hatsune-miku.gif";
      case 0:
        return "/assets/frame-1.gif";
      default:
        return "/assets/frame-1.gif";
    }
  }

  //Funções do Audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    play();
    audioRef.current?.play();
  };

  const handlePause = () => {
    pause();
    audioRef.current?.pause();
  };

  const handleStop = () => {
    stop();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Volta para o início
    }
  };

  return (//se n for html, dentro de chaves
    <main className="flex min-h-screen flex-col items-center">
      <img src={getImageSrc()} alt={`Imagem para aux = ${aux}`} />

      <audio ref={audioRef} src="/assets/Levan Polkka.mp3" />

      <div className="flex flex-row">
        <button onClick={handleStop}><FaStop className="text-[white] hover:text-cyan-300" /></button>
        <button onClick={handlePlay}><FaPlay className="text-[white] hover:text-cyan-300" /></button>
        <button onClick={handlePause}><FaPause className="text-[white] hover:text-cyan-300" /></button>
      </div>
    </main>
  );
}
