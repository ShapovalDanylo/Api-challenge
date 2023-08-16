import { Request, Response } from 'express';
import { DatabaseInstance } from '../../modules';

class NumberByIdController {
    async getNumberById(req: Request, res: Response) {
        try {
            const { id } = req.body;
      
            if(id < 0) {
              return res.status(400).json({ error: 'Invalid input. Value ID must be a positive integer.' });
            }
      
            if(!id || typeof id !== 'number') {
              return res.status(400).json({ error: 'The values can only be a numbers' });
            }
      
            const result = await DatabaseInstance.query('SELECT number FROM Numbers WHERE number_id = $1', [id]);
      
            if (result.rows.length === 0) {
              return res.status(404).json({ error: 'No record found with the specified ID.' });
            }
      
            const value = result.rows[0].number;
      
            return res.status(200).json({ value });
          } catch(error) {
            console.error('Error:', error);
            return res.status(500).json({ error: 'An error occurred' });
          }
    }
}

export const NumberByIdControllerInstance = new NumberByIdController();