import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import TwitterIcon from "@/ui/TwitterIcon"
import YoutubeIcon from "@/ui/YoutubeIcon"
import {
  ChatBubbleBottomCenterTextIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid"
import clsx from "clsx"
import Link from "next/link"
import React, { ElementType } from "react"
import Image from "next/image"

function NavItem({
  children,
  href,
  isActive,
  Icon,
}: {
  children: React.ReactNode
  href: string
  isActive?: boolean
  Icon: ElementType
}) {
  return (
    <Link href={href} className={clsx("group", FOCUS_VISIBLE_OUTLINE)}>
      <div className="sm:flex sm:items-center sm:space-x-2">
        <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
          <div
            className={clsx(
              "rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1",
              {
                "ring-[2px] ring-purple-500/30 ring-offset-1 ring-offset-black/5":
                  isActive,
              },
            )}
          >
            <Icon className="w-[16px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
          </div>
        </div>
        <div className="transition-colors group-hover:text-rose-50">
          {children}
        </div>
      </div>
    </Link>
  )
}

const Xing = () => (
  <Image
    src="/xing.png"
    quality={95}
    width={18}
    height={18}
    priority={true}
    className="rounded-full"
    alt="xing"
  />
)

const Github = () => (
  <Image
    src="/github.png"
    quality={95}
    width={18}
    height={18}
    priority={true}
    className="rounded-full"
    alt="xing"
  />
)

const Linkedin = () => (
  <Image
    src="/linkedin.png"
    quality={95}
    width={18}
    height={18}
    priority={true}
    className="rounded-full"
    alt="xing"
  />
)


export const Nav = () => {
  return (
    <div className="flex items-center space-x-3 text-base font-medium leading-none text-rose-100/90 lg:space-x-6">

      <NavItem href="/blog" Icon={ChatBubbleBottomCenterTextIcon}>
        Blog
      </NavItem>

      <NavItem href="https://linkedin.com/in/meshudebnath" Icon={Linkedin}>
        Linkedin
      </NavItem>

      <NavItem href="https://www.xing.com/profile/MeshuDeb_Nath/" Icon={Xing}>
        Xing
      </NavItem>

      <NavItem href="https://www.github.com/meshudn" Icon={Github}>
        Github
      </NavItem>
    </div>
  )
}
