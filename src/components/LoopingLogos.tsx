import React from 'react';
import styles from '../styles/LoopingLogos.module.css';
import withIntersectionObserver from '../hocs/withIntersectionObserver';
import { IntersectionObserverProps } from '../types/IntersectionObserver';

interface Props { }

class LoopingLogos extends React.Component<Props & IntersectionObserverProps> {
  private logos = [
    <img src="/university-logos/upb-logo-en.svg" alt="UPB" key="upb" />,
    <img src="/university-logos/uon-logo-square.svg" alt="University of Nairobi" key="uon" />,
    <img src="/university-logos/unsw_0.png" alt="UNSW" key="unsw" />,
    <img src="/university-logos/unc-pembroke-logo.png" alt="UNC Pembroke" key="unc-pembroke" />,
    <img src="/university-logos/touro-university-color.png" alt="Touro University" key="touro" />,
    <img src="/university-logos/sdu-logo.png" alt="SDU" key="sdu" />,
    <img src="/university-logos/psb-logo.gif" alt="PSB" key="psb" />,
    <img src="/university-logos/primaryTAM.png" alt="TAM" key="tam" />,
    <img src="/university-logos/oaulogon.jpg" alt="OAU" key="oau" />,
    <img src="/university-logos/national-university-logo.svg" alt="National University" key="national" />,
    <img src="/university-logos/mayville-logo.png" alt="Mayville" key="mayville" />,
    <img src="/university-logos/logo.png" alt="Logo" key="logo" />,
    <img src="/university-logos/logo-esu.png" alt="ESU" key="esu" />,
    <img className={styles.whiteBackground} src="/university-logos/cedarville-logo-new-2.png" alt="Cedarville" key="cedarville" />,
    <img src="/university-logos/brand-guide-wordmark.png" alt="Brand Guide" key="brand-guide" />,
    <img src="/university-logos/bellevue.webp" alt="Bellevue" key="bellevue" />,
    <img src="/university-logos/UAPB-web-logo_Gold.svg" alt="UAPB" key="uapb" />,
    <img src="/university-logos/St_francis_college_logo_2023.png" alt="St. Francis College" key="st-francis" />,
    <img src="/university-logos/SUNY_NEW_LOGO_Gotham_horizontal.png" alt="SUNY" key="suny" />,
    <img src="/university-logos/N_NICHOLLS_Flat_187.jpg" alt="Nicholls State" key="nicholls" />,
    <img className={styles.whiteBackground} src="/university-logos/NULogo_stacked_WHITE.png" alt="National University" key="nu" />,
    <img src="/university-logos/McNeese24-4c_2B-01-e1730294054672.jpg" alt="McNeese" key="mcneese" />,
    <img src="/university-logos/HORIZONTAL_WEB_white_maroon_m.svg" alt="HORIZONTAL" key="horizontal" />,
    <img src="/university-logos/FIU-Logo.jpg" alt="FIU" key="fiu" />,
    <img src="/university-logos/DACC_logo.svg" alt="DACC" key="dacc" />,
    <img src="/university-logos/California_State_University,_Fresno_seal.svg.png" alt="Fresno State" key="fresno" />,
    <img src="/university-logos/Bay_Path_University_seal.svg.png" alt="Bay Path" key="bay-path" />,
    <img src="/university-logos/Alcorn_State_University_Seal.svg.png" alt="Alcorn State" key="alcorn" />,
    <img src="/university-logos/teach_us.png" alt="Teach Us" key="teach_us" />,
    <img src="/university-logos/cuny.png" alt="CUNY" key="cuny" />,
    <img src="/university-logos/cnm.png" alt="CNM" key="cnm" />,
    <img src="/university-logos/y.png" alt="y" key="y" />,
    <img src="/university-logos/hartwick.png" alt="Hartwick" key="hartwick" />,
    <img src="/university-logos/Marietta.png" alt="Marietta" key="Marietta" />,
    <img src="/university-logos/x.png" alt="x" key="x" />,
    <img src="/university-logos/yeshiva.png" alt="Yeshiva" key="yeshiva" />,
    <img className={styles.whiteBackground} src="/university-logos/2logo.png" alt="Logo 2" key="logo2" />
  ];

  render() {
    const { hasBeenVisible } = this.props;

    return (
      <div>
        <h3 className={styles.title}>The simSchool Global Community</h3>

        <div className={styles.logosContainer}>
          <div className={styles.logos} >
            {this.logos}
          </div>

          <div className={styles.logos} >
            {this.logos}
          </div>
        </div>

        <div className={styles.logoLinkWrapper}>
          <a
            href="https://youtu.be/-1gOe8gPNdE?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }
}

export default withIntersectionObserver(LoopingLogos);
