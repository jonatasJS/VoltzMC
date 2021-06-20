import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Auth0({
      clientId: 'qcPN94Hv2CqjoHVSXLJCeSBTnhPaFMre',
      clientSecret: 'U92gTVoK8OKkIf-Pd2GpFECbc2Jblk9F05ZWiMEu8Lfo83wMseORPnBoJ9gWI_Tq',
      domain: 'moveit-soxinho.us.auth0.com'
    })
  ]
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
