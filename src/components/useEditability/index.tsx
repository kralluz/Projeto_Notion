// useEditability.js
import { useState } from 'react';

const useEditability = (initialValue = true) => {
    const [isEditable, setIsEditable] = useState(initialValue);

    const toggleEditability = () => setIsEditable(!isEditable);

    return { isEditable, toggleEditability };
};

export default useEditability;
