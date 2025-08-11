import Event from "sap/ui/base/Event";
import Control from "sap/ui/core/Control";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./AnchorContent" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $AnchorContentSettings extends $WebComponentSettings {
        item?: object | PropertyBindingInfo | `{${string}}`;
        highlightpaths?: boolean | PropertyBindingInfo | `{${string}}`;
        content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
        itemclick?: (event: AnchorContent$ItemclickEvent) => void;
        anchormouseenter?: (event: AnchorContent$AnchormouseenterEvent) => void;
        anchormouseleave?: (event: AnchorContent$AnchormouseleaveEvent) => void;
    }

    export default interface AnchorContent {

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

        // property: highlightpaths

        /**
         * Gets current value of property "highlightpaths".
         *
         * @returns Value of property "highlightpaths"
         */
        getHighlightpaths(): boolean;

        /**
         * Sets a new value for property "highlightpaths".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param highlightpaths New value for property "highlightpaths"
         * @returns Reference to "this" in order to allow method chaining
         */
        setHighlightpaths(highlightpaths: boolean): this;

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

        // event: itemclick

        /**
         * Attaches event handler "fn" to the "itemclick" event of this "AnchorContent".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "AnchorContent" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "AnchorContent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachItemclick(fn: (event: AnchorContent$ItemclickEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "itemclick" event of this "AnchorContent".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "AnchorContent" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "AnchorContent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachItemclick<CustomDataType extends object>(data: CustomDataType, fn: (event: AnchorContent$ItemclickEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "itemclick" event of this "AnchorContent".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachItemclick(fn: (event: AnchorContent$ItemclickEvent) => void, listener?: object): this;

        /**
         * Fires event "itemclick" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        fireItemclick(parameters?: AnchorContent$ItemclickEventParameters): this;

        // event: anchormouseenter

        /**
         * Attaches event handler "fn" to the "anchormouseenter" event of this "AnchorContent".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "AnchorContent" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "AnchorContent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachAnchormouseenter(fn: (event: AnchorContent$AnchormouseenterEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "anchormouseenter" event of this "AnchorContent".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "AnchorContent" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "AnchorContent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachAnchormouseenter<CustomDataType extends object>(data: CustomDataType, fn: (event: AnchorContent$AnchormouseenterEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "anchormouseenter" event of this "AnchorContent".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachAnchormouseenter(fn: (event: AnchorContent$AnchormouseenterEvent) => void, listener?: object): this;

        /**
         * Fires event "anchormouseenter" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        fireAnchormouseenter(parameters?: AnchorContent$AnchormouseenterEventParameters): this;

        // event: anchormouseleave

        /**
         * Attaches event handler "fn" to the "anchormouseleave" event of this "AnchorContent".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "AnchorContent" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "AnchorContent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachAnchormouseleave(fn: (event: AnchorContent$AnchormouseleaveEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "anchormouseleave" event of this "AnchorContent".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "AnchorContent" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "AnchorContent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachAnchormouseleave<CustomDataType extends object>(data: CustomDataType, fn: (event: AnchorContent$AnchormouseleaveEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "anchormouseleave" event of this "AnchorContent".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachAnchormouseleave(fn: (event: AnchorContent$AnchormouseleaveEvent) => void, listener?: object): this;

        /**
         * Fires event "anchormouseleave" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        fireAnchormouseleave(parameters?: AnchorContent$AnchormouseleaveEventParameters): this;
    }

    /**
     * Interface describing the parameters of AnchorContent's 'itemclick' event.
     */
    // eslint-disable-next-line
    export interface AnchorContent$ItemclickEventParameters {
    }

    /**
     * Interface describing the parameters of AnchorContent's 'anchormouseenter' event.
     */
    // eslint-disable-next-line
    export interface AnchorContent$AnchormouseenterEventParameters {
    }

    /**
     * Interface describing the parameters of AnchorContent's 'anchormouseleave' event.
     */
    // eslint-disable-next-line
    export interface AnchorContent$AnchormouseleaveEventParameters {
    }

    /**
     * Type describing the AnchorContent's 'itemclick' event.
     */
    export type AnchorContent$ItemclickEvent = Event<AnchorContent$ItemclickEventParameters>;

    /**
     * Type describing the AnchorContent's 'anchormouseenter' event.
     */
    export type AnchorContent$AnchormouseenterEvent = Event<AnchorContent$AnchormouseenterEventParameters>;

    /**
     * Type describing the AnchorContent's 'anchormouseleave' event.
     */
    export type AnchorContent$AnchormouseleaveEvent = Event<AnchorContent$AnchormouseleaveEventParameters>;
}
