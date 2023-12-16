const uploadSingleFile = async (fileObject) => {
    let timeNow = Date.now();
    console.log(__dirname + "../public/images/upload/" + fileObject.name + timeNow);
    let uploadPath = __dirname  + fileObject.name + timeNow;

    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null,
        };
    } catch (err) {
        console.log('>>> CHECK ERR: ', err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err),
        };
    }
};

const uploadMultipleFiles = () => {};

module.exports = { uploadSingleFile, uploadMultipleFiles };
