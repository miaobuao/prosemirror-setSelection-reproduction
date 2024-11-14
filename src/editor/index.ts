import { Fragment, Schema, Slice } from 'prosemirror-model'
import { EditorView } from 'prosemirror-view'
import { Selection } from 'prosemirror-state'

import { createEditor } from './create-editor'
import { toNode } from '../utils/to-node'
import { htmlSchema } from './schema'

export class Editor {

	view: EditorView

	constructor(private container: HTMLElement = document.createElement('div'), private schema: Schema = htmlSchema) {
		this.view = createEditor(this.schema, this.container)
	}

	setContent(content: string | object) {
		const node = toNode(this.view.state.schema, content)
		const fragment = Fragment.from(node)
		const slice = new Slice(fragment, 0, 0)
		const tr = this.view.state.tr.replace(
			0,
			this.view.state.doc.content.size,
			slice,
		)
		this.view.dispatch(tr)
		return this
	}

	setSelection(sel: Selection) {
		const tr = this.view.state.tr.setSelection(sel)
		this.view.dispatch(tr)
		return this
	}
}
