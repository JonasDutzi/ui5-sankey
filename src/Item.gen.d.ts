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
        getItem(): object;
        setItem(item: object): this;

        // aggregation: content
        getContent(): Control[];
        addContent(content: Control): this;
        insertContent(content: Control, index: number): this;
        removeContent(content: number | string | Control): Control | null;
        removeAllContent(): Control[];
        indexOfContent(content: Control): number;
        destroyContent(): this;
    }
}
