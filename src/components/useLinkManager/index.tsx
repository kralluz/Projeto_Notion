// useLinkManager.js
import { Editor } from '@tiptap/react';
import { useState } from 'react';

const useLinkManager = () => {
    const [isLinkInputVisible, setIsLinkInputVisible] = useState(false);
    const [linkInputValue, setLinkInputValue] = useState("");

    const toggleLinkInput = () => setIsLinkInputVisible(!isLinkInputVisible);
    const setLink = (editor: Editor) => {
        // Lógica para definir o link no editor
    };

    return {
        isLinkInputVisible,
        linkInputValue,
        setLinkInputValue,
        toggleLinkInput,
        setLink
    };
};

export default useLinkManager;
