import BottomNav from "@/components/bottom-nav";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";

import { PlusIcon } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateThread } from "@/hooks/use-create-thread";
import ThreadForm from "@/components/thread-form";

const AppLayout = () => {
  const thread = useCreateThread();
  return (
    <div className="app">
      <main>
        <SidebarNav onCreateClick={thread.openDailog}/>
        <Header />
        <div className="w-full md:max-w-4xl mx-auto bg-red-400">
          <Outlet />
        </div>
        <BottomNav onCreateClick={thread.openDailog}/>
        <Dialog open={thread.open} onOpenChange={thread.setOpen}>
          <DialogContent className="md:max-w-lg p-0 bg-transparent border-none shadow-none gap-0" showCloseButton={false}>
            <DialogHeader className="px-5 py-4 border-b border-black/10 bg-white rounded-t-2xl">
              <div  className="w-full flex justify-between items-center">
                  <button className="text-sm text-gray-800 hover:text-black cursor-pointer" onClick={thread.closeDailog}>Cancel</button>
                  <DialogTitle className="text-sm font-bold ">New Thread</DialogTitle>
                  <DialogDescription className="sr-only">Thread Form</DialogDescription>
                  <div className="w-12"/>
              </div>
            </DialogHeader>
            <ThreadForm/>
          </DialogContent>
        </Dialog>
        <div className="hidden md:flex fixed bottom-8 right-8 ">
          <button className="bg-white border border-gray-400 px-6 py-4 rounded-lg cursor-pointer hover:shadow-md group transition-colors duration-150" onClick={thread.openDailog}>
            <PlusIcon className="text-gray-700 group-hover:text-black " size={24} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
