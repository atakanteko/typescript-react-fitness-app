import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types";

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>
}

const Link: React.FC <Props> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500": ""}
            transition duration-500 hover:text-primary-300
        `}
        href={`#${lowerCasePage}`}
        onClick={() => {setSelectedPage(lowerCasePage)}}
    >
     {page}
    </AnchorLink>
  )
}

export default Link