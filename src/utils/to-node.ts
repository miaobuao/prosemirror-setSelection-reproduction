import { Schema } from 'prosemirror-model'
import { isArray, isPlainObject } from 'lodash-es'

export function toNode(schema: Schema, content: string | object | any[]) {
	try {
		if (isArray(content)) {
			const res = content.map((item) => schema.nodeFromJSON(item))
			return res
		}
		if (isPlainObject(content)) {
			return schema.nodeFromJSON(content)
		}
		const json = JSON.parse(content as string)
		return schema.nodeFromJSON(json)
	} catch (e) {
		if (typeof content === 'string') {
			return content
				.split('\n')
				.map((line) =>
					schema.node('paragraph', null, schema.text(line || '\u200b')),
				)
		}
		throw e
	}
}
