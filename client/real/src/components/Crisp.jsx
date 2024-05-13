import React, { useEffect } from 'react';

const Crisp = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "2c9742d5-04e7-44ba-a6aa-70c37373dac5";
    const d = document;
    const s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);

    // Clean up function
    return () => {
      // Remove Crisp chat script when component unmounts
      const crispScript = d.getElementById("crisp-script");
      if (crispScript) {
        crispScript.remove();
      }
    };
  }, []);

  return null; // Or you can return any UI component here if needed
};

export default Crisp;
