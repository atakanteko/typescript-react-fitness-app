import { useState } from "react";

const useModal = () => {
  const [isOpenModal, setModalOpen] = useState<boolean>(false);
  
  const toggleModal = () => setModalOpen(!isOpenModal);

  return { isOpenModal, toggleModal };
};

export default useModal;
