import React, {useState} from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'

function UploadView(props) {

  const endpoint = 'http://localhost:5000/upload';

  const [selectedFile, setSelectedFile] = useState();
  const alert = useAlert();
    
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const data = new FormData() ;
  	data.append('file', selectedFile);
  	axios.post(endpoint, data)
      .then(res => { 
      	props.onFileUploaded(res.data.filePath, res.data.imagePaths);
      })
      .catch(function (error) {
      	alert.error('Something went wrong. Please try again later');
      	console.log(error);
      });
  }

  let submitButtonClassName = 'btn btn-primary align-self-center';
  if (!selectedFile) {
    submitButtonClassName = submitButtonClassName + ' disabled';
  }

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="card bg-light p-5">
	      <div>
	      	<input type="file" name="file" onChange={(event) => onFileChange(event)} className="form-control mb-5"/>
	      </div>
	      <button onClick={onFileUpload} className={submitButtonClassName}>Upload PDF</button>
      </div>
    </div>
  );
}

export default UploadView;
