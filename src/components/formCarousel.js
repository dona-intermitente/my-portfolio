import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import classNames from 'classnames';

import style from 'styles/blocks/formCarousel.css';

smoothscroll.polyfill(); // enables smoothscroll for many browsers


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.resizeTimer = undefined;
    this.currentPage = 0;
    this.formRef = React.createRef();
    this.heights = {};
    this.state = {
      height: 0,
    };
  }

  componentDidMount = () => {
    this.lastPage = this.getPageLength() - 1; //-1 for indexing
    this.currentPage = this.getCurrentPage("down");
    this.setState({ height: this.heights[0] });
    window.addEventListener("resize", this.resizeHandler);
    document.querySelector(".form-carousel").addEventListener('keyup', this.tabScroll);
  }

  // Keep horizontal scroll on current page when resizing
  resizeHandler = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.scrollToPage(this.currentPage);
    }, 50); // timeout is 50 ms
  }

  // Determines what page is currently being shown
  getCurrentPage = (round) => {
    let left = this.formRef.current.scrollLeft;
    let width = this.formRef.current.clientWidth;
    if (round === "up") return Math.ceil(left / width)
    if (round === "down") return Math.floor(left / width);
    return left / width
  }

  getPageLength = () => {
    return React.Children.count(this.props.children);
  }

  addPageHeight = (page, height) => {
    this.heights[page.toString()] = height;
  }

  scrollToPage = (page) => {
    // Can't "scroll" past lastpage or before first page
    if (page <= this.lastPage && page >= 0) {
      // update currentPage & scroll
      this.currentPage = page;
      this.setState({});
      this.formRef.current.scrollTo({
        behavior: 'smooth',
        left: page * (this.formRef.current.offsetWidth),
      })
      // update height
      setTimeout(() => {
        this.setState({ height: this.heights[this.currentPage.toString()] });
      }, this.props.resizeDelay >= 0  ? this.props.resizeDelay : 600); // default delay is 0.6s
    }
  }

  // TODO: issue with pressing [shift+tab] -> registering as [shift+tab] and then [tab] immediately after
  tabScroll = (e) => {
    // tab (+shfit) scrolling
    if (e.key === "Tab" && !e.shiftKey) {
      if (this.currentPage !== this.getCurrentPage()) this.scrollToPage(this.getCurrentPage("up"));
    } else if (e.key === "Tab" && e.shiftKey) {
      if (this.currentPage !== this.getCurrentPage()) this.scrollToPage(this.getCurrentPage("down"));
    }
  }

  prevPage = () => this.scrollToPage(this.currentPage - 1);
  nextPage = () => this.scrollToPage(this.currentPage + 1);

  render = () => {

    let NavKeys = this.navKeys;

    let containerStyle = classNames(
      "form-carousel",
      style.container,
    );

    let formStyle = classNames(
      'form',
      style.form,
    )

    let formInlineStyle = {
      height: this.state.height && this.props.autoHeight > 0 ? this.state.height : "initial",
      ...(this.props.style ? this.props.style : {}),
    }

    return (
      <div className={containerStyle}>
        <form
          onSubmit={!!this.props.onSubmit ? this.props.onSubmit : null}
          action={!!this.props.action ? this.props.action : null}
          method={!!this.props.method ? this.props.action : null}
          className={formStyle}
          style={formInlineStyle}
          ref={this.formRef}
        >
          { /* Only accept Page class */
            this.props.children.map(child => {
              if (child.type.name === Page.name) {
                return React.cloneElement(child, {
                  currentPage: this.current,
                  uploadHeight: this.addPageHeight,
                })
              }
              throw new Error("Carousel Form only accepts Page components")
            })
          }
        </form>
        <NavKeys />
      </div>
    );
  }

  navKeys = () => {
    if (!this.props.navigation) return null

    let navStyle = classNames(
      'nav',
      style.navcontainer,
    );

    return (
      <div className={navStyle}>
        <i className={this.currentPage <= 0 ? classNames('fas fa-arrow-left hide') : classNames('fas fa-arrow-left')} 
           onClick={this.prevPage} disabled={this.currentPage <= 0} ></i>
        <i
          className={this.currentPage < this.lastPage ? classNames('fas fa-arrow-right') : classNames('text-title-light enviar')}
          onClick={this.currentPage >= this.lastPage ? this.props.onSubmit : this.nextPage}>
          {this.currentPage >= this.lastPage ? " enviar" : null}
        </i>
        <div>
            <span className={this.currentPage <= 0 ? classNames(' dot active') : classNames('dot')}></span> 
            <span className={this.currentPage === 1 ? classNames(' dot active') : classNames('dot')}></span> 
            <span className={this.currentPage >= this.lastPage ? classNames(' dot active') :  classNames('dot')}></span> 
        </div>
      </div>
    )
  }
}

Form.defaultProps = {
  removeDefaultStyle: false,
  resizeDelay: 600,
  autoHeight: false,
  navigation: true,
}

// Form Page
export class Page extends Component {
  constructor(props) {
    super(props);
    this.pageRef = React.createRef();
  }

  componentDidMount = () => {
    this.page = this.getPage();
    this.height = this.getHeight();
    this.props.uploadHeight(this.page, this.height);
  }

  // returns height of this page (varies depnding on page content)
  getHeight = () => this.pageRef.current.offsetHeight;

  // Determines what page this FormPage is (assuming all pages are equal length)
  getPage = () => {
    let offsetLeft = this.pageRef.current.offsetLeft;
    let offsetWidth = this.pageRef.current.offsetWidth;
    return Math.floor(offsetLeft / offsetWidth);
  }

  render = () => {

    let formPageStyle = classNames(
      'page',
      style.form__page,
    )

    return (
      <div className={formPageStyle} ref={this.pageRef} style={this.props.style ? this.props.style : {}} >
        {this.props.children}
      </div>
    )
  }
}