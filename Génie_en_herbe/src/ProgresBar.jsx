import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const Example = () => {
  return <ProgressBar completed={60} />;
};

export default function ProgresBar({ current, total }) {

  return (
    <>
    {/* <progress className="w[50vw]" value={current} max={total} /> */}
    <div className="flex justify-around items-center">
      <ProgressBar className="w-100" completed={current} maxCompleted={total} />
      <span>{current}/  {total} questions</span>
    </div>
    </>
  );
}