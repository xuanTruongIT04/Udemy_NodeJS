const path = require('path');
const express = require('express');

const uploadSingleFile = async (fileObject) => {
    let timeNow = Date.now();
    let fileName = path.parse(fileObject.name).name;
    let ext = path.parse(fileObject.name).ext;
    let uploadPath = path.join(
        __dirname,
        '../public/images/',
        fileName + timeNow + ext
    );

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

const uploadMultipleFiles = async (listFileObject) => {
    try {
        let timeNow = Date.now();
        console.log(listFileObject);
        for (let i = 0; i < listFileObject.length; i++) {
            let fileName = path.parse(listFileObject[i].name).name;
            let ext = path.parse(listFileObject[i].name).ext;

            let uploadPath = path.join(
                __dirname,
                '../public/images/',
                fileName + timeNow + ext
            );
            await listFileObject[i].mv(uploadPath);
        }
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

module.exports = { uploadSingleFile, uploadMultipleFiles };
