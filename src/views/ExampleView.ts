import { ItemView, WorkspaceLeaf } from "obsidian";
import Component from "../components/Component.svelte"
import { mount, unmount } from 'svelte'; export const VIEW_TYPE_EXAMPLE = "example-view"

export class ExampleView extends ItemView {
    component!: Component;

    constructor(leaf: WorkspaceLeaf) {
        super(leaf)
    }

    getViewType(): string {
        return VIEW_TYPE_EXAMPLE;
    }

    getDisplayText(): string {
        return "Example view"
    }

    protected async onOpen(): Promise<void> {
        this.component = mount(Component, { target: this.contentEl, props: { variable: 1 } }) as Component
    }

    protected async onClose(): Promise<void> {
        unmount(this.component)
    }
}