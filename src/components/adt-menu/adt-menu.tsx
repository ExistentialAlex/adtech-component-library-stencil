import { Component, Host, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { AdTechComponentColors, AdTechStatusColors, AdTechNumericColors } from '../../enums';
import { AppearanceProps } from '../../interfaces';
import { getBrClasses, getColorOutlineClasses } from '../../utils';

@Component({
  tag: 'adt-menu',
  styleUrl: 'adt-menu.scss',
  shadow: true,
})
export class AdtMenu implements AppearanceProps {
  @Prop() color?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
  @Prop() rounded?: boolean;
  @Prop() sharp?: boolean;
  @Prop() items!: unknown[];
  @Prop() stringify: (item: unknown) => string;
  @Prop() value: unknown;

  @Event() valueChanged: EventEmitter<unknown>;

  @State() active?: unknown;
  @State() classes: string[] = [];

  @Watch('rounded')
  @Watch('sharp')
  @Watch('color')
  computeClasses() {
    this.classes = ['br-default', ...getBrClasses({ rounded: this.rounded, sharp: this.sharp }), ...getColorOutlineClasses(this.color as AppearanceProps['color'], true)];
  }

  itemClick(item: unknown) {
    if (this.stringify(this.active || '') === this.stringify(item)) {
      this.active = null;
      this.valueChanged.emit(null);
      return;
    }

    this.active = item;
    this.valueChanged.emit(item);
  }

  componentWillRender() {
    this.active = this.value;
    this.computeClasses();
  }

  render() {
    return (
      <Host class={this.classes.join(' ')}>
        <ul class="adt-menu">
          {!this.items.length ? (
            <div class="adt-menu-empty flex-align-center">
              <slot name="empty">No items found.</slot>
            </div>
          ) : (
            this.items.map(item => {
              return (
                <li
                  key={this.stringify(item)}
                  class={{ 'adt-menu-item': true, 'adt-menu-item__active': this.stringify(this.active || '') === this.stringify(item) }}
                  onClick={() => this.itemClick(item)}
                ></li>
              );
            })
          )}
        </ul>
      </Host>
    );
  }
}
