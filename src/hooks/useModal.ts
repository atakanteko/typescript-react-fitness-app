import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  
  const toggleModal = () => setModalOpen(!isModalOpen);

  return { isModalOpen, toggleModal };
};

export default useModal;
