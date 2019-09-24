import React, {Component} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function getImages() {
    fetch("http://localhost:9000/images")
        .then(res => res.text())
        .then(res => {
            const data = JSON.parse(res);
           this.setState({
               images: data.resources.map(image => image.url)
        })

        })

}

function getImage() {
    return this.state.images.map((imageUrl) => {
        return <div>
            <img src={imageUrl} alt={null}/>
            {/*<p className="legend">Legend 1</p>*/}
        </div>;
    })

}

class RetrieveImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[]
        };
    }

    componentDidMount() {
        getImages.call(this);
    }

    render()
        {
            console.log('images>>>>>>>>>>>', this.state.images);
            return (
                <div>
                    <h3>Retrieved Images From Cloud</h3>
                    <Carousel
                        width ={'100%'}
                        autoPlay ={true}
                        dynamicHeight={true}
                        centerMode={true}
                        centerSlidePercentage={100}
                        height={'100%'}
                    >
                        {this.state.images.length > 0 && getImage.call(this)}
                    </Carousel>
                </div>
            )

        }

    }
export default RetrieveImages;

