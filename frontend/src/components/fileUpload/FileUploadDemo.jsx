import React, { useState } from "react";
import { FileUpload } from "./file-upload";
import {BackgroundGradientDemo} from "../card/BackgroundGradientDemo";

export function FileUploadDemo() {
  const [flag, setFlag] = useState(false);
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
    setFlag(true);
  };

  return (
    (<div
      className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
      {flag && <BackgroundGradientDemo uploadedFile={files[0]}/>}
    </div>)
  );
}
