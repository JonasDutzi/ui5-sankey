import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./Label" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $LabelSettings extends $WebComponentSettings {

        /**
         * The text to display.
         */
        label?: string | PropertyBindingInfo;
    }

    export default interface Label {

        // property: label

        /**
         * The text to display.
         */
        getLabel(): string;

        /**
         * The text to display.
         */
        setLabel(label: string): this;
    }
}
