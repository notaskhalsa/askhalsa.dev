import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ConsoleWindow from './components/ConsoleWindow';
import ProjectArticle from './pages/ProjectArticle';
import CollabPage from './pages/CollabPage';
import './App.css';

const App = () => {
  const [history, setHistory] = useState([
    {
      command: 'help',
      output: `Available commands:\n- whoami\n- skills\n- projects\n- contact\n- collab\n- clear`,
    },
  ]);

  const handleCommand = (command) => {
    let output;

    switch (command.toLowerCase()) {
      case 'whoami':
        output = 'Arshdeep | Full Stack Developer | Cloud Specialist';
        break;
      case 'skills':
        output = 'React, TypeScript, Node.js, GraphQL, Docker, AWS, MongoDB, CI/CD';
        break;
      case 'projects':
        output = 
          `LX Medical → A full-scale enterprise health platform where I led the entire frontend system architecture using React and Azure, implemented single sign-on and RBAC, integrated D3 for data visualization, and transformed it into a full PWA. It empowered 13,000+ users and reduced dev time significantly through modular scaling.

          PrevHealth → A modern healthcare SaaS system rebuilt with scalable microservices, GraphQL, and Redis. I streamlined patient onboarding with secure OAuth (BankID & SITHS), automated triage with a custom NLP chatbot, and ensured uptime and deployment resilience with Fargate + GitHub CI/CD.

          Map Room → A graphics-focused side project exploring how real-time light and shadow interplay in 3D spaces using WebGL. I created a browser-rendered interactive room using Blinn-Phong interpolation, Mat4 camera systems, and dynamic light sources — no libraries, just raw WebGL.

          SkySync → A cloud-native e-commerce SaaS built from scratch with MERN stack microservices deployed on AWS Lambda via Serverless Framework. I designed user/product/order/payment services, JWT auth, full CI/CD, Kubernetes support, and a responsive PWA frontend using Tailwind + React + TS.`;

        break;
      case 'contact':
        output =
          '📫 Email: askhalsa.work@gmail.com\n🔗 GitHub: https://github.com/notaskhalsa\n🔗 LinkedIn: https://linkedin.com/in/askhalsa';
        break;
      case 'collab':
        output =
          '🛠️ Let’s build something together!\n→ Send a message: askhalsa.work@gmail.com\n→ Start here: /collab';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'help':
        output = `Available commands:\n- whoami\n- skills\n- projects\n- contact\n- collab\n- clear`;
        break;
      default:
        output = `'${command}' is not recognized. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command, output }]);
  };

  return (
    <Routes>
      <Route path="/" element={<ConsoleWindow history={history} onCommand={handleCommand} />} />
      <Route path="/projects/:slug" element={<ProjectArticle />} />
      <Route path="/collab" element={<CollabPage />} />
    </Routes>
  );
};

export default App;
