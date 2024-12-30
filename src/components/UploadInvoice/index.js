import React, { useState, useRef, useEffect } from "react";
import FileUploadIcon from "../../assets/icons/FileUpload.svg";
import "./styles.css";
import UploadIcon from "../../assets/icons/Upload.svg";
import UploadTextIcon from "../../assets/icons/UploadText.svg";

const UploadInvoice = ({ formikProps, initialState }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setSelectedFile(formikProps.values.uploadedFile)
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
                setSelectedFile(e.target.files[0].name)
                formikProps.setFieldValue('uploadedFile', e.target.files[0].name)
              }}
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </form>

          <button onClick={(e) => {
            e.preventDefault();
            fileInputRef.current.click()
          }}>
            <div>Upload File</div>
            <img src={UploadIcon} alt="upload-icon" />
          </button>
        </div>

        {selectedFile && <div className="file-name">Selected: {selectedFile}</div>}

        <img
          src={UploadTextIcon}
          alt="upload-icon"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            fileInputRef.current.click()
          }}
        />
      </div>
    </>
  );
};

export default UploadInvoice;
