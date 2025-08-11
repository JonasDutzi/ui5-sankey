export const sankeyData = {
	data: [
		{
			id: "input",
			columnLabel: "Column 1",
			rows: [
				{
					rowLabel: "Products",
					items: [
						{
							id: "product_1",
							label: "Product 1",
							links: [
								{
									target: "semi_finished_product",
									value: 5,
									strokeColor: "var(--stroke-color-1)",
									strokeColorHover: "var(--stroke-color-1-hover)",
								},
							],
							data: {
								totalValue: 5,
							},
							anchorColor: "var(--anchor-color-1)",
						},
						{
							id: "product_2",
							label: "Product 2",
							links: [
								{
									target: "semi_finished_product",
									value: 3,
									strokeColor: "var(--stroke-color-2)",
									strokeColorHover: "var(--stroke-color-2-hover)",
								},
							],
							data: {
								totalValue: 3,
							},
							anchorColor: "var(--anchor-color-2)",
						},
					],
				},
				{
					rowLabel: "Raw Materials",
					items: [
						{
							id: "raw_material_1",
							label: "Raw Material 1",
							links: [
								{
									target: "semi_finished_product",
									value: 8,
									strokeColor: "var(--stroke-color-3)",
									strokeColorHover: "var(--stroke-color-3-hover)",
								},
							],
							data: {
								totalValue: 8,
							},
							anchorColor: "var(--anchor-color-3)",
						},
					],
				},
			],
		},
		{
			id: "root",
			columnLabel: "Column 2",
			rows: [
				{
					rowLabel: "Semi-finished Product",
					items: [
						{
							id: "semi_finished_product",
							label: "Semi-finished Product",
							links: [
								{
									target: "finished_product_1",
									value: 8,
									strokeColor: "var(--stroke-color-4)",
									strokeColorHover: "var(--stroke-color-4-hover)",
								},
								{
									target: "finished_product_2",
									value: 8,
									strokeColor: "var(--stroke-color-1)",
									strokeColorHover: "var(--stroke-color-1-hover)",
								},
							],
							data: {
								totalValue: 16,
							},
							anchorColor: "var(--sapBrandColor)",
						},
					],
				},
			],
		},
		{
			id: "Column 3",
			columnLabel: "Output",
			rows: [
				{
					rowLabel: "Products",
					items: [
						{
							id: "finished_product_1",
							label: "Finished Product 1",
							data: {
								totalValue: 8,
							},
							anchorColor: "var(--anchor-color-5)",
						},
						{
							id: "finished_product_2",
							label: "Finished Product 2",
							data: {
								totalValue: 8,
							},
							anchorColor: "var(--anchor-color-6)",
						},
					],
				},
			],
		},
	],
};
