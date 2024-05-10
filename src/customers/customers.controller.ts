import { Request, Response } from 'express';
import { CustomError } from '../utils/error.handler';
import CustomerService from './customer.service';
const { nanoid } = require('nanoid');
const ID = nanoid();

export class CustomerController {
  static async addCustomer(req: Request, res: Response) {
    await CustomerService.create();
    return res.status(201).json({ message: nanoid() });
  }

  static fetchCustomers(req: Request, res: Response) {
    return res.status(201).json({ message: nanoid() });
  }
}
