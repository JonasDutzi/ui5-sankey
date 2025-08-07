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

        // aggregation: content
        getContent(): Control[];
        addContent(content: Control): this;
        insertContent(content: Control, index: number): this;
        removeContent(content: number | string | Control): Control | null;
        removeAllContent(): Control[];
        indexOfContent(content: Control): number;
        destroyContent(): this;

        // event: pathclick
        attachPathclick(fn: (event: Sankey$PathclickEvent) => void, listener?: object): this;
        attachPathclick<CustomDataType extends object>(data: CustomDataType, fn: (event: Sankey$PathclickEvent, data: CustomDataType) => void, listener?: object): this;
        detachPathclick(fn: (event: Sankey$PathclickEvent) => void, listener?: object): this;
        firePathclick(parameters?: Sankey$PathclickEventParameters): this;

        // event: pathmouseenter
        attachPathmouseenter(fn: (event: Sankey$PathmouseenterEvent) => void, listener?: object): this;
        attachPathmouseenter<CustomDataType extends object>(data: CustomDataType, fn: (event: Sankey$PathmouseenterEvent, data: CustomDataType) => void, listener?: object): this;
        detachPathmouseenter(fn: (event: Sankey$PathmouseenterEvent) => void, listener?: object): this;
        firePathmouseenter(parameters?: Sankey$PathmouseenterEventParameters): this;

        // event: pathmouseleave
        attachPathmouseleave(fn: (event: Sankey$PathmouseleaveEvent) => void, listener?: object): this;
        attachPathmouseleave<CustomDataType extends object>(data: CustomDataType, fn: (event: Sankey$PathmouseleaveEvent, data: CustomDataType) => void, listener?: object): this;
        detachPathmouseleave(fn: (event: Sankey$PathmouseleaveEvent) => void, listener?: object): this;
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
