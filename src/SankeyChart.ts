/*!
 * ${copyright}
 */
import WebComponent from "sap/ui/core/webc/WebComponent";

/**
 * Constructor for a new <code>com.sveltesankey.webc.SankeyChart</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Jonas Dutzi
 * @version ${version}
 *
 * @constructor
 * @public
 * @name com.sveltesankey.webc.SankeyChart
 */
export default class SankeyChart extends WebComponent {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $SankeyChartSettings);
	constructor(id?: string, settings?: $SankeyChartSettings);
	constructor(id?: string, settings?: $SankeyChartSettings) {
		super(id, settings);
	}
	static readonly metadata = {
		tag: "svsankey-chart",
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
			chartdata: {
				type: "object",
			},
		},
		events: {
			itemclick: {},
		},
	};
}
