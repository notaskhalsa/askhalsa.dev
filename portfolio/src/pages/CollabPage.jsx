import React from 'react';

const CollabPage = () => {
  return (
    <div className="bg-[#0d1117] text-green-400 font-mono p-8 max-w-4xl w-4/5 mx-auto mt-12 rounded shadow border border-gray-600">
      <pre className="whitespace-pre-wrap text-md leading-relaxed">
{`"~/collab/initiate.txt"
──────────────────────────────────────────────────────────

# Collaborate With Me

Whether you're building tools, platforms, or pushing tech boundaries,
I'd love to explore it with you.

🔗 I specialize in:
  - Developer tooling
  - Frontend architecture
  - Cloud-native systems

💡 Pitch me an idea or say hi:
  → askhalsa.work@gmail.com

📌 Available for:
  - Freelance/contract collaborations
  - OSS contributions
  - Startups solving real-world challenges

──────────────────────────────────────────────────────────
-- INSERT --
`}
      </pre>
    </div>
  );
};

export default CollabPage;
