'use server';

import Stripe from 'stripe';
import getStripeInstance from './client';

export async function createCheckoutSession(stripePriceId: string): Promise<Stripe.Checkout.Session> {
  const stripe = getStripeInstance();
  const APP_BASE_URL = process.env.APP_BASE_URL;
  const SUCCESS_URL = process.env.SUCCESS_URL;
  if (!APP_BASE_URL || !SUCCESS_URL) {
    throw new Error('APP_BASE_URL or SUCCESS_URL environment variable is not set.');
  }

  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ['card'],
    line_items: [{ price: stripePriceId, quantity: 1 }],
    mode: 'subscription',
    success_url: `${SUCCESS_URL}`,
    cancel_url: `${APP_BASE_URL}/dashboard/pricing`,
  };

  return stripe.checkout.sessions.create(sessionParams);
}
