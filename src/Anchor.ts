/*!
 * ${copyright}
 */
import WebComponent from "sap/ui/core/webc/WebComponent";
import { addDefaultSlot } from "./utils/defaultSlot";

/**
 * Constructor for a new <code>com.sankey.Anchor</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Jonas Dutzi
 * @version ${version}
 *
 * @constructor
 * @public
 * @name com.sankey.Anchor
 */
export default class Anchor extends WebComponent {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $AnchorSettings);
	constructor(id?: string, settings?: $AnchorSettings);
	constructor(id?: string, settings?: $AnchorSettings) {
		super(id, settings);
	}
	static readonly metadata = {
		tag: "svsankey-anchor",
		properties: {
			item: {
				type: "object",
			},
		},
		defaultAggregation: "default",
		aggregations: {
			...addDefaultSlot(),
		},
	};
}
