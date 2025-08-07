/*!
 * ${copyright}
 */
import WebComponent from "sap/ui/core/webc/WebComponent";

/**
 * Constructor for a new <code>com.sveltesankey.webc.Label</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Jonas Dutzi
 * @version ${version}
 *
 * @constructor
 * @public
 * @name com.sveltesankey.webc.Label
 */
export default class Label extends WebComponent {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(id?: string | $LabelSettings);
	constructor(id?: string, settings?: $LabelSettings);
	constructor(id?: string, settings?: $LabelSettings) {
		super(id, settings);
	}

	static readonly metadata = {
		tag: "svsankey-label",
		properties: {
			/**
			 * The text to display.
			 */
			label: {
				type: "string",
			},
		},
	};
}
