import CommandBlock from './CommandBlock';
import FakeCommandInput from './FakeCommandInput';

const ConsoleWindow = ({ history, onCommand }) => {
  return (
    <div className="bg-[#0d1117] text-[#d4d4d4] font-mono rounded-lg shadow-md border border-gray-600 max-w-5xl w-4/5 mx-auto mt-10 p-6 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
      <div className="flex items-center space-x-2 mb-6">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {history.map((entry, index) => (
        <CommandBlock key={index} command={entry.command} output={entry.output} />
      ))}

      <FakeCommandInput onSubmit={onCommand} />
    </div>
  );
};

export default ConsoleWindow;
