import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer.css',
  shadow: true
})
export class Footer {
  @Prop() company: string;
  @Prop() logo: string;
  render() {
    const footerText: string = `© 2019 ${this.company} Inc. All rights reserved.`;
    return (
        <footer class="footer-container">
            <img alt="logo" class="footerLogo" src={this.logo}></img>
            <label> {footerText} </label>
        </footer>
    );
  }
}