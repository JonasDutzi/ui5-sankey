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
        getItem(): object;
        setItem(item: object): this;

        // property: highlightpaths
        getHighlightpaths(): boolean;
        setHighlightpaths(highlightpaths: boolean): this;

        // aggregation: content
        getContent(): Control[];
        addContent(content: Control): this;
        insertContent(content: Control, index: number): this;
        removeContent(content: number | string | Control): Control | null;
        removeAllContent(): Control[];
        indexOfContent(content: Control): number;
        destroyContent(): this;

        // event: itemclick
        attachItemclick(fn: (event: AnchorContent$ItemclickEvent) => void, listener?: object): this;
        attachItemclick<CustomDataType extends object>(data: CustomDataType, fn: (event: AnchorContent$ItemclickEvent, data: CustomDataType) => void, listener?: object): this;
        detachItemclick(fn: (event: AnchorContent$ItemclickEvent) => void, listener?: object): this;
        fireItemclick(parameters?: AnchorContent$ItemclickEventParameters): this;

        // event: anchormouseenter
        attachAnchormouseenter(fn: (event: AnchorContent$AnchormouseenterEvent) => void, listener?: object): this;
        attachAnchormouseenter<CustomDataType extends object>(data: CustomDataType, fn: (event: AnchorContent$AnchormouseenterEvent, data: CustomDataType) => void, listener?: object): this;
        detachAnchormouseenter(fn: (event: AnchorContent$AnchormouseenterEvent) => void, listener?: object): this;
        fireAnchormouseenter(parameters?: AnchorContent$AnchormouseenterEventParameters): this;

        // event: anchormouseleave
        attachAnchormouseleave(fn: (event: AnchorContent$AnchormouseleaveEvent) => void, listener?: object): this;
        attachAnchormouseleave<CustomDataType extends object>(data: CustomDataType, fn: (event: AnchorContent$AnchormouseleaveEvent, data: CustomDataType) => void, listener?: object): this;
        detachAnchormouseleave(fn: (event: AnchorContent$AnchormouseleaveEvent) => void, listener?: object): this;
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
