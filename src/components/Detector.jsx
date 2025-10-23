import { useDetectorLogic } from "../logic/detectorLogic.js";

export const Detector = () => {
  const { detector } = useDetectorLogic();

  return (
    <section className="min-h-screen bg-[url('/assets/detector/index-bg-desktop-blur.png')] bg-cover bg-center rounded-b-lg">
      <img
        src="/assets/detector/ineuit-logo.png"
        alt="INEUit Logo"
        className="w-3xs pt-6 mx-auto lg:pt-10"
      />
      <div className="flex flex-col gap-2 p-4 md:mx-20 lg:flex-row lg:mx-15 lg:pt-8 xl:mx-30 2xl:mx-45">
        <div className="bg-white w-full border-1 rounded lg:w-350 xl:w-600 2xl:w-1200 2xl:h-150 ">
          <textarea
            className="bg-white border-b-1 rounded-t outline-none resize-none w-full h-95 p-2 2xl:h-132"
            placeholder="Paste text here"
            value={detector.text}
            onChange={(e) => detector.setText(e.target.value)}
          />
          <div className="flex justify-center sm:justify-end gap-2 p-2">
            <label
              htmlFor="fileInput"
              className="text-blue-600 border-2 border-blue-600 hover:border-blue-500 hover:bg-gray-200 rounded-4xl p-1.5 mb-1 w-30 h-10 font-bold text-center lg:mt-0.5"
            >
              Upload File
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept=".pdf, .doc, .txt"
            />
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold p-2 mb-1 w-30 rounded-4xl lg:mt-0.5"
              onClick={detector.handleDetect}
            >
              Detect AI
            </button>
          </div>
        </div>
        <div className="bg-white border-1 rounded w-full p-1">
          <div className="flex flex-col items-center justify-center h-full pt-16 lg:pt-24 2xl:pt-40">
            <div className="bg-white relative w-full h-35">
              <svg className="w-full h-full" viewBox="0 0 140 80">
                <path
                  d="M 20 60 A 50 50 0 0 1 120 60"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="transparent"
                  strokeLinecap="round"
                />
                <path
                  d="M 20 60 A 50 50 0 0 1 120 60"
                  stroke={detector.color}
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={detector.strokeDasharray}
                  strokeDashoffset={detector.strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pt-2">
                <span className="text-5xl font-bold text-gray-800 mt-4 ml-1">
                  {detector.percentage}%
                </span>
              </div>
            </div>
            <p className="text-xl font-semibold text-gray-800 text-center px-2 2xl:pb-24">
              {detector.evaluation}
            </p>
            <p className="text-xs font-semibold mt-2 text-justify px-2 pt-14 pb-2 lg:pt-24">
              No AI detector can guarantee perfect accuracy. Results should not
              be used as the sole basis for decisions—especially in academic or
              professional contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
