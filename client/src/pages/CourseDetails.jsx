import React from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";


function CourseDetails() {
  return (
    <>
        <div className=' bg-[var(--clr-primary-800)]'>
            <div className='container ' >
                <section id="breadcrumb" className='h-14'>
                    <nav aria-label='Breadcrumb' className='flex items-center h-full '>
                        <ul className='flex gap-x-1 '>
                            <li><a href="/">Home</a></li>
                            <li aria-hidden="true">›</li>
                            <li><a className='' href="/courses">Courses</a></li>
                            <li aria-hidden="true">›</li>
                            <li><a className='text-[var(--clr-accent-900)]' href="/courses">Cyber security fundamental</a></li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <div className="flex pb-16 pt-9">
                        <div className='flex-2/3'>
                            <h6 className='text-white'><span className='font-light' >by</span> sumitDevs</h6>
                            <div className='flex flex-col gap-y-4'>
                                <h2 className='text-white'>Cybersecurity Fundamentals: Defend and Detect</h2>
                                <p className='w-full max-w-3xl'>Cybersecurity Fundamentals: Defend and Detect equips learners with essential skills to protect systems, networks, and data from attacks. This course focuses on two critical aspects of cybersecurity: defensive strategies and threat detection techniques.</p>
                            </div>
                            <div className='flex gap-x-6 mt-8'>
                                <span className='flex text-[var(--clr-primary-100)] gap-x-2 items-center justify-center'>
                                    <svg className="h-4 w-4">
                                        <use href="../icons/detailsicon.svg#ic1"></use>
                                    </svg>
                                    2 Weeks
                                </span>
                                <span className='flex text-[var(--clr-primary-100)] gap-x-2 items-center justify-center'>
                                    <svg className="h-4 w-4">
                                        <use href="../icons/detailsicon.svg#ic2"></use>
                                    </svg>
                                    156 Students
                                </span>
                                <span className='flex text-[var(--clr-primary-100)] gap-x-2 items-center justify-center'>
                                    <svg className="h-4 w-4">
                                        <use href="../icons/detailsicon.svg#ic3"></use>
                                    </svg>
                                    All levels
                                </span>
                                <span className='flex text-[var(--clr-primary-100)] gap-x-2 items-center justify-center'>
                                    <svg className="h-4 w-4">
                                        <use href="../icons/detailsicon.svg#ic4"></use>
                                    </svg>
                                    20 Lessons
                                </span>
                                <span className='flex text-[var(--clr-primary-100)] gap-x-2 items-center justify-center'>
                                    <svg className="h-4 w-4">
                                        <use href="../icons/detailsicon.svg#ic5"></use>
                                    </svg>
                                   3 Quizzes
                                </span>
                            </div>
                        </div>
                        <div className='flex-1/3 relative'>
                            <div className='rounded-2xl right-0 absolute flex flex-col w-fit p-1  bg-[var(--clr-accent-100)]'>
                                <div className='max-w-[26rem] rounded-t-2xl overflow-hidden'>
                                    <img className='w-full h-full object-cover' src="../images/img1.jpg" alt="" />
                                </div>
                                <div className='px-4 mt-6 pb-10 flex flex-col gap-y-6'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex gap-x-4 items-center'>
                                            <h6>₹5500</h6>
                                            <p className='flex gap-x-2'><span className='text-[var(--clr-primary-400)] line-through'>₹10,999</span> <span className='text-[var(--clr-accent-900)]'>50% OFF</span></p>
                                        </div>
                                        <a href='#' className='w-10 h-9 rounded-sm flex items-center justify-center bg-white overflow-hidden'>
                                            <svg className=" w-6 h-6 ">
                                                <use href="../icons/detailsicon.svg#ic6"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className='flex gap-x-4'>
                                        <button className='bg-[var(--clr-accent-900)] cursor-pointer rounded-lg py-4 flex-1'>enroll now</button>
                                        <button className='flex gap-x-2 rounded-lg cursor-pointer text-black items-center justify-center px-5 py-4 border border-[var(--clr-accent-900)]'>
                                            +
                                            <svg className=" w-6 h-6 ">
                                                <use href="../icons/detailsicon.svg#ic7"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <section className='mt-12 mb-40'>
            <div className='container'>
                <div className='w-full max-w-4xl bg-[var(--clr-accent-100)] text-[var(--clr-primary-900)]'>
                    <div role='tablist' className='flex text-lg bg-white'>
                        <button className='rounded-tl-lg bg-[var(--clr-accent-100)] w-full py-3 border border-[var(--clr-primary-100)] cursor-pointer'>Overview</button>
                        <button className='w-full py-3 border-y  border-[var(--clr-primary-100)] cursor-pointer'>Curriculam</button>
                        <button className='w-full py-3 border-y border-l border-[var(--clr-primary-100)] cursor-pointer'>Instructor</button>
                        <button className='rounded-tr-lg w-full py-3 border border-[var(--clr-primary-100)] cursor-pointer'>Review</button>
                    </div>
                    <div className='mt-8 px-6 pb-14'>
                        <div id="tab1" className=''>
                            <p>Cybersecurity Fundamentals: Defend and Detect is a foundational course designed to equip learners with essential knowledge and practical skills in protecting digital systems and data. The course focuses on two critical aspects of cybersecurity: defense and detection. Participants will learn how to safeguard computer networks, systems, and applications from cyber threats while gaining insights into identifying, analyzing, and responding to potential security incidents.</p>
                            <h3>Key topics include:</h3>
                            <ul className='list-disc pl-6'>
                                <li>Core principles of cybersecurity and threat landscapes</li>
                                <li>Network security protocols and defensive strategie</li>
                                <li>Common attack vectors such as phishing, malware, and social engineering</li>
                                <li>Techniques for threat detection, including intrusion detection systems (IDS) and log analysis</li>
                                <li>Fundamentals of incident response and forensic investigation</li>
                            </ul>
                        </div>
                        <div className='hidden' id="tab2">
                            <dl className='flex flex-col gap-y-4'>
                                <div className='bg-white rounded-lg px-6 py-4'>
                                    <dt className='text-lg cursor-pointer flex justify-between mb- ' id='data-toogle'>
                                        <span className='flex items-center gap-x-2'>
                                            <FaAngleUp className='text-lg' />
                                            lesson 1 with video content
                                        </span>
                                        <span className='flex gap-x-4'>
                                            <span>12 Lessons</span>
                                            <span>45 mins</span>
                                        </span>
                                    </dt>
                                    <dd className="">
                                        <div className='mt-6 px-2 flex flex-col gap-y-4 '>
                                            <a href='#' className='flex justify-between'>
                                                <div className='flex items-center gap-x-1'>
                                                    <MdOutlineVideoLibrary/>
                                                    <span>video  content with title</span>
                                                </div>
                                                <div className='flex items-center gap-x-4'>
                                                    <span>12:30</span>
                                                    <MdLockOutline />
                                                </div>
                                            </a>
                                            <a href='#' className='flex justify-between'>
                                                <div className='flex items-center gap-x-1'>
                                                    <MdOutlineVideoLibrary/>
                                                    <span>video  content with title</span>
                                                </div>
                                                <div className='flex items-center gap-x-4'>
                                                    <span>12:30</span>
                                                    <MdLockOutline />
                                                </div>
                                            </a>
                                        </div>
                                    </dd>
                                </div>
                                <div className='bg-white rounded-lg px-6 py-4'>
                                    <dt className='text-lg cursor-pointer flex justify-between mb- ' id='data-toogle'>
                                        <span className='flex items-center gap-x-2'>
                                            <IoIosArrowDown/>
                                            lesson 2 with video content
                                        </span>
                                        <span className='flex gap-x-4'>
                                            <span>12 Lessons</span>
                                            <span>45 mins</span>
                                        </span>
                                    </dt>
                                    <dd className="hidden">
                                        <div className='mt-6 px-2 flex flex-col gap-y-4 '>
                                            <a href='#' className='flex justify-between'>
                                                <div className='flex items-center gap-x-1'>
                                                    <MdOutlineVideoLibrary/>
                                                    <span>video  content with title</span>
                                                </div>
                                                <div className='flex items-center gap-x-4'>
                                                    <span>12:30</span>
                                                    <MdLockOutline />
                                                </div>
                                            </a>
                                            <a href='#' className='flex justify-between'>
                                                <div className='flex items-center gap-x-1'>
                                                    <MdOutlineVideoLibrary/>
                                                    <span>video  content with title</span>
                                                </div>
                                                <div className='flex items-center gap-x-4'>
                                                    <span>12:30</span>
                                                    <MdLockOutline />
                                                </div>
                                            </a>
                                        </div>
                                    </dd>
                                </div>
                                <div className='bg-white rounded-lg px-6 py-4'>
                                    <dt className='text-lg cursor-pointer flex justify-between mb- ' id='data-toogle'>
                                        <span className='flex items-center gap-x-2'>
                                            <IoIosArrowDown/>
                                            lesson 3 with video content
                                        </span>
                                        <span className='flex gap-x-4'>
                                            <span>12 Lessons</span>
                                            <span>45 mins</span>
                                        </span>
                                    </dt>
                                    <dd className="hidden">
                                        <div className='mt-6 px-2 flex flex-col gap-y-4 '>
                                            <a href='#' className='flex justify-between'>
                                                <div className='flex items-center gap-x-1'>
                                                    <MdOutlineVideoLibrary/>
                                                    <span>video  content with title</span>
                                                </div>
                                                <div className='flex items-center gap-x-4'>
                                                    <span>12:30</span>
                                                    <MdLockOutline />
                                                </div>
                                            </a>
                                            <a href='#' className='flex justify-between'>
                                                <div className='flex items-center gap-x-1'>
                                                    <MdOutlineVideoLibrary/>
                                                    <span>video  content with title</span>
                                                </div>
                                                <div className='flex items-center gap-x-4'>
                                                    <span>12:30</span>
                                                    <MdLockOutline />
                                                </div>
                                            </a>
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className='hidden' id="tab3">
                            <div className='flex gap-x-4'>
                                <div id="profile" className='w-45 h-45 overflow-hidden rounded-lg'>
                                    <img className='h-full w-full object-cover -scale-x-100' src="./images/prof1.jpg" alt="" />
                                </div>
                                <div className='flex-1'>
                                    <a className='text-lg' href="#">sumitDevs</a>
                                    <p>
                                        A cybersecurity specialist with a PhD in mathematics, 
                                        focusing on Elliptic Curve Cryptography. He is certified
                                        in CSAP, CySA+, Security+, and ISC2, and has shared insights on 
                                        transitioning from mathematics to cybersecurity, emphasizing
                                        hands-on platforms like TryHackMe and Hack The Box.
                                    </p>
                                    <div className='flex items-center gap-x-4 mt-4'>
                                        <span>Follow:</span>
                                        <span className='flex gap-x-2'>
                                            <FaLinkedin/>
                                            <FaFacebookF/>
                                            <FaXTwitter/>
                                            <FaYoutube/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden' id="tab4">
                            <div className='flex flex-col gap-y-8'>
                                <div className='flex items-center gap-x-4'>
                                    <p className='text-4xl self-start'>4.0</p>
                                    <div>
                                        <span className='flex gap-x-1'>
                                            <svg className="h-4 w-4">
                                                <use href="../icons/detailsicon.svg#ic8"></use>
                                            </svg>
                                            <svg className="h-4 w-4">
                                                <use href="../icons/detailsicon.svg#ic8"></use>
                                            </svg>
                                            <svg className="h-4 w-4">
                                                <use href="../icons/detailsicon.svg#ic8"></use>
                                            </svg>
                                            <svg className="h-4 w-4">
                                                <use href="../icons/detailsicon.svg#ic8"></use>
                                            </svg>
                                            <svg className="h-4 w-4 ">
                                                <use href="../icons/detailsicon.svg#ic11"></use>
                                            </svg>
                                        </span>
                                        <p>based on 146,951 ratings</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-x-4'>
                                    <div className='h-15  w-15 rounded-full overflow-hidden'>
                                        <img className='h-full w-full object-cover' src="./images/prof2.jpg" alt="" />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <h6>Laura Hipster</h6>
                                            <p className='text-[var(--clr-primary-400)]'>October 03, 2022</p>
                                        </div>
                                        <p>Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-x-4'>
                                    <div className='h-15  w-15 rounded-full overflow-hidden'>
                                        <img className='h-full w-full object-cover' src="./images/prof2.jpg" alt="" />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <h6>Laura Hipster</h6>
                                            <p className='text-[var(--clr-primary-400)]'>October 03, 2022</p>
                                        </div>
                                        <p>Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-x-4'>
                                    <div className='h-15  w-15 rounded-full overflow-hidden'>
                                        <img className='h-full w-full object-cover' src="./images/prof2.jpg" alt="" />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <h6>Laura Hipster</h6>
                                            <p className='text-[var(--clr-primary-400)]'>October 03, 2022</p>
                                        </div>
                                        <p>Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.</p>
                                    </div>
                                </div>
                            </div>
                            <nav className='mt-12' >
                                <ul className='flex w-full items-center justify-center gap-x-4'>
                                    <li className='h-10 w-10 flex items-center justify-center rounded-full hover:border-none hover:text-white border border-[var(--clr-primary-100)] hover:bg-[var(--clr-accent-900)]'>&lt;</li>
                                    <li className='h-10 w-10 flex items-center justify-center rounded-full hover:border-none text-white border border-[var(--clr-primary-100)] bg-[var(--clr-accent-900)]'>1</li>
                                    <li className='h-10 w-10 flex items-center justify-center rounded-full hover:border-none hover:text-white border border-[var(--clr-primary-100)] hover:bg-[var(--clr-accent-900)]'>1</li>
                                    <li className='h-10 w-10 flex items-center justify-center rounded-full hover:border-none hover:text-white border border-[var(--clr-primary-100)] hover:bg-[var(--clr-accent-900)]'>1</li>
                                    <li className='h-10 w-10 flex items-center justify-center rounded-full hover:border-none hover:text-white border border-[var(--clr-primary-100)] hover:bg-[var(--clr-accent-900)]'>&gt;</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CourseDetails