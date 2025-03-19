import React, { Component } from 'react';
import '../styles/Header.css';

interface HeaderState {
  isMenuOpen: boolean;
  activeDropdown: string | null;
  mobileDropdowns: string[];
  isMobile: boolean;
}

class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpen: false,
      activeDropdown: null,
      mobileDropdowns: [],
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
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  handleDropdownEnter = (dropdown: string) => {
    if (!this.state.isMobile) {
      this.setState({ activeDropdown: dropdown });
    }
  };

  handleDropdownLeave = () => {
    if (!this.state.isMobile) {
      this.setState({ activeDropdown: null });
    }
  };

  toggleMobileDropdown = (dropdown: string) => {
    this.setState(prevState => ({
      mobileDropdowns: prevState.mobileDropdowns.includes(dropdown)
        ? prevState.mobileDropdowns.filter(d => d !== dropdown)
        : [...prevState.mobileDropdowns, dropdown]
    }));
  };

  render() {
    const { isMenuOpen, activeDropdown, mobileDropdowns, isMobile } = this.state;

    return (
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <a href="/">SimSchool</a>
          </div>
          
          <button className="hamburger-menu" onClick={this.toggleMenu}>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li 
                className={`dropdown-trigger ${mobileDropdowns.includes('platform') ? 'active' : ''}`}
                onMouseEnter={() => this.handleDropdownEnter('platform')}
                onMouseLeave={this.handleDropdownLeave}
              >
                <a 
                  href="#platform"
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      this.toggleMobileDropdown('platform');
                    }
                  }}
                >
                  Platform
                  <span className="dropdown-arrow"></span>
                </a>
                <div className={`dropdown-menu ${(!isMobile && activeDropdown === 'platform') || (isMobile && mobileDropdowns.includes('platform')) ? 'active' : ''}`}>
                  <div className="dropdown-section">
                    <h3>About simSchool</h3>
                    <ul>
                      <li><a href="#overview">Overview</a></li>
                      <li><a href="#features">Features</a></li>
                      <li><a href="#research">Research</a></li>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    <h3>Use Cases</h3>
                    <ul>
                      <li><a href="#cte">Career Technical Education</a></li>
                      <li><a href="#educator-prep">Educator Preparation</a></li>
                      <li><a href="#field-work">Field Work</a></li>
                      <li><a href="#professional-dev">Professional Development</a></li>
                      <li><a href="#research">Research</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li 
                className={`dropdown-trigger ${mobileDropdowns.includes('pricing') ? 'active' : ''}`}
                onMouseEnter={() => this.handleDropdownEnter('pricing')}
                onMouseLeave={this.handleDropdownLeave}
              >
                <a 
                  href="#pricing"
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      this.toggleMobileDropdown('pricing');
                    }
                  }}
                >
                  Pricing
                  <span className="dropdown-arrow"></span>
                </a>
                <div className={`dropdown-menu ${(!isMobile && activeDropdown === 'pricing') || (isMobile && mobileDropdowns.includes('pricing')) ? 'active' : ''}`}>
                  <ul>
                    <li><a href="#teacher-prep">Teacher Preparation</a></li>
                    <li><a href="#professional-dev">Professional Development</a></li>
                    <li><a href="#cte">Career Technical Education</a></li>
                    <li><a href="#research">Research</a></li>
                  </ul>
                </div>
              </li>
              <li 
                className={`dropdown-trigger ${mobileDropdowns.includes('resources') ? 'active' : ''}`}
                onMouseEnter={() => this.handleDropdownEnter('resources')}
                onMouseLeave={this.handleDropdownLeave}
              >
                <a 
                  href="#resources"
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      this.toggleMobileDropdown('resources');
                    }
                  }}
                >
                  Resources
                  <span className="dropdown-arrow"></span>
                </a>
                <div className={`dropdown-menu ${(!isMobile && activeDropdown === 'resources') || (isMobile && mobileDropdowns.includes('resources')) ? 'active' : ''}`}>
                  <ul>
                    <li><a href="#content-catalog">Content Catalog</a></li>
                    <li><a href="#tips-tools">Tips and Tools</a></li>
                    <li><a href="#video-howtos">Video How-tos</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <a href="/login" className="btn btn-outline">User Login</a>
            <a href="/demo" className="btn btn-primary">Book a Demo</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header; 