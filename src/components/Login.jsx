import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useOutsideClick } from "../hooks/useOutsideClick";
import LoginForm from "./LoginForm";
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
