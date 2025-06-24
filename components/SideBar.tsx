'use client';
import { IconCalendar, IconEyeDollar, IconHome, IconImageInPicture, IconMoneybag, IconTool } from "@tabler/icons-react";
import { SidebarBody,SidebarLink,Sidebar } from "./ui/sidebar";
import { useState } from "react";

export default function SideBar() {
    const [open, setOpen] = useState(true);
    const links = [
        {
            label: "Home",
            href: "/",
            icon: (
                <IconHome
                    className="h-6 w-6 shrink-0"
                    width={24}
                    height={24}
                    aria-hidden="true"
                />
            )
        },
        {
            label: "Availability",
            href: "/availability",
            icon: (
                <IconCalendar
                    className="h-6 w-6 shrink-0"
                    width={24}
                    height={24}
                    aria-hidden="true"
                />
            )
        },
        {
            label: "Billing",
            href: "/billing",
            icon:(
                <IconMoneybag
                    className="h-6 w-6 shrink-0"
                    width={24}
                    height={24}
                    aria-hidden="true"
                />
            )
        },
        {
            label: "Account",
            href: "/account",
            icon: (
                <IconImageInPicture
                    className="h-6 w-6 shrink-0"
                    width={24}
                    height={24}
                    aria-hidden="true"
                />
            )
        }
    ]
    return (
        <section>
            <Sidebar open={open} setOpen={setOpen} animate= {false}>
                <SidebarBody className="justify-between gap-8">
                    <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                        <>
                        <Logo/>
                        </>
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Kaushik Kundu",
                                href: "#",
                                icon: (
                                    <img
                                        src="https://assets.aceternity.com/manu.png"
                                        className="h-7 w-7 shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                )
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
        </section> 
    );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <span
        aria-label="Acet Labs Logo"
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        ScheduleEase
      </span>
    </a>
  );
};