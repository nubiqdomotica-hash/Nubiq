import React from 'react';

const WhatsAppIcon = ({ size = 28, className = '' }) => (
  <div
    className={`flex items-center justify-center rounded-full bg-green-500`}
    style={{ width: size + 8, height: size + 8 }}
  >
    <img
      src="https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/9a4cbcd1dc839aa51845527c98f4ed0e.png"
      alt="WhatsApp Icon"
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={{ minWidth: size, minHeight: size }}
    />
  </div>
);

export default WhatsAppIcon;