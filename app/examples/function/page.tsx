"use client";

import React, { useState } from "react";
import styles from "../shared/page.module.css";
import Chat from "../../components/chat";
import TutorWidget from "../../components/tutor-widget";
import { getContent } from "../../utils/textbook";
import { RequiredActionFunctionToolCall } from "openai/resources/beta/threads/runs/runs";

interface TutorData {
  location?: string;
  temperature?: number;
  conditions?: string;
}

const FunctionCalling = () => {
  const [content, setContent] = useState<TutorData>({});
  const isEmpty = Object.keys(content).length === 0;

  const functionCallHandler = async (call: RequiredActionFunctionToolCall) => {
    if (call?.function?.name !== "get_content") return;
    const args = JSON.parse(call.function.arguments);
    const data = getContent(args.location);
    setContent(data);
    return JSON.stringify(data);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <TutorWidget
            location={content.location || "---"}
            temperature={content.temperature?.toString() || "---"}
            conditions={content.conditions || "Sunny"}
            isEmpty={isEmpty}
          />
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
