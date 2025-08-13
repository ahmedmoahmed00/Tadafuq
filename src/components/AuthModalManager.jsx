import { useEffect, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import LoginForm from "./LoginForm";
import Modal from "../ui/Modal";
import CreateAccountForm from "./CreateAccountForm";

function AuthModalManager({ type, closeModal }) {
  const [modalType, setModalType] = useState(type || null);

  const ref = useOutsideClick(() => setModalType(null));

  useEffect(() => {
    if (modalType !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalType]);

  if (!modalType) {
    closeModal();
    return;
  }

  return (
    <Modal ref={ref} onClose={() => setModalType(null)}>
      {modalType === "LoginForm" && (
        <LoginForm onSwitch={() => setModalType("CreateAccount")} />
      )}
      {modalType === "CreateAccount" && <CreateAccountForm />}
    </Modal>
  );
}

export default AuthModalManager;
