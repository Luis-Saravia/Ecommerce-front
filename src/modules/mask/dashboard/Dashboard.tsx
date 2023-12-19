import React from 'react'
import { Article } from '../../../components/common/Article/Article';
import { PAGE_CONTENT_DASHBOARD } from './utils/contants';

export function Dashboard() {
  return (
    <div>
      <h3>MISIÓN</h3>
      <Article props={PAGE_CONTENT_DASHBOARD.mission}/>
      
      {/* <h3>SOBRE NOSOTROS</h3> */}
      {/* agregar sección */}

    </div>
  )
}