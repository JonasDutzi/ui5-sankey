import VBox from "sap/m/VBox";
import Control from "sap/ui/core/Control";
import Sankey from "com/sankey/Sankey";
import { sankeyData } from "./data";
import ColumnContent from "com/sankey/ColumnContent";
import Anchor from "com/sankey/Anchor";
import Fragment from "sap/ui/core/Fragment";
import Element from "sap/ui/core/Element";
import SankeyChart from "com/sankey/SankeyChart";
import Item from "com/sankey/Item";
import Title from "sap/m/Title";
import HBox from "sap/m/HBox";
import Button from "sap/m/Button";
import Text from "sap/m/Text";
import HorizontalLayout from "sap/ui/layout/HorizontalLayout";
import ColumnHeader from "com/sankey/ColumnHeader";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
	const mainContent = new VBox().placeAt("content");
	const contentTwo = new VBox().placeAt("content-two");

	const columns = [];
	const headers = [];
	for (const data of sankeyData.data) {
		const columnContent = new ColumnContent({
			data: data,
			content: [new Title({ text: data.columnLabel })],
		});

		for (const row of data.rows) {
			for (const item of row.items) {
				const anchor = new Anchor({
					item: item,
				});
				const anchorContent = new HBox({
					items: [
						new Button({
							text: item.label,
							press: oEvent => {
								console.log("Button pressed", item);
								const text = new Title({ text: item.label });
								contentTwo.addItem(text);
							},
						}),
					],
				}).addStyleClass("sapUiSmallMarginBegin");
				const itemControl = new Item({
					item: item,
					content: [anchor, anchorContent],
				});
				columnContent.addContent(itemControl as Control);
			}
		}
		columns.push(columnContent);
	}

	const chart = new Sankey({
		content: columns,
		minpathheight: 1,
		maxpathheight: 30,
		showheaders: true,
	});
	mainContent.addItem(chart as Control);

	// const fragment = await Fragment.load({
	// 	name: "com.sankey.fragments.Fragment",
	// 	controller: this,
	// });
	// mainContent.addItem(fragment as Control);
	// const chart = Element.getElementById("chart") as SankeyChart;
	// chart.setChartdata(sankeyData);
})();
