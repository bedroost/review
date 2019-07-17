/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');

// Load the SDK for JavaScript
const AWS = require('aws-sdk');

// Set the region
AWS.config.update({
  region: 'us-west-1',
});

const credentials = new AWS.SharedIniFileCredentials({
  profile: 'default',
});
AWS.config.credentials = credentials;

// Create S3 service object
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
});

// call S3 to retrieve upload file to specified bucket
const uploadParams = {
  Bucket: process.argv[2],
  Key: '',
  Body: '',
};
const file = process.argv[3];

// Configure the file stream and obtain the upload parameters
const fileStream = fs.createReadStream(file);
fileStream.on('error', err => (
  console.log('File Error', err)
));
uploadParams.Body = fileStream;
uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload(uploadParams, (err, data) => {
  if (err) {
    console.log('Error', err);
  } if (data) {
    console.log('Upload Success', data.Location);
  }
});
