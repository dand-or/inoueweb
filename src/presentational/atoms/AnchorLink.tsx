import React, {Component} from 'react'

interface Props{
    children?: string,
    href?: string,
    offset? : any,
    onClick? : any,
    className? : string
}

class AnchorLink extends Component<Props,any> {
  constructor(props : Props) {
    super(props)
    this.smoothScroll = this.smoothScroll.bind(this)
  }
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }
  smoothScroll(e:any) {
    e.preventDefault()
    let offset = () => 0
    if (typeof this.props.offset !== 'undefined') {
      if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
        offset = this.props.offset
      } else {
        offset = () => parseInt(this.props.offset)
      }
    }
    const id = e.currentTarget.getAttribute('href').slice(1)
    const $anchor : any = document.getElementById(id);
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: offsetTop - offset(),
      behavior: 'smooth'
    })
    if (this.props.onClick) {this.props.onClick(e)}
  }
  render() {
    const { offset, ...rest } = this.props;
    return (
      <a {...rest} onClick={this.smoothScroll} />
    )
  }
}

export default AnchorLink
