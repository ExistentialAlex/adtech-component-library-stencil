/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AdTechComponentColors, AdTechNumericColors, AdTechStatusColors } from "./enums";
export { AdTechComponentColors, AdTechNumericColors, AdTechStatusColors } from "./enums";
export namespace Components {
    interface AdtButton {
        "color"?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
        "rounded"?: boolean;
        "sharp"?: boolean;
    }
    interface AdtDemo {
    }
    interface AdtMenu {
        "color"?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
        "items": unknown[];
        "rounded"?: boolean;
        "sharp"?: boolean;
        "stringify": (item: any) => string;
        "template": (item: any) => any;
        "value": unknown;
    }
    interface AdtTextField {
        "color"?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
        "placeholder": string;
        "rounded"?: boolean;
        "sharp"?: boolean;
        "value": string;
    }
}
export interface AdtMenuCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAdtMenuElement;
}
export interface AdtTextFieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAdtTextFieldElement;
}
declare global {
    interface HTMLAdtButtonElement extends Components.AdtButton, HTMLStencilElement {
    }
    var HTMLAdtButtonElement: {
        prototype: HTMLAdtButtonElement;
        new (): HTMLAdtButtonElement;
    };
    interface HTMLAdtDemoElement extends Components.AdtDemo, HTMLStencilElement {
    }
    var HTMLAdtDemoElement: {
        prototype: HTMLAdtDemoElement;
        new (): HTMLAdtDemoElement;
    };
    interface HTMLAdtMenuElement extends Components.AdtMenu, HTMLStencilElement {
    }
    var HTMLAdtMenuElement: {
        prototype: HTMLAdtMenuElement;
        new (): HTMLAdtMenuElement;
    };
    interface HTMLAdtTextFieldElement extends Components.AdtTextField, HTMLStencilElement {
    }
    var HTMLAdtTextFieldElement: {
        prototype: HTMLAdtTextFieldElement;
        new (): HTMLAdtTextFieldElement;
    };
    interface HTMLElementTagNameMap {
        "adt-button": HTMLAdtButtonElement;
        "adt-demo": HTMLAdtDemoElement;
        "adt-menu": HTMLAdtMenuElement;
        "adt-text-field": HTMLAdtTextFieldElement;
    }
}
declare namespace LocalJSX {
    interface AdtButton {
        "color"?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
        "rounded"?: boolean;
        "sharp"?: boolean;
    }
    interface AdtDemo {
    }
    interface AdtMenu {
        "color"?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
        "items"?: unknown[];
        "onItemClick"?: (event: AdtMenuCustomEvent<any>) => void;
        "onValueChanged"?: (event: AdtMenuCustomEvent<any>) => void;
        "rounded"?: boolean;
        "sharp"?: boolean;
        "stringify"?: (item: any) => string;
        "template"?: (item: any) => any;
        "value"?: unknown;
    }
    interface AdtTextField {
        "color"?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
        "onValueChanged"?: (event: AdtTextFieldCustomEvent<string>) => void;
        "placeholder"?: string;
        "rounded"?: boolean;
        "sharp"?: boolean;
        "value"?: string;
    }
    interface IntrinsicElements {
        "adt-button": AdtButton;
        "adt-demo": AdtDemo;
        "adt-menu": AdtMenu;
        "adt-text-field": AdtTextField;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "adt-button": LocalJSX.AdtButton & JSXBase.HTMLAttributes<HTMLAdtButtonElement>;
            "adt-demo": LocalJSX.AdtDemo & JSXBase.HTMLAttributes<HTMLAdtDemoElement>;
            "adt-menu": LocalJSX.AdtMenu & JSXBase.HTMLAttributes<HTMLAdtMenuElement>;
            "adt-text-field": LocalJSX.AdtTextField & JSXBase.HTMLAttributes<HTMLAdtTextFieldElement>;
        }
    }
}
