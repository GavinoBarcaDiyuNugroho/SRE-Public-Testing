import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/Components/ui/resizable"
import Editor from '@/Components/editorblocknote';
export default function User({}) {
    const [count, setCount] =  useState(0);
    return (
        <div className="text-2xl"> Tampil User { count }
        <Button>Button</Button>
        <Button>Button</Button>
        <div>
            <h1>
                _________________________________________________
            </h1>
            <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border md:min-w-[1450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-normal p-6">
          <span className="font-semibold">
            <textarea className="" id=""></textarea>
            <Editor onChange={()=>{}}/>            </span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
        </div>
        

        </div>
       
    );
}