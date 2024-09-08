import React, { useState } from "react";

type KeyItem = {
  id: number;
  title: string;
  content: string;
};

const Section2: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<KeyItem | null>(null);

  const keys: KeyItem[] = [
    { id: 1, title: "Issue 1", content: "Details about Issue 1..." },
    { id: 2, title: "Issue 2", content: "Details about Issue 2..." },
    { id: 3, title: "Issue 3", content: "Details about Issue 3..." },
    { id: 4, title: "Issue 4", content: "Details about Issue 4..." },
    { id: 5, title: "Issue 5", content: "Details about Issue 5..." },
    { id: 6, title: "Issue 6", content: "Details about Issue 6..." },
  ];

  return (
    <section className="p-2 h-screen flex justify-center items-center  selection:bg-customGreen">
      <div className="p-4 w-full ">
        <h2 className="text-5xl font-semibold mb-4 text-center">Key Issues</h2>
        <div className="flex flex-col md:flex-row justify-center">
          {/* Keys List */}
          <div className="md:w-1/6 ">
            {keys.map((key) => (
              <button
                key={key.id}
                onClick={() => setSelectedKey(key)}
                className={`w-full text-left font-bold p-5 rounded-l-3xl transition-colors border-b-2 ${
                  selectedKey?.id === key.id
                    ? "bg-gray-900 text-lime-100  "
                    : " text-lime-100  hover:bg-gray-900 bg-opacity-5 blur-sm hover:blur-none"
                }`}
              >
                {key.title}
              </button>
            ))}
          </div>

          {/* Details Section */}
          {keys.map((key) => (
          <div className={`md:w-2/4 rounded-full${
                  selectedKey?.id === key.id
                    ? "bg-gray-900 text-lime-100 "
                    : "text-lime-100  hover:bg-gray-900 hidden "
                }`}>
            {selectedKey ? (
              <div className="bg-gray-900 p-6 h-full rounded-r-3xl ">
                <h2 className="text-2xl font-bold mb-4">{selectedKey.title}</h2>
                <p>{selectedKey.content}</p>
              </div>
            ) : (
              <div className="bg-gray-200  p-6 rounded-lg h-full flex items-center justify-center">
                <p>Select a key to view details</p>
              </div>
            )}
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
