import Control from "sap/ui/core/Control";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./Column" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $ColumnSettings extends $WebComponentSettings {
        label?: Control;
        content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
    }

    export default interface Column {

        // aggregation: label
        getLabel(): Control;
        setLabel(label: Control): this;
        destroyLabel(): this;

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
