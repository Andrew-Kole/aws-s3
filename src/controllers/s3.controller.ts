import { Request, Response } from "express";
import { S3Service } from "../services/s3.service";

export class S3Controller {
    private s3Service: S3Service;

    constructor() {
        this.s3Service = new S3Service();
    }

    getFiles = async (req: Request, res: Response) => {
        try {
            const files = await this.s3Service.listFiles();
            res.json(files);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    getFile = async (req: Request, res: Response) => {
        const filename = req.params.filename;

        try {
            const fileContent = await this.s3Service.getFile(filename);
            res.send(fileContent);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal server error'});
        }
    };
}