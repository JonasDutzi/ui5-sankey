import VBox from "sap/m/VBox";
import Control from "sap/ui/core/Control";
import Sankey from "com/sankey/Sankey";
import { sankeyData } from "./data";
import ColumnContent from "com/sankey/ColumnContent";
import Anchor from "com/sankey/Anchor";
import Item from "com/sankey/Item";
import Fragment from "sap/ui/core/Fragment";
import Element from "sap/ui/core/Element";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
	const mainContent = new VBox().placeAt("content");

	// const columns = [];
	// for (const data of sankeyData.data) {
	// 	const columnContent = new ColumnContent({
	// 		data: data,
	// 	});

	// 	for (const row of data.rows) {
	// 		for (const item of row.items) {
	// 			const anchor = new Anchor({
	// 				item: item,
	// 			});
	// 			const itemControl = new Item({
	// 				item: item,
	// 				content: [anchor],
	// 			});
	// 			columnContent.addContent(itemControl as Control);
	// 		}
	// 	}
	// 	columns.push(columnContent);
	// }

	// const chart = new Sankey({
	// 	content: columns,
	// 	minpathheight: 1,
	// 	maxpathheight: 20,
	// });
	// mainContent.addItem(chart as Control);

	const fragment = await Fragment.load({
		name: "com.sankey.fragments.Fragment",
		controller: this,
	});
	mainContent.addItem(fragment as Control);
	const chart = Element.getElementById("chart") as SankeyChart;
	chart.setChartdata(sankeyData);
})();
