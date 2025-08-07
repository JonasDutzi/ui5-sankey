/*!
 * ${copyright}
 */
import WebComponent from "sap/ui/core/webc/WebComponent";

/**
 * Constructor for a new <code>com.sankey.AnchorContent</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Jonas Dutzi
 * @version ${version}
 *
 * @constructor
 * @public
 * @name com.sankey.AnchorContent
 */
export default class AnchorContent extends WebComponent {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $AnchorContentSettings);
	constructor(id?: string, settings?: $AnchorContentSettings);
	constructor(id?: string, settings?: $AnchorContentSettings) {
		super(id, settings);
	}
	static readonly metadata = {
		tag: "svsankey-anchorcontent",
		properties: {
			item: {
				type: "object",
			},
			highlightpaths: {
				type: "boolean",
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
			itemclick: {},
			anchormouseenter: {},
			anchormouseleave: {},
		},
	};
}
