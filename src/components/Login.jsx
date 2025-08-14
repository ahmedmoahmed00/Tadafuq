import { useState } from "react";
import Button from "../ui/Button";
import AuthModalManager from "./AuthModalManager";

function Login({ className }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={className}>
      <Button
        type="Primary"
        statue="Hover"
        onClick={() => setIsModalOpen(true)}
      >
        التسجيل
      </Button>
      {isModalOpen && (
        <AuthModalManager
          type={"LoginForm"}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Login;
