import React, { useState, useRef, useEffect } from "react";
import FileUploadIcon from "../../assets/icons/FileUpload.svg";
import "./styles.css";
import UploadIcon from "../../assets/icons/Upload.svg";
import UploadTextIcon from "../../assets/icons/UploadText.svg";

const UploadInvoice = ({ formikProps, initialState }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const dataURLToFile = (dataURL, filename) => {
    const arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  useEffect(() => {
    const base64File = localStorage.getItem('fileData');

    if (base64File) {
      const file = dataURLToFile(base64File, "retrievedFile.jpg");

      const fileURL = URL.createObjectURL(file);
      setSelectedFile(fileURL)
    }
  }, [])

  return (
    <>
      <div className="upload-invoice">
        <div className="heading">
          <div>Upload Your Invoice</div>
          <div>To auto-populate fields and save time</div>
        </div>
        <img src={FileUploadIcon} alt="file-upload" className="file-upload" />

        <div className="upload-btn">
          <form>
            <input
              id="uploadedFile"
              name="uploadedFile"
              onChange={e => {
                setSelectedFile(e.target.files[0])
                const reader = new FileReader();

                reader.readAsDataURL(e.target.files[0]);

                reader.onloadend = () => {
                  const base64File = reader.result;

                  localStorage.setItem('fileData', base64File);
                };
                formikProps.setFieldValue('uploadedFile', e.target.files[0])
              }}
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </form>

          <button onClick={() => fileInputRef.current.click()}>
            <div>Upload File</div>
            <img src={UploadIcon} alt="upload-icon" />
          </button>
        </div>

        {selectedFile && <div className="file-name">Selected: {selectedFile.name}</div>}

        <img
          src={UploadTextIcon}
          alt="upload-icon"
          style={{ cursor: "pointer" }}
          onClick={() => fileInputRef.current.click()}
        />
      </div>
    </>
  );
};

export default UploadInvoice;
