import { Selection } from "prosemirror-state"

import { Editor } from './editor';
import { htmlSchema } from './editor/schema';

import './index.css';

const app = document.querySelector('#root')!
const editorDom = document.createElement('div')
app.appendChild(editorDom)

const editor = new Editor(editorDom, htmlSchema)

editor
  .setContent('abcdefghijklm\nnopqrstuvwxyz')

editorDom.addEventListener("click", () => {
  editor.setSelection(Selection.atEnd(editor.view.state.doc))
})
