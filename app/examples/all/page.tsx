"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Chat from "../../components/chat";
import TutorWidget from "../../components/tutor-widget";
import { getContent } from "../../utils/textbook";
import FileViewer from "../../components/file-viewer";

const FunctionCalling = () => {
  const [content, setContent] = useState({});

  const functionCallHandler = async (call) => {
    if (call?.function?.name !== "get_content") return;
    const args = JSON.parse(call.function.arguments);
    const data = getContent(args.location);
    setContent(data);
    return JSON.stringify(data);
  };

  // return (
  //   <main className={styles.main}>
  //     <div className={styles.container}>
  //       <div className={styles.fileViewer}>
  //         <FileViewer />
  //       </div>
  //       <div className={styles.chatContainer}>
  //         <div className={styles.weatherWidget}>
  //           <div className={styles.weatherContainer}>
  //             <WeatherWidget {...weatherData} />
  //           </div>
  //         </div>
  //         <div className={styles.chat}>
  //           <Chat functionCallHandler={functionCallHandler} />
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <TutorWidget {...content} />
          <FileViewer />
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat functionCallHandler={functionCallHandler} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
