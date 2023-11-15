import express, {Router} from 'express';
import { S3Controller } from "../controllers/s3.controller";

const router: Router = express.Router();
const s3Controller = new S3Controller();

router.get('/files', s3Controller.getFiles);
router.get('/files/:filename', s3Controller.getFile);

export default router;