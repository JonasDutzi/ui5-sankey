import Event from "sap/ui/base/Event";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./SankeyChart" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SankeyChartSettings extends $WebComponentSettings {
        showheaders?: boolean | PropertyBindingInfo | `{${string}}`;
        highlightpaths?: boolean | PropertyBindingInfo | `{${string}}`;
        maxpathheight?: number | PropertyBindingInfo | `{${string}}`;
        minpathheight?: number | PropertyBindingInfo | `{${string}}`;
        chartdata?: object | PropertyBindingInfo | `{${string}}`;
        itemclick?: (event: SankeyChart$ItemclickEvent) => void;
    }

    export default interface SankeyChart {

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

        // property: chartdata

        /**
         * Gets current value of property "chartdata".
         *
         * @returns Value of property "chartdata"
         */
        getChartdata(): object;

        /**
         * Sets a new value for property "chartdata".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param chartdata New value for property "chartdata"
         * @returns Reference to "this" in order to allow method chaining
         */
        setChartdata(chartdata: object): this;

        // event: itemclick

        /**
         * Attaches event handler "fn" to the "itemclick" event of this "SankeyChart".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "SankeyChart" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "SankeyChart" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachItemclick(fn: (event: SankeyChart$ItemclickEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "itemclick" event of this "SankeyChart".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "SankeyChart" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "SankeyChart" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachItemclick<CustomDataType extends object>(data: CustomDataType, fn: (event: SankeyChart$ItemclickEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "itemclick" event of this "SankeyChart".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachItemclick(fn: (event: SankeyChart$ItemclickEvent) => void, listener?: object): this;

        /**
         * Fires event "itemclick" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        fireItemclick(parameters?: SankeyChart$ItemclickEventParameters): this;
    }

    /**
     * Interface describing the parameters of SankeyChart's 'itemclick' event.
     */
    // eslint-disable-next-line
    export interface SankeyChart$ItemclickEventParameters {
    }

    /**
     * Type describing the SankeyChart's 'itemclick' event.
     */
    export type SankeyChart$ItemclickEvent = Event<SankeyChart$ItemclickEventParameters>;
}
