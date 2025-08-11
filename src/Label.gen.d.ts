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
         * Gets current value of property "label".
         *
         * The text to display.
         *
         * @returns Value of property "label"
         */
        getLabel(): string;

        /**
         * Sets a new value for property "label".
         *
         * The text to display.
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param label New value for property "label"
         * @returns Reference to "this" in order to allow method chaining
         */
        setLabel(label: string): this;
    }
}
