import React from 'react'
interface RegisterModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegisterModal: React.FC<RegisterModalProps>= ({
    setIsOpen
}) => {
  return (
    <div>RegisterModal</div>
  )
}
