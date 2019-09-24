import request from 'superagent';
import axios from 'axios'


export function uploadImage(image) {
    let upload = request.post('https://api.cloudinary.com/v1_1/dzlcsebfz/upload')
        .field('upload_preset', 'uploadimage')
        .field('file', image)
        .field('tags', 'andy');
    upload.end((err, response) => {
        if(err){
            console.log('Error occured', err)
        }
        console.log('response', response);
    });
}

export function retrieveImage() {
    const Url = 'https://621376332357926:8YoIpbDFipKpHfd54S56Y2Ou0Lg@api.cloudinary.com/v1_1/dzlcsebfz/resources/image';
    return axios.get(Url)
           .then((response) => {
               console.log('response', response);
               return response
           })
           .catch(err => console.log('err', err));
    //    const urls = images.then(list =>
    //        list.data.resources
    //            .forEach(pic => pic.url));
    // console.log('urls',urls);
       // const imageUrl = Object.values(urls);
       // console.log('imageUrl', imageUrl);
       //         .forEach(url => axios.get(url)
       //             .then((data) => {console.log('data',data); return data}).catch(err => err)));
       // console.log('urls', urls.then(images => console.log('images', images)));

}
setTimeout(retrieveImage(), 200);
