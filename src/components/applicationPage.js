import React from "react";
import UploadButton from '../components/uploadImages';
import RetrieveImages from '../components/retrieveImages';

const ApplicationPage = () => (
    <div className= "App-link" >
        <h1>Cloud based Picture Gallery</h1>
        <p>A place where you can upload your picture and view them.</p>
        <div>
            <UploadButton/>
            <RetrieveImages/>
        </div>
    </div>
);

export default ApplicationPage;
