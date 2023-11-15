import AWS from "aws-sdk"
import {s3AccessParams} from "../config/s3.access.params";
import {AWS_S3_BUCKET_NAME} from "../config/environment.variables";

export class S3Service {
    private s3: AWS.S3;
    private bucketName: string;
    private prefix: string;

    constructor() {
        this.s3 = new AWS.S3(s3AccessParams);
        this.bucketName = AWS_S3_BUCKET_NAME;
        this.prefix = "images/";
    }

    listFiles = async () => {
        const params = {
            Bucket: this.bucketName,
            Prefix: this.prefix,
        };
        const data = await this.s3.listObjectsV2(params).promise();
        return data.Contents.map((item) => item.Key);
    };

    getFile = async (filename: string) => {

        const params = {
            Bucket: this.bucketName,
            Key: this.prefix + filename,
        };
        const data = await this.s3.getObject(params).promise();
        return data.Body;
    };
}

