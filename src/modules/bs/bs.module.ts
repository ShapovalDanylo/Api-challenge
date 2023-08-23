import { BlobServiceClient } from '@azure/storage-blob';
import { streamToString } from '../../helpers';

interface BlobStorage {
    getFileContent(containerName: string, fileName: string): Promise<string>;
    getFileStream(containerName: string, fileName: string): Promise<NodeJS.ReadableStream | null>;
}

class AzureBlobStorage implements BlobStorage {
    private blobServiceClient: BlobServiceClient;

    constructor(connectionString: string) {
        this.blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    }

    async getFileContent(containerName: string, fileName: string): Promise<string> {
        const containerClient = this.blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    
        const response = await blockBlobClient.download(0);
        const content = await streamToString(response.readableStreamBody!);
    
        return content;
    }

    async getFileStream(containerName: string, fileName: string): Promise<NodeJS.ReadableStream | null> {
        const containerClient = this.blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    
        const response = await blockBlobClient.download(0);
        return response.readableStreamBody!;
    }
}

export const AzureBlobStorageInstance = new AzureBlobStorage(process.env.AZURE_BS_CONNECTION_STRING as string);