"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("59fa1875-6688-4244-96d2-9a9a48cf127e");
  }, []);

  return null;
};
