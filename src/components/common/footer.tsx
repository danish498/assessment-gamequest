import { Icons } from "@/assets/icons";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-40 mb-6">
      <div className="flex gap-4">
        <p>Privacy Notice</p>
        <p>Terms of Service</p>
        <p>Cookie Policy</p>
        <p>Company Information</p>
        <p>Cookie Preferences</p>
      </div>

      <Separator className="my-6" />

      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-3">
          <p className="text-gray-400">
            Copyright © GameQuest, Inc. All rights reserved
          </p>
        </div>

        <div className="flex gap-2">
          <Icons.twitter className="hover:cursor-pointer" />
          <Icons.facebook className="hover:cursor-pointer" />
          <Icons.instagram className="hover:cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
