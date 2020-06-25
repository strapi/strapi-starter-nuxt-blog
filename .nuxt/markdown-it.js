import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  const md = new MarkdownIt({"preset":"default","linkify":true,"breaks":true})

  inject('md', md)
}
