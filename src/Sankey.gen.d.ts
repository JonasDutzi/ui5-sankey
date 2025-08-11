import Event from "sap/ui/base/Event";
import Control from "sap/ui/core/Control";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./Sankey" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SankeySettings extends $WebComponentSettings {
        showheaders?: boolean | PropertyBindingInfo | `{${string}}`;
        highlightpaths?: boolean | PropertyBindingInfo | `{${string}}`;
        maxpathheight?: number | PropertyBindingInfo | `{${string}}`;
        minpathheight?: number | PropertyBindingInfo | `{${string}}`;
        content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
        pathclick?: (event: Sankey$PathclickEvent) => void;
        pathmouseenter?: (event: Sankey$PathmouseenterEvent) => void;
        pathmouseleave?: (event: Sankey$PathmouseleaveEvent) => void;
    }

    export default interface Sankey {

        // property: showheaders

        /**
         * Gets current value of property "showheaders".
         *
         * Default value is: true
         * @returns Value of property "showheaders"
         */
        getShowheaders(): boolean;

        /**
         * Sets a new value for property "showheaders".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: true
         * @param [showheaders=true] New value for property "showheaders"
         * @returns Reference to "this" in order to allow method chaining
         */
        setShowheaders(showheaders: boolean): this;

        // property: highlightpaths

        /**
         * Gets current value of property "highlightpaths".
         *
         * Default value is: true
         * @returns Value of property "highlightpaths"
         */
        getHighlightpaths(): boolean;

        /**
         * Sets a new value for property "highlightpaths".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: true
         * @param [highlightpaths=true] New value for property "highlightpaths"
         * @returns Reference to "this" in order to allow method chaining
         */
        setHighlightpaths(highlightpaths: boolean): this;

        // property: maxpathheight

        /**
         * Gets current value of property "maxpathheight".
         *
         * Default value is: 32
         * @returns Value of property "maxpathheight"
         */
        getMaxpathheight(): number;

        /**
         * Sets a new value for property "maxpathheight".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: 32
         * @param [maxpathheight=32] New value for property "maxpathheight"
         * @returns Reference to "this" in order to allow method chaining
         */
        setMaxpathheight(maxpathheight: number): this;

        // property: minpathheight

        /**
         * Gets current value of property "minpathheight".
         *
         * Default value is: 1
         * @returns Value of property "minpathheight"
         */
        getMinpathheight(): number;

        /**
         * Sets a new value for property "minpathheight".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: 1
         * @param [minpathheight=1] New value for property "minpathheight"
         * @returns Reference to "this" in order to allow method chaining
         */
        setMinpathheight(minpathheight: number): this;

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

        // event: pathclick

        /**
         * Attaches event handler "fn" to the "pathclick" event of this "Sankey".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "Sankey" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "Sankey" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPathclick(fn: (event: Sankey$PathclickEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "pathclick" event of this "Sankey".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "Sankey" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "Sankey" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPathclick<CustomDataType extends object>(data: CustomDataType, fn: (event: Sankey$PathclickEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "pathclick" event of this "Sankey".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachPathclick(fn: (event: Sankey$PathclickEvent) => void, listener?: object): this;

        /**
         * Fires event "pathclick" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        firePathclick(parameters?: Sankey$PathclickEventParameters): this;

        // event: pathmouseenter

        /**
         * Attaches event handler "fn" to the "pathmouseenter" event of this "Sankey".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "Sankey" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "Sankey" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPathmouseenter(fn: (event: Sankey$PathmouseenterEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "pathmouseenter" event of this "Sankey".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "Sankey" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "Sankey" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPathmouseenter<CustomDataType extends object>(data: CustomDataType, fn: (event: Sankey$PathmouseenterEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "pathmouseenter" event of this "Sankey".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachPathmouseenter(fn: (event: Sankey$PathmouseenterEvent) => void, listener?: object): this;

        /**
         * Fires event "pathmouseenter" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        firePathmouseenter(parameters?: Sankey$PathmouseenterEventParameters): this;

        // event: pathmouseleave

        /**
         * Attaches event handler "fn" to the "pathmouseleave" event of this "Sankey".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "Sankey" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "Sankey" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPathmouseleave(fn: (event: Sankey$PathmouseleaveEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "pathmouseleave" event of this "Sankey".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "Sankey" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "Sankey" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPathmouseleave<CustomDataType extends object>(data: CustomDataType, fn: (event: Sankey$PathmouseleaveEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "pathmouseleave" event of this "Sankey".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachPathmouseleave(fn: (event: Sankey$PathmouseleaveEvent) => void, listener?: object): this;

        /**
         * Fires event "pathmouseleave" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        firePathmouseleave(parameters?: Sankey$PathmouseleaveEventParameters): this;
    }

    /**
     * Interface describing the parameters of Sankey's 'pathclick' event.
     */
    // eslint-disable-next-line
    export interface Sankey$PathclickEventParameters {
    }

    /**
     * Interface describing the parameters of Sankey's 'pathmouseenter' event.
     */
    // eslint-disable-next-line
    export interface Sankey$PathmouseenterEventParameters {
    }

    /**
     * Interface describing the parameters of Sankey's 'pathmouseleave' event.
     */
    // eslint-disable-next-line
    export interface Sankey$PathmouseleaveEventParameters {
    }

    /**
     * Type describing the Sankey's 'pathclick' event.
     */
    export type Sankey$PathclickEvent = Event<Sankey$PathclickEventParameters>;

    /**
     * Type describing the Sankey's 'pathmouseenter' event.
     */
    export type Sankey$PathmouseenterEvent = Event<Sankey$PathmouseenterEventParameters>;

    /**
     * Type describing the Sankey's 'pathmouseleave' event.
     */
    export type Sankey$PathmouseleaveEvent = Event<Sankey$PathmouseleaveEventParameters>;
}
