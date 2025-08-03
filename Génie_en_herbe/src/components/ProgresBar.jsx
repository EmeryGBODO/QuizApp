import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const Example = () => {
  return <ProgressBar completed={60} />;
};

export default function ProgresBar({ current, total, percate }) {

  return (
    <>
    {/* <progress className="w[50vw]" value={current} max={total} /> */}
    <div className="flex justify-around items-center">
      <ProgressBar className="w-100" completed={percate} maxCompleted={100} />
      <span>{current} /  {total} questions</span>
    </div>
    </>
  );
}