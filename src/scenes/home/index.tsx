import React from 'react';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import HomePageText from '@/assets/HomePageText.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponserFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home: React.FC<Props> = (props) => {
  const 
    { setSelectedPage } = props,
    isAboveMediumScreens = useMediaQuery("(min-width: 1080px)")

  return (
    <section
      id='home'
      className='bg-gray-20 py-10'
    >
        {/* IMAGE AND MAIN HEADER */}
        <div className='mt-[88px] w-5/6 h-5/6 mx-auto md:flex items-center justify-between'>
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* HEADINGS */}
                <motion.div 
                  className='md:-mt-20'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants ={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:-z-10 md:before:content-evolvetext'>
                            <img 
                              src={HomePageText} 
                              alt="home-page-text"
                            />
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-lg'>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis libero reprehenderit unde qui nulla, odit voluptatem. Eaque neque aspernatur, fugiat corrupti ipsum possimus voluptatibus explicabo debitis consequuntur tempora repellendus non!
                    </p>
                </motion.div>
                {/* ACTION BUTTONS */}
                <motion.div 
                  className='mt-8 flex items-center gap-8'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay:0.2, duration: 0.5 }}
                  variants ={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                      href={`#${SelectedPage.ContactUs}`}
                      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* IMAGE */}
            <div className='flex items-center md:basis-2/5 md:z-10 md:mt-16 md:ml-40'>
                <img 
                  src={HomePageGraphic} 
                  alt="home-page-graphic" 
                />
            </div>
        </div>
        {/* SPONSORS */}
        {
            isAboveMediumScreens ?
            (
                <div className='bg-primary-300 h-[150px]'>
                    <div className='w-5/6 mx-auto h-full'>
                        <div className='h-full flex items-center justify-between w-4/6'>
                            <img src={SponsorRedBull} alt="sponsor-redbull" />
                            <img src={SponsorForbes} alt="sponsor-forbes" />
                            <img src={SponserFortune} alt="sponsor-fortube" />
                        </div>
                    </div>
                </div>
            ) :
            null
        }
    </section>
  )
}

export default Home