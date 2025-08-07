/*!
 * ${copyright}
 */
import WebComponent from "sap/ui/core/webc/WebComponent";

/**
 * Constructor for a new <code>com.sveltesankey.webc.Item</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Jonas Dutzi
 * @version ${version}
 *
 * @constructor
 * @public
 * @name com.sveltesankey.webc.Item
 */
export default class Item extends WebComponent {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $ItemSettings);
	constructor(id?: string, settings?: $ItemSettings);
	constructor(id?: string, settings?: $ItemSettings) {
		super(id, settings);
	}
	static readonly metadata = {
		tag: "svsankey-item",
		properties: {
			item: {
				type: "object",
			},
		},
		defaultAggregation: "content",
		aggregations: {
			content: {
				type: "sap.ui.core.Control",
				multiple: true,
			},
		},
	};
}
