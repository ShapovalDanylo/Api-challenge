import { Request, Response } from 'express';
import { AzureBlobStorageInstance } from '../../modules';

class LargeFileController {
    async getLargeFile(req: Request, res: Response) {
        try {
            const { container, file } = req.params;
        
            if (!container || !file) {
                return res.status(400).json({ error: 'Container and file names are required' });
            }
            const fileStream = await AzureBlobStorageInstance.getFileStream(container, file);
    
            if (!fileStream) {
                return res.status(404).json({ error: 'File not found' });
            }
        
            const fileExtension = file.split('.').pop();
            let contentType = '';
      
            switch (fileExtension) {
              case 'pdf':
                contentType = 'application/pdf';
                break;
              case 'jpg':
              case 'jpeg':
                contentType = 'image/jpeg';
                break;
              case 'png':
                contentType = 'image/png';
                break;
              default:
                contentType = 'application/octet-stream';
                break;
            }
      
            res.setHeader('Content-Disposition', `attachment; filename=${file}`);
            res.setHeader('Content-Type', contentType);
            
            fileStream.pipe(res);
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred while fetching file content' });
        }
      }
}

export const LargeFileControllerInstance = new LargeFileController();