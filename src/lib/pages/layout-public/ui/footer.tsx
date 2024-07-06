import { FC } from 'react';

const year = new Date().getFullYear();

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-between border-t p-6 md:p-12 xl:p-14'>
      <div className='hms-ui-c-dhzjXW w-full max-w-7xl flex-col justify-between gap-10 self-center xl:flex-row'>
        <div className='Footer_left__w8_Rw'>
          <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-hzzdKO-variant-md hms-ui-c-iwOMvD-ifraNcX-css mt-4'>
            Video infrastructure for a video-first world. Easy-to-integrate SDKs and interactivity
            APIs to help you create high quality audio/video experiences within your applications.
          </p>
          <div className='hms-ui-c-dhzjXW mt-10 hidden md:flex'>
            <div className='Footer_social-ctx___yDZ_'>social links</div>
          </div>
        </div>
        <div className='sd:justify-start sd:gap-20 grid w-full grid-cols-2 flex-wrap justify-between gap-8 md:flex md:gap-0'>
          <div className='hms-ui-c-PJLV'>
            <div className='hms-ui-c-PJLV'>
              <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-ijpoWPR-css'>
                Company
              </p>
              <div className='hms-ui-c-dhzjXW mt-3 flex-col gap-3 md:mt-6 md:gap-4'>
                <a className='w-max' target='_self' rel='noreferrer' href='/about'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    About Us
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/pricing'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Pricing
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/security'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Security
                  </p>
                </a>
                <a href='https://angel.co/company/100ms/jobs'></a>
                <a className='w-max' target='_blank' rel='noreferrer'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Careers
                  </p>
                </a>
                <a href='https://www.figma.com/@100ms'></a>
                <a className='w-max' target='_blank' rel='noreferrer'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Design
                  </p>
                </a>
                <a href='https://100ms-website.s3.ap-south-1.amazonaws.com/100ms+Press+Kit.zip'></a>
                <a className='w-max' target='_self' rel='noreferrer'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Press Kit
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/contact'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Contact us
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className='hms-ui-c-PJLV'>
            <div className='hms-ui-c-PJLV'>
              <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-ijpoWPR-css'>
                Developers
              </p>
              <div className='hms-ui-c-dhzjXW mt-3 flex-col gap-3 md:mt-6 md:gap-4'>
                <a className='w-max' target='_blank' rel='noreferrer' href='/docs'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Documentation
                  </p>
                </a>
                <a className='w-max' target='_blank' rel='noreferrer' href='/examples'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Examples
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/blog'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Blog
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/events'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Webinars
                  </p>
                </a>
                <a href='https://github.com/100mslive/'></a>
                <a className='w-max' target='_blank' rel='noreferrer'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    GitHub
                  </p>
                </a>
                <a href='https://discord.com/invite/kGdmszyzq2'></a>
                <a className='w-max' target='_blank' rel='noreferrer'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Discord Community
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className='hms-ui-c-PJLV'>
            <div className='hms-ui-c-PJLV'>
              <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-ijpoWPR-css'>
                Use Cases
              </p>
              <div className='hms-ui-c-dhzjXW mt-3 flex-col gap-3 md:mt-6 md:gap-4'>
                <a className='w-max' target='_self' rel='noreferrer' href='/video-call-sdk'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Video Conferencing
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/live-streaming-sdk'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Live Streaming
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/solutions/audioroom'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Audio Rooms
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/solutions/events'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Virtual Events
                  </p>
                </a>
                <a className='w-max' target='_self' rel='noreferrer' href='/solutions/edtech'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Virtual Classrooms
                  </p>
                </a>
                <a
                  className='w-max'
                  target='_self'
                  rel='noreferrer'
                  href='/solutions/video-kyc-solution'
                >
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                    Video KYC
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className='hms-ui-c-PJLV'>
            <div className='hms-ui-c-PJLV'>
              <div className='hms-ui-c-PJLV'>
                <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-ijpoWPR-css'>
                  Industry
                </p>
                <div className='hms-ui-c-dhzjXW mt-3 flex-col gap-3 md:mt-6 md:gap-4'>
                  <a className='w-max' target='_self' rel='noreferrer' href='/solutions/edtech'>
                    <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                      EdTech
                    </p>
                  </a>
                  <a className='w-max' target='_self' rel='noreferrer' href='/solutions/fitness'>
                    <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                      Fitness
                    </p>
                  </a>
                  <a className='w-max' target='_self' rel='noreferrer' href='/solutions/telehealth'>
                    <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                      Telehealth
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className='hms-ui-c-PJLV mt-8 hidden md:block'>
              <div className='hms-ui-c-PJLV'>
                <div className='hms-ui-c-PJLV'>
                  <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-ijpoWPR-css'>
                    Comparison
                  </p>
                  <div className='hms-ui-c-dhzjXW mt-3 flex-col gap-3 md:mt-6 md:gap-4'>
                    <a className='w-max' target='_blank' rel='noreferrer' href='/twilio-vs-100ms'>
                      <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                        Twilio
                      </p>
                    </a>
                    <a className='w-max' target='_blank' rel='noreferrer' href='/agora-vs-100ms'>
                      <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                        Agora
                      </p>
                    </a>
                    <a className='w-max' target='_blank' rel='noreferrer' href='/zoom-vs-100ms'>
                      <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                        Zoom
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hms-ui-c-PJLV md:hidden'>
            <div className='hms-ui-c-PJLV'>
              <div className='hms-ui-c-PJLV'>
                <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-ijpoWPR-css'>
                  Comparison
                </p>
                <div className='hms-ui-c-dhzjXW mt-3 flex-col gap-3 md:mt-6 md:gap-4'>
                  <a className='w-max' target='_blank' rel='noreferrer' href='/twilio-vs-100ms'>
                    <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                      Twilio
                    </p>
                  </a>
                  <a className='w-max' target='_blank' rel='noreferrer' href='/agora-vs-100ms'>
                    <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                      Agora
                    </p>
                  </a>
                  <a className='w-max' target='_blank' rel='noreferrer' href='/zoom-vs-100ms'>
                    <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-iTIiPY-css'>
                      Zoom
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hms-ui-c-dhzjXW md:hidden'>
          <div className='Footer_social-ctx___yDZ_'>social</div>
        </div>
      </div>
      <div className='hms-ui-c-dhzjXW my-10 justify-center md:my-14'>
        <hr className='bg-surface-light w-full max-w-7xl' />
      </div>
      <div className='hms-ui-c-dhzjXW mx-auto w-full max-w-7xl flex-col items-center md:flex-row'>
        <div className='hms-ui-c-dhzjXW flex-col gap-4 xl:flex-row xl:items-center xl:gap-20'>
          <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-ifraNcX-css mx-auto md:w-full'>
            © 100ms, Inc. All rights reserved.
          </p>
          <div className='hms-ui-c-dhzjXW mx-auto w-max justify-center gap-10'>
            <a href='/terms-of-service'>
              <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-icNjMyD-css'>
                Terms &amp; conditions
              </p>
            </a>
            <a href='/privacy-policy'>
              <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-icNjMyD-css'>
                Privacy
              </p>
            </a>
          </div>
        </div>
        <div className='hms-ui-c-dhzjXW mt-8 self-center md:ml-auto md:mt-0'>
          <a href='https://status.100ms.live'>
            <div className='hms-ui-c-dhzjXW hms-ui-c-dhzjXW-jroWjL-align-center hms-ui-c-dhzjXW-ikyxWFB-css bg-surface-light w-max gap-3 py-2 pl-4 pr-6'>
              <div className='hms-ui-c-PJLV hms-ui-c-PJLV-idiHSaO-css'></div>
              <p className='hms-ui-c-iwOMvD hms-ui-c-iwOMvD-euRFQq-variant-sm hms-ui-c-iwOMvD-ikzDzpb-css'>
                All Systems Operational
              </p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
