import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID || 'bNZUDMlccMipJmOPkMsmnyMWKSEvWnpU',
      clientSecret: process.env.AUTH0_CLIENT_SECRET || 'fT2kR3O6tV2U-v6ptbE-npLJhBVMxrTV9nq01P83PApxcvnTEZSEcyNWzWhQwqBG',
      domain: process.env.AUTH0_CLIENT_DOMAIN || 'moveit-soxinho.us.auth0.com'
    })
  ]
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
