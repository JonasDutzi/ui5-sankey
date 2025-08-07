/*!
 * ${copyright}
 */
import WebComponent from "sap/ui/core/webc/WebComponent";

/**
 * Constructor for a new <code>com.sveltesankey.webc.Column</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Jonas Dutzi
 * @version ${version}
 *
 * @constructor
 * @public
 * @name com.sveltesankey.webc.Column
 */
export default class Column extends WebComponent {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $ColumnSettings);
	constructor(id?: string, settings?: $ColumnSettings);
	constructor(id?: string, settings?: $ColumnSettings) {
		super(id, settings);
	}
	static readonly metadata = {
		tag: "svsankey-column",
		properties: {},
		defaultAggregation: "content",
		aggregations: {
			label: {
				type: "sap.ui.core.Control",
				multiple: false,
				slot: "label",
			},
			content: {
				type: "sap.ui.core.Control",
				multiple: true,
			},
		},
	};
}
