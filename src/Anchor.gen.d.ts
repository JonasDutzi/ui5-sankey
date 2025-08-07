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
        getItem(): object;
        setItem(item: object): this;
    }
}
