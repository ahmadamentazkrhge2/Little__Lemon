import React, { useState } from "react";
import SignInDialog from "../../auth/SignInDialog"

const SignInPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{height:"70vh"}}>
      <SignInDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </div>
  );
};

export default SignInPage;
