import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from '@/shared/types';
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import useModal from '@/hooks/useModal';
import ActionButton from '@/shared/ActionButton';

type Props = {
  selectedPage: SelectedPage,
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBtw = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { isOpenModal, toggleModal } = useModal();
  
  return (
    <nav>
        <div 
          className={`${flexBtw} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBtw} mx-auto w-5/6`}>
              <div className={`${flexBtw} w-full gap-16`}>
                {/* LEFT SIDE */}
                <img src={Logo} alt="logo" />
                {/* RIGHT SIDE */}
                {
                  isAboveMediumScreens ? (
                    <div className={`${flexBtw} w-full`}>
                      <div className={`${flexBtw} gap-8 text-sm`}>
                        <Link 
                          page='Home'
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link 
                          page='Benefits'
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link 
                          page='Our Classes'
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        <Link 
                          page='Contact Us'
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </div>
                      <div className={`${flexBtw} gap-8`}>
                        <p>Sign In</p>
                        <ActionButton
                          setSelectedPage={setSelectedPage}
                        >
                          Become a member
                        </ActionButton>
                      </div>
                    </div>
                  ) 
                  : (
                    <button 
                      className='rounded-full bg-secondary-500 p-2'
                      onClick={toggleModal}
                    >
                      <Bars3Icon 
                        className='h-6 w-6 text-white'
                      />
                    </button>
                  )
                }
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;