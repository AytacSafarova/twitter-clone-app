import { useState } from "react";
import { atom } from "recoil";
const [modalState, setModalState] = useState
export const modalState= atom({
key:"modalState",
default:false,
})