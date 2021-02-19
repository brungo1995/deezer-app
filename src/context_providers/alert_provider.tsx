import React, { useState, createContext } from "react";
import AlertModal from "../Components/generic/Modal";
import toastr from "toastr";

interface contextType {
    error(message: string): void,
}


export const AlertContext = createContext<contextType>({} as contextType);

export function AlertProvider({ children }: React.PropsWithChildren<{}>) {
    const [message, setMessage] = useState<string>('');
    const [showModal, setShowModal] = useState(false);

    function error(message: string) {
        setMessage(message);
        setShowModal(true)
    }

    // const onClose = () => {

    //     debugger
    //     setMessage("");
    //     setShowModal(false)

    // }

    return (
        <AlertContext.Provider
            value={{
                error,
            }}
        >
            {
                showModal ?
                    <AlertModal
                        message={<span>{message}</span>}
                        onOk={() => { }}
                        onClose={setShowModal}
                    />
                    :
                    null
            }
            {children || null}
        </AlertContext.Provider>
    );
}