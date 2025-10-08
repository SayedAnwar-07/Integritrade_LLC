"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ian from "../../public/ian.jpg";

export default function LeadershipProfile() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <Image src={ian} alt="Ian Ziyar" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <Image src={ian} alt="Ian Ziyar" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
