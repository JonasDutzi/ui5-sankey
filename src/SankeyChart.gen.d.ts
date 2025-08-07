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
        getShowheaders(): boolean;
        setShowheaders(showheaders: boolean): this;

        // property: highlightpaths
        getHighlightpaths(): boolean;
        setHighlightpaths(highlightpaths: boolean): this;

        // property: maxpathheight
        getMaxpathheight(): number;
        setMaxpathheight(maxpathheight: number): this;

        // property: minpathheight
        getMinpathheight(): number;
        setMinpathheight(minpathheight: number): this;

        // property: chartdata
        getChartdata(): object;
        setChartdata(chartdata: object): this;

        // event: itemclick
        attachItemclick(fn: (event: SankeyChart$ItemclickEvent) => void, listener?: object): this;
        attachItemclick<CustomDataType extends object>(data: CustomDataType, fn: (event: SankeyChart$ItemclickEvent, data: CustomDataType) => void, listener?: object): this;
        detachItemclick(fn: (event: SankeyChart$ItemclickEvent) => void, listener?: object): this;
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
