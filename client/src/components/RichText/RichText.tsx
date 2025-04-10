import React from "react";
import { Paragraph } from "../../types/types";
import styles from "./RichText.module.css";

interface RichTextProps {
  paragraphs: Paragraph[];
}

const RichText: React.FC<RichTextProps> = ({ paragraphs }) => {
  return (
    <div className={styles.richText}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>
          {paragraph.map((block, blockIndex) => (
            <span 
            className={block.isBold ? styles.boldText : styles.normalText}
            style={block.isMultiline ? {whiteSpace: 'pre-line'} : {}}
          >
            {block.text}
          </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default RichText;
