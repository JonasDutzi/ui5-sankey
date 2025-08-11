import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./Anchor" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $AnchorSettings extends $WebComponentSettings {
        item?: object | PropertyBindingInfo | `{${string}}`;
    }

    export default interface Anchor {

        // property: item

        /**
         * Gets current value of property "item".
         *
         * @returns Value of property "item"
         */
        getItem(): object;

        /**
         * Sets a new value for property "item".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param item New value for property "item"
         * @returns Reference to "this" in order to allow method chaining
         */
        setItem(item: object): this;
    }
}
