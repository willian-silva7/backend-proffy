import { Request, Response } from 'express';

class ClassesController {
  async create(request: Request, response: Response): Promise<any> {
    return response.json({ message: true });
  }
}

export default ClassesController;
