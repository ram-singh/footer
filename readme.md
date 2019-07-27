

## Using this component

### Script tag
- Put a script tag similar to this `<script src='https://unpkg.com/@ram-singh/footer@0.0.1/dist/footer.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
    <footer-component logo='https://anatta.io/_nuxt/icons/icon_64.523b75.png' company='Anatta'></footer-component>

### Node Modules
- Run `npm i @ram-singh/footer --save`
- Put a script tag similar to this `<script src='node_modules/@ram-singh/footer/dist/footer.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
    <footer-component logo='https://anatta.io/_nuxt/icons/icon_64.523b75.png' company='Anatta'></footer-component>

### Stencil WebComponent with React
    import { defineCustomElements as defineFooter } from '@ram-singh/footer/loader';
    defineFooter(window);
    <footer-component logo='https://anatta.io/_nuxt/icons/icon_64.523b75.png' company='Anatta'></footer-component>

### Reference:
1. Creating and Publishing Web Components with Stencil :  https://www.twilio.com/blog/2018/02/creating-and-publishing-web-components-with-stencil.html
2. https://stenciljs.com/docs/my-first-component
