import { useState, useEffect, useRef } from 'react';
import Prompt from './Prompt';

const FakeCommandInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      onSubmit(input.trim());
      setInput('');
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-start gap-2 mt-4">
      <Prompt />
      <input
        type="text"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent text-white outline-none flex-1 caret-transparent"
        autoFocus
      />
    </div>
  );
};

export default FakeCommandInput;
