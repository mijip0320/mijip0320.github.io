import { useCallback } from 'react';
import GithubIcon from '../components/github/Github';
import NotionIcon from '../components/notion/Notion';
import './Main.scss'
import itsme from "./itsme.jpeg"
import image from "./meMySelf.png"
import { useTranslation } from "react-i18next";

const Main = (): JSX.Element => {
    const { t, i18n } = useTranslation('main');
    
  /* 주된 내용이 아니여서 따로 설명을 첨부하지는 않았지만  
   * changeLanguage 메소드를 통해 언어 변환을 하시면 됩니다.
   * 글로벌하게 적용되는 방식이라 따로 관리를 해주지 않아도 됩니다.
   */
  const toggleLocales = useCallback(
    (locale: string) => {
      i18n.changeLanguage(locale);
    },
    [i18n]
  );
    
    return (
        <div className="body">
            <div className="body_intro">
                <div className="body_left">
                    {/* <span className="body_left_title">Full-stack web and mobile app developer, and amateur astronaut.</span> */}
                    <span className="body_left_title">{t('title')}</span>

                    <span className='body_left_subtitle'>
                        {t('subtitle')}
                         {/* I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer. */}
                    </span>
                    <button onClick={() => toggleLocales("en-US")} title="영어로 바꾸기">
                        en
                    </button>
                    <button onClick={() => toggleLocales("ko-KR")} title="한글로 바꾸기">
                        ko
                    </button>
                </div> 
                <div className="body_right">
                    <div className='body_right_imageContainer'>
                        <div className='body_right_imageWrapper'>
                            <img src={image} alt="about" className="body_right_image"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='body_socials'>
                <GithubIcon />
                <NotionIcon />
            </div>
            <div className='body_projects'>
                <div className='body_projects_list'>
                    <div className='body_projects_project'>
                        <div className="project-logo" style={{ width: '30px', height: '30px' }}>
                            <img style={{ width: '30px', height: '30px' }} src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="logo" />
                        </div>
                        <div className="project_title">Project 1</div>
                        <div className="project_description">Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.</div>
                    </div>
                    <div className='body_projects_project'>
                        <div className="project-logo" style={{ width: '30px', height: '30px' }}>
                            <img style={{ width: '30px', height: '30px' }} src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="logo" />
                        </div>
                        <div className="project_title">Project 1</div>
                        <div className="project_description">Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.</div>
                    </div>
                   <div className='body_projects_project'>
                        <div className="project-logo" style={{ width: '30px', height: '30px' }}>
                            <img style={{ width: '30px', height: '30px' }} src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="logo" />
                        </div>
                        <div className="project_title">Project 1</div>
                        <div className="project_description">Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.</div>
                    </div>
                </div>

                <div className='body_projects_list'>
                    <div className='body_projects_project'>
                        <div className="project-logo" style={{ width: '30px', height: '30px' }}>
                            <img style={{ width: '30px', height: '30px' }} src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="logo" />
                        </div>
                        <div className="project_title">Project 1</div>
                        <div className="project_description">Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.</div>
                    </div>
                    <div className='body_projects_project'>
                        <div className="project-logo" style={{ width: '30px', height: '30px' }}>
                            <img style={{ width: '30px', height: '30px' }} src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="logo" />
                        </div>
                        <div className="project_title">Project 1</div>
                        <div className="project_description">Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.</div>
                    </div>
                   <div className='body_projects_project'>
                        <div className="project-logo" style={{ width: '30px', height: '30px' }}>
                            <img style={{ width: '30px', height: '30px' }} src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="logo" />
                        </div>
                        <div className="project_title">Project 1</div>
                        <div className="project_description">Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;