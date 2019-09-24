import React, {Component} from 'react';
import ImageUploader from 'react-images-upload';
import { uploadImage } from '../services/api';

function handleUpload() {
    const selectedImage = this.state.pictures[0];
    return uploadImage(selectedImage);
}


function getButton() {
    return <button className="button" onClick={() => handleUpload.call(this)}>Upload</button>;
}

class CreateButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            images:[]
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    fileSizeError={"file size is too large"}
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
                {getButton.call(this)}
            </div>
        );
    }
}


export default CreateButton