'use client';

import React from 'react'

function TabContent({activeTab, id, children}) {
  return (
    activeTab === id ?  <div>{children}</div> : null
   
  )
}

export default TabContent