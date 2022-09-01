export const Url = ( ) => {

    let url="";
    if (process.env.NODE_ENV==="production"){
        url = "https://dinamo-anatolia.herokuapp.com"
    }
    else{
        url = "https://dinamo-anatolia.herokuapp.com"
    }

    return url;
}