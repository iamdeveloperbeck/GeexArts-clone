import React, { useState, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../assets/logo.svg';
import dropImg1 from '../assets/drop-img.jpg';
import dropImg2 from '../assets/drop-img2.jpg';
import dropImg3 from '../assets/drop-img3.jpg';
import dropImg4 from '../assets/drop-img4.jpg';

import { MdChevronRight } from 'react-icons/md';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) {
                setShow(true); 
            } else {
                setShow(false);  
            }
            setLastScrollY(window.scrollY); 
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    
    return (
        <>
            <div className={`active ${show && 'translate-y-[-100%] transitionall'}`}>
                <div className='fixed top-0 left-0 right-0 bottom-auto w-full h-[55px] bg-[#fff] flex items-center'>
                    <div className='w-full pl-[20px] flex items-center justify-between relative z-50'>
                        <a href="#" className='flex-[0.6]'><img src={logo} alt="nav logo" className='w-[120px] object-cover' /></a>
                        <NavLink to='/' className='relative flex-1 lg:hidden'>
                            <div className='absolute w-[1px] h-[40px] bg-[#d3d5dc4d] top-auto bottom-[6px]'></div>
                            <div className='text-[13px] text-[#000] pl-[20px]'>Home Page</div>
                        </NavLink>
                        <div className='flex items-center gap-[90px] lg:hidden'>
                            <NavLink to='/' className='relative'>
                                <div className='absolute w-[1px] h-[40px] bg-[#d3d5dc4d] top-auto bottom-[6px]'></div>
                                <div className='text-[13px] pl-[20px] hover:text-[#000]'>Work.</div>
                            </NavLink>
                            <NavLink to='/' className='h-[40px] flex items-center' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                <div className='relative'>
                                    <div className='absolute w-[1px] h-[40px] bg-[#d3d5dc4d] top-auto bottom-[6px]'></div>
                                    <div className='text-[13px] pl-[20px] text-[#00000080] hover:text-[#000]'>Service.</div>
                                </div>
                                {dropdown && (
                                    <motion.div initial={{ y: '-20px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-20px', opacity: 0 }} className='absolute top-[53px] left-0 right-0 bottom-auto bg-[#fff] shadow-lg'>
                                        <div className='p-[20px_20px_30px_20px] grid grid-cols-[1fr_1fr_1fr_1fr] gap-[20px]'>
                                            <a href="#" className='flex items-start flex-col gap-[20px] small-drop-lnk'>
                                                <img src={dropImg1} alt="drop" className='rounded-[14px]' />
                                                <div className='flex items-center gap-[5px] text-[18px]'>
                                                    <div className='text-[#000]'>Product</div>
                                                    <div className='small-t'>Design.</div>
                                                </div>
                                            </a>
                                            <a href="#" className='flex items-start flex-col gap-[20px] small-drop-lnk'>
                                                <img src={dropImg2} alt="drop" className='rounded-[14px]' />
                                                <div className='flex items-center gap-[5px] text-[18px]'>
                                                    <div className='text-[#000]'>Digital</div>
                                                    <div className='small-t'>Branding.</div>
                                                </div>
                                            </a>
                                            <a href="#" className='flex items-start flex-col gap-[20px] small-drop-lnk'>
                                                <img src={dropImg3} alt="drop" className='rounded-[14px]' />
                                                <div className='flex items-center gap-[5px] text-[18px]'>
                                                    <div className='text-[#000]'>Create</div>
                                                    <div className='small-t'>Code.</div>
                                                </div>
                                            </a>
                                            <a href="#" className='flex items-start flex-col gap-[20px] small-drop-lnk'>
                                                <img src={dropImg4} alt="drop" className='rounded-[14px]' />
                                                <div className='flex items-center gap-[5px] text-[18px]'>
                                                    <div className='text-[#000]'>Create</div>
                                                    <div className='small-t'>App.</div>
                                                </div>
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </NavLink>
                            <NavLink to='/' className='relative'>
                                <div className='absolute w-[1px] h-[40px] bg-[#d3d5dc4d] top-auto bottom-[6px]'></div>
                                <div className='text-[13px] pl-[20px] hover:text-[#000]'>About.</div>
                            </NavLink>
                            <a href='https://geexarts.notion.site/Career-9f236198489c4bee9291875b7116c383' className='relative'>
                                <div className='absolute w-[1px] h-[40px] bg-[#d3d5dc4d] top-auto bottom-[6px]'></div>
                                <div className='pl-[20px] flex items-center'>
                                    <span className='text-[13px] text-[#00000080] hover:text-[#000]'>Careers.</span>
                                    <div className='bg-[#1f1f1f0d] uppercase text-[#aaa] p-[5px_15px] text-[10px] ml-[5px] rounded-[50px] hover:bg-[#000] hover:text-[#fff]'>We're Hiring</div>
                                </div>
                            </a>
                            <Link to='/' className='relative lg:hidden'>
                                <div className='absolute w-[1px] h-[40px] bg-[#d3d5dc4d] top-auto bottom-[18px]'></div>
                                <div className='flex items-center gap-[20px] p-[17px_20px] rounded-bl-lg sm-btn hover:bg-[#000]'>
                                    <div className='text-[#000] text-[12px] sm-text'>Contact us</div>
                                    <div className='w-[30px] h-[30px] bg-[#000] flex items-center sm-arrow justify-center rounded-[100%]'>
                                        <MdChevronRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='hidden items-center gap-[5px] pr-[20px] cursor-pointer lg:flex' onClick={() => setMenu(true)}>
                            <div className='text-[#000] text-[12px] uppercase'>Menu</div>
                            <div className='flex items-start gap-[5px] flex-col'>
                                <div className='w-[15px] h-[2px] bg-[#000]'></div>
                                <div className='w-[15px] h-[2px] bg-[#000]'></div>
                            </div>
                        </div>
                    </div>
                    {menu && (
                        <div className='absolute top-0 left-0 w-full pb-[80px] bg-[#fff] z-[1001] animUS iSopening'>
                            <div className='w-full m-[0_auto] max-w-[680px] p-[0_20px] sm:pl-[0]'>
                                <div className='flex items-start flex-col gap-[80px] sm:gap-[40px]'>
                                    <div className='fixed top-0 left-0 w-full flex items-center justify-between h-[55px] p-[0_20px] sm:pl-0'>
                                        <a href="#" className='flex-[0.6]'><img src={logo} alt="nav logo" className='w-[120px] object-cover' /></a>
                                        <div className='flex items-center gap-[5px] cursor-pointer' onClick={() => setMenu(false)}>
                                            <div className='text-[#000] text-[12px] uppercase'>Close</div>
                                            <div className='flex items-start gap-[5px] flex-col'>
                                                <div className='w-[15px] h-[2px] bg-[#000] rotate-45 transform-cpu'></div>
                                                <div className='w-[15px] h-[2px] bg-[#000] rotate-[-45deg] transform-cpu2'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-[60px] w-full pt-[110px] sm:gap-[30px] sm:pt-[80px]'>
                                        <ul className='flex flex-col items-start' role='list'>
                                            <li className='mb-[30px] sm:mb-[15px]'><a href="#" className='text-[21px] hover:text-[#000]'>Work.</a></li>
                                            <li className='mb-[30px] sm:mb-[15px]'><a href="#" className='text-[21px] text-[#00000080] hover:text-[#000]'>Service.</a></li>
                                            <li className='mb-[30px] sm:mb-[15px]'><a href="#" className='text-[21px] hover:text-[#000]'>About.</a></li>
                                            <li className='mb-[30px] sm:mb-[15px]'>
                                                <a href='https://geexarts.notion.site/Career-9f236198489c4bee9291875b7116c383' className='relative'>
                                                    <div className='flex items-center'>
                                                        <span className='text-[21px] text-[#00000080] hover:text-[#000]'>Careers.</span>
                                                        <div className='bg-[#1f1f1f0d] uppercase text-[#aaa] p-[5px_15px] text-[10px] ml-[5px] rounded-[50px] hover:bg-[#000] hover:text-[#fff]'>We're Hiring</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className=''><a href="#" className='text-[21px] text-[#000] hover:text-[#000]'>Contact us</a></li>
                                        </ul>
                                        <a href="#" className='hero-btn w-[160px] flex items-center gap-[16px]'>
                                            <span className='text-[#fff] text-anim relative z-20'>Make Order</span>
                                            <div className='absolute right-[18px] w-[30px] h-[30px] anim bg-[#fff] flex items-center justify-center rounded-[100%] z-[10]'>
                                                <MdChevronRight color='#473bd4' fontSize={19} />
                                            </div>
                                        </a>
                                        <div className='w-full h-[1px] bg-[#f2f3f5]'></div>
                                        <div className='grid grid-cols-[1fr] gap-y-[30px] auto-cols-[1fr] grid-rows-[auto_auto] w-full'>
                                            <div className='text-[16px] text-[#000]'>United States</div>
                                            <div className='grid grid-cols-[0.3fr_1.75fr] gap-x-[40px] auto-cols-[1fr] grid-rows-[auto_auto]'>
                                                <div className='text-[12px] text-[#a8adba] uppercase'>Contact</div>
                                                <div className='flex items-start flex-col gap-[1px]'>
                                                    <a href="#" className='text-[12px] text-[#000]'>+1 661 797 4055</a>
                                                    <a href="#" className='text-[12px] text-[#000]'>info@geex‑arts.com</a>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-[12px] flex-wrap'>
                                                <div className='bg-[rgba(0,0,0,.03)] p-[11px_15px] rounded-[14px] cursor-pointer text-[10px] text-[#a9aebf] hover:bg-[rgba(71,59,212,.1)] hover:text-[#473bd4] uppercase'>BEHANCE</div>
                                                <div className='bg-[rgba(0,0,0,.03)] p-[11px_15px] rounded-[14px] cursor-pointer text-[10px] text-[#a9aebf] hover:bg-[rgba(71,59,212,.1)] hover:text-[#473bd4] uppercase'>instagram</div>
                                                <div className='bg-[rgba(0,0,0,.03)] p-[11px_15px] rounded-[14px] cursor-pointer text-[10px] text-[#a9aebf] hover:bg-[rgba(71,59,212,.1)] hover:text-[#473bd4] uppercase'>DRIBBBLE</div>
                                                <div className='bg-[rgba(0,0,0,.03)] p-[11px_15px] rounded-[14px] cursor-pointer text-[10px] text-[#a9aebf] hover:bg-[rgba(71,59,212,.1)] hover:text-[#473bd4] uppercase'>FACEBOOK</div>
                                                <div className='bg-[rgba(0,0,0,.03)] p-[11px_15px] rounded-[14px] cursor-pointer text-[10px] text-[#a9aebf] hover:bg-[rgba(71,59,212,.1)] hover:text-[#473bd4] uppercase'>twitter</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
