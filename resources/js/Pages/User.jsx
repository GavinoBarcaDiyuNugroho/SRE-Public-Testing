import { useState } from 'react';
import { Button } from "@/components/ui/button"
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

export default function User({}) {
    const [count, setCount] =  useState(0);
    const editor = useCreateBlockNote();
    return (
        <div className="text-2xl"> Tampil User { count }
        
        <Button>Button</Button>
        <BlockNoteView editor={editor} />

        </div>
       
    );
}