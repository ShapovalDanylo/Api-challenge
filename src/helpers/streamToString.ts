export async function streamToString(readableStream: NodeJS.ReadableStream): Promise<string> {
    return new Promise((resolve, reject) => {
    const chunks: any[] = [];
    readableStream.on('data', (data) => {
        chunks.push(data.toString());
    });
    readableStream.on('end', () => {
        resolve(chunks.join(''));
    });
    readableStream.on('error', reject);
    });
}