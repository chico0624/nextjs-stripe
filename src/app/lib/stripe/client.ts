'use server';

import Stripe from 'stripe';


let stripeInstance: Stripe;

const getStripeInstance = () => {
    if (!stripeInstance) {
        const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
        if (!stripeSecretKey) {
            throw new Error('Stripe secret key is not set');
        }
        const apiVersion = '2024-12-18.acacia';
        stripeInstance = new Stripe(stripeSecretKey, { apiVersion });
    }
    return stripeInstance;
}

export default getStripeInstance;