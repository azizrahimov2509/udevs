"use client";
import React, { useEffect } from "react";

declare global {
  interface Window {
    replainSettings: any;
  }
}

const ReplainWidget: React.FC = () => {
  useEffect(() => {
    window.replainSettings = { id: "01895215-6f89-47a7-9674-318c6beb84c2" };
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://widget.replain.cc/dist/client.js";

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }
  }, []);

  return null;
};

export default ReplainWidget;
