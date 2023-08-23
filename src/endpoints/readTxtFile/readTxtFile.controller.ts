import { Request, Response } from 'express';
import { AzureBlobStorageInstance } from '../../modules';

class ReadTxtFileController {
    async getFileContent(req: Request, res: Response) {
        try {
            const { container, file } = req.params;
            const fileContent = await AzureBlobStorageInstance.getFileContent(container, file);

            return res.status(200).json({ fileContent });
        } catch(error) {
            return res.status(500).json({ error: 'An error occurred while fetching file content' });
        }
    }
}

export const ReadTxtFileControllerInstance = new ReadTxtFileController();