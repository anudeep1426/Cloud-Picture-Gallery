import request from 'superagent';



// cloudinary.config({
//     cloud_name: "dzlcsebfz",
//     api_key: "621376332357926",
//     api_secret: "8YoIpbDFipKpHfd54S56Y2Ou0Lg"
// });

export function uploadImage(image) {
    let upload = request.post('https://api.cloudinary.com/v1_1/dzlcsebfz/upload')
        .field('upload_preset', 'uploadimage')
        .field('file', image);
    upload.end((err, response) => {
        if(err){
            console.log('Error occured', err)
        }
        console.log('response', response);
    });
}

// export function retrieveImage() {
//     return cloudinary.v2.url('https://res.cloudinary.com/dzlcsebfz/image/upload/v1569266501/qc31ps8k8chwuec16nm0.jpg',
//         {width: 100, height: 150, crop: "fill"});
// }