import {Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import "@blocknote/core/fonts/inter.css";


interface EditorProps{
    onChange:() => void;
    initialContent?: string;
    editable?: boolean;
}
async function saveToStorage(jsonBlocks: Block[]) {
    // Save contents to local storage. You might want to debounce this or replace
    // with a call to your API / database.
    localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
  }

async function loadFromStorage() {
  // Gets the previously stored editor contents.
  const storageString = localStorage.getItem("editorContent");
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}
const Editor: React.FC<EditorProps> = ({
    onChange,
    editable,
    initialContent
}) => {
    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent
        ? (JSON.parse(initialContent) as PartialBlock[]) 
        : undefined,
    });
   
    
    return (
        <BlockNoteView 
        editor={editor} 
        editable={editable} 
        theme={"light"}
        onChange={onChange}
        />
    );
};
export default Editor;