import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { AdTechComponentColors, AdTechStatusColors, AdTechNumericColors } from '../../enums';
import { AppearanceProps } from '../../interfaces';
import { getBrClasses, getColorFillClasses } from '../../utils';

@Component({
  tag: 'adt-button',
  styleUrl: 'adt-button.scss',
  shadow: true,
})
export class AdtButton implements AppearanceProps {
  @Prop() color?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;
  @Prop() rounded?: boolean;
  @Prop() sharp?: boolean;

  @State() classes: string[] = [];

  @Watch('rounded')
  @Watch('sharp')
  @Watch('color')
  computeClasses() {
    this.classes = [
      'br-default',
      ...getBrClasses({ rounded: this.rounded, sharp: this.sharp }),
      ...getColorFillClasses(this.color as AppearanceProps['color'], true),
    ];
  }

  componentWillRender() {
    this.computeClasses();
  }

  render() {
    return (
      <Host class={this.classes.join(' ')}>
        <button class="adt-btn">
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </button>
      </Host>
    );
  }
}
