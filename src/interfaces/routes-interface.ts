import React from 'react';

export interface IRoutes {
  icon: React.ReactNode;
  name: string;
  url: string;
  childrens?: IRoutes[];
}
