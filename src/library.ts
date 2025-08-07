/*!
 * ${copyright}
 */

import Lib from "sap/ui/core/Lib";

// library dependencies must also be imported here
import "sap/ui/core/library";
import "svelte-sankey/webc/svelte";
import "svelte-sankey/webc/Anchor";
import "svelte-sankey/webc/AnchorContent";
import "svelte-sankey/webc/Column";
import "svelte-sankey/webc/ColumnContent";
import "svelte-sankey/webc/ColumnHeader";
import "svelte-sankey/webc/Item";
import "svelte-sankey/webc/Label";
import "svelte-sankey/webc/SankeyChart";
import "svelte-sankey/webc/Sankey";

/**
 * Initialization Code and shared classes of library com.sveltesankey.webc.
 */

// delegate further initialization of this library to the Core
const thisLib: { [key: string]: unknown } = Lib.init({
	name: "com.sankey",
	version: "${version}",
	dependencies: [
		// keep in sync with the ui5.yaml and .library files
		"sap.ui.core",
		"sap.m",
	],
	interfaces: [],
	controls: [
		"com.sankey.Anchor",
		"com.sankey.AnchorContent",
		"com.sankey.Column",
		"com.sankey.ColumnContent",
		"com.sankey.ColumnHeader",
		"com.sankey.Item",
		"com.sankey.Label",
		"com.sankey.SankeyChart",
		"com.sankey.Sankey",
	],
	elements: [],
	noLibraryCSS: false, // if no CSS is provided, you can disable the library.css load here
}) as { [key: string]: unknown };

// export the library namespace
export default thisLib;
