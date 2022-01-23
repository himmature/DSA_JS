var encode = function(longUrl) {
    const [protocol, url] = longUrl.split('//');
    const encodedURL = Buffer.from(url, 'binary').toString('base64');
    const prefix = 'tinyurl.com';
    return `${protocol}//${prefix}/${encodedURL}`
};


var decode = function(shortUrl) {
    const [protocol, url] = shortUrl.split('//');
    const [prefix, encodedURL] = shortUrl.split('com/')
    const decodedURL = Buffer.from(encodedURL, 'base64').toString('binary');
    return `${protocol}//${decodedURL}`
};

const url = "https://bone.example.net/?brother=agreement&beds=bird";
const result = decode(encode(url));
console.log(result);