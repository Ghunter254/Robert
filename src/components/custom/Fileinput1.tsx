import { useState } from "react";
import axios from "axios";
import Selector from "../shared/Selector";

type Props = {
  Title: string;
  onFilesSelect?: (files: File[]) => void;
};

function Fileinput1({ Title, onFilesSelect }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [msg, setMsg] = useState<string | null>(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const Allowedfiles = [".stl"];

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => {
      const updated = [...prev, ...newFiles];
      onFilesSelect?.(updated);   // pass all files upward
      return updated;
    });
  }


  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleUpload() {
    if (files.length === 0) {
      setMsg("No file selected");
      return;
    }

    const invalid = files.some(
      (file) =>
        !Allowedfiles.some((ext) =>
          file.name.toLowerCase().endsWith(ext)
        )
    );

    if (invalid) {
      setMsg("Invalid file type. Only .stl allowed");
      return;
    }

    const fd = new FormData();
    files.forEach((file, i) => fd.append(`file${i + 1}`, file));

    setMsg("Upload in progress...");
    setProgress({ started: true, pc: 0 });

    try {
      const res = await axios.post("https://httpbin.org/post", fd, {
        onUploadProgress: (e) => {
          setProgress({
            started: true,
            pc: Math.round((e.loaded / e.total!) * 100),
          });
        },
      });

      setMsg("File upload successful");
      console.log(res.data);
    } catch (err) {
      setMsg("Error in upload. Please try again");
      console.error(err);
    }
  }

  return (
    <div className="Fileinput1 text-center">
      <h3 className="mb-4">{Title}</h3>

      {/* Upload Area */}
      <div className="w-full max-w-2xl border-2 border-dashed border-gray-400 rounded-md p-4 flex gap-6 mx-auto">
        {/* File input */}
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="fileInput"
            className="cursor-pointer bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600"
          >
            Choose Files
          </label>
          <input
            id="fileInput"
            type="file"
            multiple
            accept=".stl"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* File list */}
        <div className="flex-1 text-left max-h-32 overflow-y-auto pr-2">
          {files.length === 0 ? (
            <p className="text-gray-500">No files selected</p>
          ) : (
            <ul className="space-y-2">
              {files.map((file, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-800 px-3 py-1 rounded"
                >
                  <span className="text-sm text-white">{file.name}</span>
                  <button
                    onClick={() => removeFile(idx)}
                    className="ml-3 text-red-400 hover:text-red-600 font-bold"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Upload button & progress */}
      <div className="mt-6">
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
        {msg && <p className="mt-2">{msg}</p>}
        {progress.started && <p>Progress: {progress.pc}%</p>}
      </div>
    </div>
  );
}

export default Fileinput1;
