import Control from "sap/ui/core/Control";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./ColumnContent" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $ColumnContentSettings extends $WebComponentSettings {
        data?: object | PropertyBindingInfo | `{${string}}`;
        content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
        label?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
    }

    export default interface ColumnContent {

        // property: data

        /**
         * Gets current value of property "data".
         *
         * @returns Value of property "data"
         */
        getData(): object;

        /**
         * Sets a new value for property "data".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param data New value for property "data"
         * @returns Reference to "this" in order to allow method chaining
         */
        setData(data: object): this;

        // aggregation: content

        /**
         * Gets content of aggregation "content".
         */
        getContent(): Control[];

        /**
         * Adds some content to the aggregation "content".
         *
         * @param content The content to add; if empty, nothing is inserted
         * @returns Reference to "this" in order to allow method chaining
         */
        addContent(content: Control): this;

        /**
         * Inserts a content into the aggregation "content".
         *
         * @param content The content to insert; if empty, nothing is inserted
         * @param index The "0"-based index the content should be inserted at; for
         *              a negative value of "iIndex", the content is inserted at position 0; for a value
         *              greater than the current size of the aggregation, the content is inserted at
         *              the last position
         * @returns Reference to "this" in order to allow method chaining
         */
        insertContent(content: Control, index: number): this;

        /**
         * Removes a content from the aggregation "content".
         *
         * @param content The content to remove or its index or id
         * @returns The removed content or "null"
         */
        removeContent(content: number | string | Control): Control | null;

        /**
         * Removes all the controls from the aggregation "content".
         * Additionally, it unregisters them from the hosting UIArea.
         *
         * @returns  An array of the removed elements (might be empty)
         */
        removeAllContent(): Control[];

        /**
         * Checks for the provided "sap.ui.core.Control" in the aggregation "content".
         * and returns its index if found or -1 otherwise.
         *
         * @param content The content whose index is looked for
         * @returns The index of the provided control in the aggregation if found, or -1 otherwise
         */
        indexOfContent(content: Control): number;

        /**
         * Destroys all the content in the aggregation "content".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyContent(): this;

        // aggregation: label

        /**
         * Gets content of aggregation "label".
         */
        getLabel(): Control[];

        /**
         * Adds some label to the aggregation "label".
         *
         * @param label The label to add; if empty, nothing is inserted
         * @returns Reference to "this" in order to allow method chaining
         */
        addLabel(label: Control): this;

        /**
         * Inserts a label into the aggregation "label".
         *
         * @param label The label to insert; if empty, nothing is inserted
         * @param index The "0"-based index the label should be inserted at; for
         *              a negative value of "iIndex", the label is inserted at position 0; for a value
         *              greater than the current size of the aggregation, the label is inserted at
         *              the last position
         * @returns Reference to "this" in order to allow method chaining
         */
        insertLabel(label: Control, index: number): this;

        /**
         * Removes a label from the aggregation "label".
         *
         * @param label The label to remove or its index or id
         * @returns The removed label or "null"
         */
        removeLabel(label: number | string | Control): Control | null;

        /**
         * Removes all the controls from the aggregation "label".
         * Additionally, it unregisters them from the hosting UIArea.
         *
         * @returns  An array of the removed elements (might be empty)
         */
        removeAllLabel(): Control[];

        /**
         * Checks for the provided "sap.ui.core.Control" in the aggregation "label".
         * and returns its index if found or -1 otherwise.
         *
         * @param label The label whose index is looked for
         * @returns The index of the provided control in the aggregation if found, or -1 otherwise
         */
        indexOfLabel(label: Control): number;

        /**
         * Destroys all the label in the aggregation "label".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyLabel(): this;
    }
}
