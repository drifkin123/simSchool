import { Component } from 'react';
import styles from '../styles/Header.module.css';
import classNames from 'classnames';

enum NavOptions {
  Platform = 'platform',
  Pricing = 'pricing',
  Resources = 'resources'
}

interface State {
  isMenuOpen: boolean;
  activeDropdowns: NavOptions[];
  isMobile: boolean;
}

class Header extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpen: false,
      activeDropdowns: [],
      isMobile: window.innerWidth <= 768
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
      activeDropdowns: [],
    }));
  };

  handleDropdownEnter = (dropdown: NavOptions) => {
    if (!this.state.isMobile) {
      this.setState({ activeDropdowns: [dropdown] });
    }
  };

  handleDropdownLeave = () => {
    if (!this.state.isMobile) {
      this.setState({ activeDropdowns: [] });
    }
  };

  toggleMobileDropdown = (dropdown: NavOptions) => {
    this.setState(prevState => ({
      activeDropdowns: prevState.activeDropdowns.includes(dropdown)
        ? prevState.activeDropdowns.filter(d => d !== dropdown)
        : [...prevState.activeDropdowns, dropdown]
    }));
  };

  render() {
    const { isMenuOpen, activeDropdowns, isMobile } = this.state;

    return (
      <header className={styles.header}>
        <div className={classNames(styles.container, styles.headerContainer)}>
          <div className={styles.logo}>
            <a href="/">simSchool</a>
          </div>

          <button className={styles.hamburgerMenu} onClick={this.toggleMenu}>
            {[...new Array(3)].map((_, idx) =>
              <span
                key={idx}
                className={classNames(styles.hamburgerLine, { [styles.open]: isMenuOpen })}
              />)}
          </button>

          <nav className={classNames(styles.navMenu, { [styles.open]: isMenuOpen })}>
            <ul>
              <li
                className={classNames(styles.dropdownTrigger, { [styles.active]: activeDropdowns.includes(NavOptions.Platform) })}
                onMouseEnter={() => this.handleDropdownEnter(NavOptions.Platform)}
                onMouseLeave={this.handleDropdownLeave}
              >
                <button
                  className={classNames(styles.parentItem, { [styles.isMobile]: isMobile })}
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      this.toggleMobileDropdown(NavOptions.Platform);
                    }
                  }}
                >
                  Platform
                  <span className={styles.dropdownArrow}></span>
                </button>
                <div className={`${styles.dropdownMenu} ${activeDropdowns.includes(NavOptions.Platform) ? styles.active : ''}`}>
                  <div className={styles.dropdownSection}>
                    <h3>About simSchool</h3>
                    <ul className={styles.dropdownSectionList}>
                      <li><a className={styles.dropdownItem} href="/overview">Overview</a></li>
                      <li><a className={styles.dropdownItem} href="/features">Features</a></li>
                      <li><a className={styles.dropdownItem} href="/research">Research</a></li>
                    </ul>
                  </div>
                  <div className={styles.dropdownSection}>
                    <h3>Use Cases</h3>
                    <ul className={styles.dropdownSectionList}>
                      <li><a className={styles.dropdownItem} href="/cte">Career Technical Education</a></li>
                      <li><a className={styles.dropdownItem} href="/educator-prep">Educator Preparation</a></li>
                      <li><a className={styles.dropdownItem} href="/field-work">Field Work</a></li>
                      <li><a className={styles.dropdownItem} href="/professional-dev">Professional Development</a></li>
                      <li><a className={styles.dropdownItem} href="/extracurricular">Extracurricular / After School Programs</a></li>
                      <li><a className={styles.dropdownItem} href="/research">Research</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="/pricing" className={styles.parentItem}>
                  Pricing
                </a>
              </li>
              <li
                className={classNames(styles.dropdownTrigger, { [styles.active]: activeDropdowns.includes(NavOptions.Resources) })}
                onMouseEnter={() => this.handleDropdownEnter(NavOptions.Resources)}
                onMouseLeave={this.handleDropdownLeave}
              >
                <button
                  className={classNames(styles.parentItem, { [styles.isMobile]: isMobile })}
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      this.toggleMobileDropdown(NavOptions.Resources);
                    }
                  }}
                >
                  Resources
                  <span className={styles.dropdownArrow}></span>
                </button>
                <div className={classNames(styles.dropdownMenu, { [styles.active]: activeDropdowns.includes(NavOptions.Resources) })}>
                  <ul className={styles.dropdownSectionList}>
                    <li><a className={styles.dropdownItem} href="#content-catalog">Content Catalog</a></li>
                    <li><a className={styles.dropdownItem} href="#tips-tools">Tips and Tools</a></li>
                    <li><a className={styles.dropdownItem} href="#video-howtos">Video How-tos</a></li>
                  </ul>
                </div>
              </li>
              {isMobile && <li>
                <div className={styles.mobileButtons}>
                  <a href="/login" className={classNames(`btn btn-secondary`, styles.mobileLogin)}>User Login</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/simschool/simschool-demo_discussion" className={`btn btn-primary`}>Book a Demo</a>
                </div>
              </li>}
            </ul>
          </nav>
          <div className={styles.headerButtons}>
            <a href="/login" className={`btn btn-secondary`}>User Login</a>
            <a href="/demo" className={`btn btn-primary`}>Book a Demo</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header; 