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
        getData(): object;
        setData(data: object): this;

        // aggregation: content
        getContent(): Control[];
        addContent(content: Control): this;
        insertContent(content: Control, index: number): this;
        removeContent(content: number | string | Control): Control | null;
        removeAllContent(): Control[];
        indexOfContent(content: Control): number;
        destroyContent(): this;

        // aggregation: label
        getLabel(): Control[];
        addLabel(label: Control): this;
        insertLabel(label: Control, index: number): this;
        removeLabel(label: number | string | Control): Control | null;
        removeAllLabel(): Control[];
        indexOfLabel(label: Control): number;
        destroyLabel(): this;
    }
}
