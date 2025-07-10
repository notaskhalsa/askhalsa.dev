import Prompt from './Prompt';
import { Link } from 'react-router-dom';

const CommandBlock = ({ command, output }) => {
  return (
    <div className="mb-4">
      <div className="flex items-start gap-2">
        <Prompt />
        <span>{command}</span>
      </div>
      <div className="text-gray-400 pl-6 mt-1 space-y-1">
        {output.split('\n').map((line, idx) => {
          const trimmed = line.trim();

          if (trimmed.startsWith('/projects/')) {
            return (
              <p key={idx}>
                &gt; <Link to={trimmed} className="text-blue-400 underline">{trimmed}</Link>
              </p>
            );
          } else if (trimmed.startsWith('http')) {
            return (
              <p key={idx}>
                &gt; <a href={trimmed} className="text-blue-400 underline" target="_blank" rel="noreferrer">{trimmed}</a>
              </p>
            );
          } else if (trimmed.startsWith('/collab')) {
            return (
              <p key={idx}>
                &gt; <Link to={trimmed} className="text-blue-400 underline">{trimmed}</Link>
              </p>
            );
          } else {
            return <p key={idx}>&gt; {trimmed}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default CommandBlock;
