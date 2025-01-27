'use client'

import { useState, useEffect } from 'react';

import { TopBar } from './TopBar';
import { Backdrop } from './BackDrop';
import { CollapsedSideBar } from './CollapsedSideBar';
import { ExpandedSideBar } from './ExpandedSideBar';

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <>
            <Backdrop isOpen={isOpen} />
            <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <ExpandedSideBar isOpen={isOpen} />
            <CollapsedSideBar />
        </>
    );
};
