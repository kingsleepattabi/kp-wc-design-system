/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyCheckbox {
        "checked": boolean;
        "className": string;
        "dataTestId": string;
        "disabled": boolean;
        "id": string;
        "label": string;
        "name": string;
        "value": string;
    }
    interface MyDropdown {
    }
    interface MyInputbox {
    }
    interface MyToggle {
        "checked": boolean;
        "className": string;
        "dataTestId": string;
        "disabled": boolean;
        "id": string;
        "label": string;
        "name": string;
        "value": string;
    }
}
export interface MyCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyCheckboxElement;
}
export interface MyToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyToggleElement;
}
declare global {
    interface HTMLMyCheckboxElementEventMap {
        "onChange": any;
    }
    interface HTMLMyCheckboxElement extends Components.MyCheckbox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyCheckboxElementEventMap>(type: K, listener: (this: HTMLMyCheckboxElement, ev: MyCheckboxCustomEvent<HTMLMyCheckboxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyCheckboxElementEventMap>(type: K, listener: (this: HTMLMyCheckboxElement, ev: MyCheckboxCustomEvent<HTMLMyCheckboxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyCheckboxElement: {
        prototype: HTMLMyCheckboxElement;
        new (): HTMLMyCheckboxElement;
    };
    interface HTMLMyDropdownElement extends Components.MyDropdown, HTMLStencilElement {
    }
    var HTMLMyDropdownElement: {
        prototype: HTMLMyDropdownElement;
        new (): HTMLMyDropdownElement;
    };
    interface HTMLMyInputboxElement extends Components.MyInputbox, HTMLStencilElement {
    }
    var HTMLMyInputboxElement: {
        prototype: HTMLMyInputboxElement;
        new (): HTMLMyInputboxElement;
    };
    interface HTMLMyToggleElementEventMap {
        "onChange": any;
    }
    interface HTMLMyToggleElement extends Components.MyToggle, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyToggleElementEventMap>(type: K, listener: (this: HTMLMyToggleElement, ev: MyToggleCustomEvent<HTMLMyToggleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyToggleElementEventMap>(type: K, listener: (this: HTMLMyToggleElement, ev: MyToggleCustomEvent<HTMLMyToggleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyToggleElement: {
        prototype: HTMLMyToggleElement;
        new (): HTMLMyToggleElement;
    };
    interface HTMLElementTagNameMap {
        "my-checkbox": HTMLMyCheckboxElement;
        "my-dropdown": HTMLMyDropdownElement;
        "my-inputbox": HTMLMyInputboxElement;
        "my-toggle": HTMLMyToggleElement;
    }
}
declare namespace LocalJSX {
    interface MyCheckbox {
        "checked"?: boolean;
        "className"?: string;
        "dataTestId"?: string;
        "disabled"?: boolean;
        "id"?: string;
        "label"?: string;
        "name"?: string;
        "onOnChange"?: (event: MyCheckboxCustomEvent<any>) => void;
        "value"?: string;
    }
    interface MyDropdown {
    }
    interface MyInputbox {
    }
    interface MyToggle {
        "checked"?: boolean;
        "className"?: string;
        "dataTestId"?: string;
        "disabled"?: boolean;
        "id"?: string;
        "label"?: string;
        "name"?: string;
        "onOnChange"?: (event: MyToggleCustomEvent<any>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "my-checkbox": MyCheckbox;
        "my-dropdown": MyDropdown;
        "my-inputbox": MyInputbox;
        "my-toggle": MyToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-checkbox": LocalJSX.MyCheckbox & JSXBase.HTMLAttributes<HTMLMyCheckboxElement>;
            "my-dropdown": LocalJSX.MyDropdown & JSXBase.HTMLAttributes<HTMLMyDropdownElement>;
            "my-inputbox": LocalJSX.MyInputbox & JSXBase.HTMLAttributes<HTMLMyInputboxElement>;
            "my-toggle": LocalJSX.MyToggle & JSXBase.HTMLAttributes<HTMLMyToggleElement>;
        }
    }
}
