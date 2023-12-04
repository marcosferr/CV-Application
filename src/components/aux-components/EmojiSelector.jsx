import React, { useState, useCallback } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const EmojiSelector = ({ handleChange, id, value }) => {
  const defaultEmoji = { native: "😀" }; // replace with your default emoji
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiSelect = useCallback((emoji) => {
    console.log(emoji);
    handleChange({
      type: "EDIT_EMOJI",
      payload: { id: id, value: emoji.native },
    });
    setShowPicker(false);
  }, []);

  return (
    <div className="emoji-selector">
      <button onClick={() => setShowPicker((prev) => !prev)}>{value}</button>
      {showPicker && (
        <div className="emoji-picker">
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
};

export default EmojiSelector;
