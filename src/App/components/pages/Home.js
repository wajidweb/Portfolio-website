import React from 'react';
import bg from '../../assets/bg.jpg';
import '../../Styles/Home.css';
import mypic from '../../assets/DSC_6284.JPG'
import {FaFacebook} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {MdOutlineSettingsInputComposite} from 'react-icons/md';
import {FaGraduationCap} from 'react-icons/fa';
import {FiSlack} from 'react-icons/fi';
import project1 from '../../assets/project1pic.png';
import project2 from '../../assets/project2pic.png';
import project3 from '../../assets/project3pic.png';


export default function Home() {

    const DetailBox=({heading, detail})=>{
        return (
            <div className='detailbox'>
                <p className='headingindetail'>{heading}</p>
                <p className='detal'>{detail}</p>
            </div>
        )
    }


    const Skillbox=({image, title})=>{
        return(
            <div className='skilbox'>
                <img src={image} alt='skillbox' className='skilimage'/>
                <p className='skilltitle'>{title}</p>
            </div>
        )
    }


            const Educationbox=({title, since , para})=>{
                return (
                    <div className='educationbox'>
                        <p className='edutitle'>{title}</p>
                        <p className='edusincs'>{since}</p>
                        <p className='edupara'>{para}</p>
                    </div>
                )
            }


    const Projectbox=({
        screenshot, title
    })=>{
        return (
            <div className='projectboxCont'>
                <img src={screenshot} alt="project picture" className='projectImage'/>
                <div className='titlediv'>
                    <p className='projectTitle'>{title}</p>
                </div>
            </div>
        )
    }



    return (
        <div className='maincontainer'>
            <img src={bg} alt="background image" className='bgimage' />
            
            <div className='lastbackground'>
            <div className='innerContainer'>
                <div className='personalInfor'>
                        <div className='personal-wrapper'>
                           
                            <div className='imagediv'>
                                <img src={mypic}  alt="myimage" className='myimage'/>
                            </div>

                            <div className='info'>
                                <div className="nameinfo">
                                    <p className='name'>WAJID ALI KHAN</p>
                                    <p className='active'>#ACTIVE</p>
                                </div>
                                <div className='socialMedia'>
                                    <ul className='ullinks'>
                                        <li>
                                            <a href="https://www.facebook.com/sherali.khan.1650332" target="_blank"><FaFacebook className='social'/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/wajid_ali_khan04/" target="_blank"><RiInstagramFill className='social'/></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/WajidAl42111" target="_blank"><AiFillTwitterCircle className='social'/></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/wajidweb" target="_blank"><BsGithub className='social'/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="underdiv">
                                <div className="sameDetails">
                                        <DetailBox heading='EMAIL' detail="mrwajidalikhan42111@gmail.com" />
                                        <DetailBox heading='PHONE' detail="+923481970849" />
                                </div>
                                <div className="sameDetails">
                                        <DetailBox heading='DOB' detail="2002" />
                                        <DetailBox heading='LOCATION' detail="ABOHA SWAT" />
                                </div>
                               
                            </div>
                        </div>
                </div>

                <div className='skils'>
                    <div className='skillheading'>
                        <MdOutlineSettingsInputComposite className='skillicons' />
                        <p className='skillspara'>SKILLS</p>
                    </div>

                    <div className="samestyles">
                            <Skillbox image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" title="REACT" />
                            <Skillbox image="https://www.computerhope.com/jargon/j/javascript.png" title="JAVASCRIPT" />
                            <Skillbox image="https://www.gstatic.com/devrel-devsite/prod/v7824338a80ec44166704fb131e1860a66ed443b0ce02adfe8171907535d63bde/firebase/images/touchicon-180.png" title="FIREBASE" />
                            <Skillbox image="https://image.flaticon.com/icons/png/512/732/732212.png" title="HTML" />
                           
                    </div>
                    <div className="samestyles">
                    <Skillbox image="https://jldohmann.netlify.app/static/images/icons/icon-css.png" title="CSS" />
                            <Skillbox image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajFp3hWPT5ltUY27VY58kmc54UP1AKvOX93pA3wgavrCls-2iSifEpgHygGbolKWhnrc&usqp=CAU" title="BOOTSTRAP" />
                            <Skillbox image="https://cdn.iconscout.com/icon/free/png-256/sass-2752078-2284895.png" title="SASS" />
                            <Skillbox image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4TCwTufR8MtHqrhctTmO1YzO1zxt3_AS2Nbrqlv54oDZzZCbsJj4souNZGpxLG3qmhQ&usqp=CAU" title="LINUX OS" />
                    </div>
                </div>



                <div className='skils'>
                <div className='skillheading'>
                        <FaGraduationCap className='skillicons' />
                        <p className='skillspara'>EDUCATION</p>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", padding: "10px 30px",}}>
                        <Educationbox title="UNIVERSITY OF ENGINEERING AND TECHNOLOGY, PESHAWAR" since="2020  - Currently Studying" para="At here i am studying BS Computer Science , i have met alot of inspiring teachers that help me polish my programming skills. Alot of events are arranged for our facilities because of which we get alot of experience. In this University i have been with alot of people of the same field that help me alot for my carrer. " />
                        <Educationbox title="GHSS BALOGRAM SWAT" since="2018 - 2020" para="In this collage i have studied Computer Science, And i have started my Programming Carrer from this college." />
                        <Educationbox title="BARIKOT PUBLIC SCHOOL, BARIKOT SWAT" since="2005 - 2017" para="In this school i have studied till Matriculation. And grooming began from this school." />
                    </div>



                </div>





                <div className='skils'>
                <div className='skillheading'>
                        <FiSlack className='skillicons' />
                        <p className='skillspara'>PROJECTS</p>
                    </div>

                    

                    <ul className='lastprojectsec' >
                        <li><a href='https://wajidgeek.web.app/' target="_blank"> <Projectbox screenshot={project1} title="PROJECT #1" />
                            </a></li>
                        <li><a href='https://uet-hub.web.app//' target="_blank"> <Projectbox screenshot={project2} title="PROJECT #2" />
                            </a></li>
                        <li><a href='https://shajreenasab.web.app/' target="_blank"> <Projectbox screenshot={project3} title="PROJECT #3" />
                            </a></li>
                    </ul>


                </div>

                           





                </div>
            </div>

            
           
        </div>
    )
}
