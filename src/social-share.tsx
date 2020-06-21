import React, { FunctionComponent } from 'react';

export const SocialShare: FunctionComponent<{ title?: string }> = ({
  title = 'Gostou? Compartilhe esse artigo ;)',
}) => {
  return <div className="social-share">{title}</div>;
};
