import React from "react";
import Wrapper from "./Features.styled";

import Feature from "./Feature";

import { ReactComponent as IconAccess } from "../../assets/images/icon-access-anywhere.svg";
import { ReactComponent as IconSecurity } from "../../assets/images/icon-security.svg";
import { ReactComponent as IconCollaborations } from "../../assets/images/icon-collaboration.svg";
import { ReactComponent as IconAnyFile } from "../../assets/images/icon-any-file.svg";

const Features = () => {
  return (
    <Wrapper>
      <Feature
        icon={<IconAccess className="feature__icon" />}
        title="Access your files, anywhere"
        text="The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere."
      />
      <Feature
        icon={<IconSecurity className="feature__icon" />}
        title="Security you can trust"
        text="2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files."
      />
      <Feature
        icon={<IconCollaborations className="feature__icon" />}
        title="Real-time collaboration"
        text="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
      />
      <Feature
        icon={<IconAnyFile className="feature__icon" />}
        title="Store any type of file"
        text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared."
      />
    </Wrapper>
  );
};

export default Features;
