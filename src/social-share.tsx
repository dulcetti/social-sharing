import React from 'react';
import { ISocialShare } from './social-share.interface';

export const SocialShare = ({ title = 'Gostou? Compartilhe esse artigo ;)' }: ISocialShare) => {
  return <div className='social-share'>{title}</div>;
};
