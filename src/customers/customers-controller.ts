import { Request, Response } from 'express';
var { nanoid } = require('nanoid');
var ID = nanoid();

export class CustomerController {
  static addCustomer(req: Request, res: Response) {
    return res.status(201).json({ message: nanoid() });
  }
}
