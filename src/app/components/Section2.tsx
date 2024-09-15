import React, { useState } from "react";

type KeyItem = {
  id: number;
  title: string;
  content: string;
};

const Section2: React.FC = () => {
  const keys: KeyItem[] = [
    { id: 1, title: "Issue 1", content: "Details about Issue 1..." },
    { id: 2, title: "Issue 2", content: "Details about Issue 2..." },
    { id: 3, title: "Issue 3", content: "Details about Issue 3..." },
    { id: 4, title: "Issue 4", content: "Details about Issue 4..." },
    { id: 5, title: "Issue 5", content: "Details about Issue 5..." },
    { id: 6, title: "Issue 6", content: "Details about Issue 6..." },
  ];

  // Initialize selectedKey with the first key item
  const [selectedKey, setSelectedKey] = useState<KeyItem>(keys[0]);

  return (
    <section className="p-2 h-screen flex justify-center items-center selection:bg-customGreen bg-black bg-opacity-60 border-t-8 border-yellow-300">
      <div className="p-4 w-full min-h-fit">
        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl xsm:text-3xl font-semibold text-center text-lime-200 mb-7 py-3">
          Key Issues
        </h2>
        <div className="flex flex-col md:flex-row sm:flex-row xsm:flex-row xsm:text-xs justify-center text-4xl">
          {/* Keys List */}
          <div className="md:w-2/12 sm:w-3/12 xsm:flex-row xsm:w-2/5 md:text-xl">
            {keys.map((key) => (
              <button
                key={key.id}
                onClick={() => setSelectedKey(key)}
                onDoubleClick={() => setSelectedKey(null)}
                className={`w-full text-left font-bold p-5 rounded-l-3xl transition-colors ${
                  selectedKey?.id === key.id
                    ? "bg-black bg-opacity-75 text-lime-200"
                    : "text-lime-200 hover:bg-black hover:bg-opacity-75 hover:blur-none rounded-r-3xl"
                }`}
              >
                {key.title}
              </button>
            ))}
          </div>

          {/* Details Section */}
          {keys.map((key, index) => (
            <div
              className={`md:w-2/4 sm:w-2/4 xsm:w-3/4 xsm:text-xs rounded-sm ${
                selectedKey?.id === key.id
                  ? "text-lime-200 scale-y-110"
                  : "text-green-800 hover:bg-lime-200 hidden"
              }`}
              key={index}
            >
              {selectedKey && selectedKey.id === key.id ? (
                <div className="bg-black bg-opacity-75 p-6 h-full rounded-r-3xl rounded-sm">
                  <h2 className="text-2xl font-bold mb-4">{selectedKey.title}</h2>
                  <p>{selectedKey.content}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
