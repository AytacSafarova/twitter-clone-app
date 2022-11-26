import { useState } from "react";
import { atom } from "recoil";
const [modalState, setModalState] = useState(fsl)
export const modalState= atom({
key:"modalState",
default:false,
})