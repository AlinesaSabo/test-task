import React, { useState } from "react";
import s from "./VideoPreview.module.css";
import videoThumbnail from "../../assets/image/fon/media.png";
import playIcon from "../../assets/icon/play.svg";
import Modal from "../Modal/Modal";
import bitcoin from "../../assets/image/fon/Bitcoin-2.png";
import etherium from "../../assets/image/fon/Etherium-3.png";

const VideoPreview = ({ videoUrl }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePlayClick = () => {
    setModalOpen(true);
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.title}>
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do!</p>
        </div>
        <div className={s.videoContainer}>
          <img
            src={videoThumbnail}
            alt="Video preview"
            className={s.thumbnail}
          />
          <img src={bitcoin} alt="bitcoin" className={s.bitcoin} />
          <img src={etherium} alt="etherium" className={s.etherium} />
          <button className={s.playButton} onClick={handlePlayClick}>
            <img src={playIcon} alt="Play" />
          </button>
          {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <iframe
                src={videoUrl}
                title="Video"
                frameBorder="0"
                allowFullScreen
              />
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
