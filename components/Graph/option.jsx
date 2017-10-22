import React from 'react';
 
const Option = ({ value, children }) => 
  (<option className="text-center" value={value}>
    {children}
  </option>);

  export default Option;