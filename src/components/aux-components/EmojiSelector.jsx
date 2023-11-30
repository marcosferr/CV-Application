import React, { useState, useCallback } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const EmojiSelector = () => {
  const defaultEmoji = { native: "😀" }; // replace with your default emoji
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(defaultEmoji);

  const handleEmojiSelect = useCallback((emoji) => {
    setSelectedEmoji(emoji);
    setShowPicker(false);
  }, []);

  return (
    <div className="emoji-selector">
      <button onClick={() => setShowPicker((prev) => !prev)}>
        {selectedEmoji.native}
      </button>
      {showPicker && (
        <div className="emoji-picker">
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
};

export default EmojiSelector;
