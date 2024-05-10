import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default class CustomerService {
  static async create() {
    console.log();
    console.log(process.env.STRIPE_SECRET_KEY);
    console.log();

    await stripe.customers.create({
      name: 'Jenny Rosen',
      email: 'jennyrosen@example.com',
    });
  }
}
