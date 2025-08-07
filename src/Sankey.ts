/*!
 * ${copyright}
 */
import WebComponent from "sap/ui/core/webc/WebComponent";

/**
 * Constructor for a new <code>com.sankey.Sankey</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Jonas Dutzi
 * @version ${version}
 *
 * @constructor
 * @public
 * @name com.sankey.Sankey
 */
export default class Sankey extends WebComponent {
	constructor(idOrSettings?: string | $SankeySettings);
	constructor(id?: string, settings?: $SankeySettings);
	constructor(id?: string, settings?: $SankeySettings) {
		super(id, settings);
	}
	static readonly metadata = {
		tag: "sv-sankey",
		properties: {
			showheaders: {
				type: "boolean",
				defaultValue: true,
			},
			highlightpaths: {
				type: "boolean",
				defaultValue: true,
			},
			maxpathheight: {
				type: "int",
				defaultValue: 32,
			},
			minpathheight: {
				type: "int",
				defaultValue: 1,
			},
		},
		defaultAggregation: "content",
		aggregations: {
			content: {
				type: "sap.ui.core.Control",
				multiple: true,
			},
		},
		events: {
			pathclick: {},
			pathmouseenter: {},
			pathmouseleave: {},
		},
	};
}
