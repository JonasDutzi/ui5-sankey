import Control from "sap/ui/core/Control";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./Item" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $ItemSettings extends $WebComponentSettings {
        item?: object | PropertyBindingInfo | `{${string}}`;
        content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
    }

    export default interface Item {

        // property: item

        /**
         * Gets current value of property "item".
         *
         * @returns Value of property "item"
         */
        getItem(): object;

        /**
         * Sets a new value for property "item".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param item New value for property "item"
         * @returns Reference to "this" in order to allow method chaining
         */
        setItem(item: object): this;

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
    }
}
