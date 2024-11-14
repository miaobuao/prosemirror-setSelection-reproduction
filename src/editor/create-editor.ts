import { baseKeymap } from 'prosemirror-commands'
import { keymap } from 'prosemirror-keymap'
import { Schema } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

export function createEditor(schema: Schema, dom: Element) {
	const state = EditorState.create({
		schema,
		plugins: [ keymap(baseKeymap) ],
	})
	const view = new EditorView(dom, {
		state
	})
	return view
}
