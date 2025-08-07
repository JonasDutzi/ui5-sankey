/*!
 * ${copyright}
 */
import WebComponent from "sap/ui/core/webc/WebComponent";

/**
 * Constructor for a new <code>com.sveltesankey.webc.ColumnContent</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Jonas Dutzi
 * @version ${version}
 *
 * @constructor
 * @public
 * @name com.sveltesankey.webc.ColumnContent
 */
export default class ColumnContent extends WebComponent {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $ColumnContentSettings);
	constructor(id?: string, settings?: $ColumnContentSettings);
	constructor(id?: string, settings?: $ColumnContentSettings) {
		super(id, settings);
	}
	static readonly metadata = {
		tag: "svsankey-column-content",
		properties: {
			data: {
				type: "object",
			},
		},
		defaultAggregation: "content",
		aggregations: {
			content: {
				type: "sap.ui.core.Control",
				multiple: true,
			},
			label: {
				type: "sap.ui.core.Control",
				multiple: true,
			},
		},
	};
}
