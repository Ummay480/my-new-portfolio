// TabButton.tsx
import React from "react";

interface TabButtonProps {
    selectTab: () => void;
    active: boolean;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ selectTab, active, children }) => {
    return (
        <button
            onClick={selectTab}
            className={`px-4 py-2 rounded-lg ${active ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
        >
            {children}
        </button>
    );
};

export default TabButton;
