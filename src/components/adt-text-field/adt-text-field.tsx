import { Component, Host, h, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { AdTechComponentColors, AdTechStatusColors, AdTechNumericColors } from '../../enums';
import { AppearanceProps } from '../../interfaces';
import { getBrClasses, getColorFormOutlineClasses } from '../../utils';

@Component({
  tag: 'adt-text-field',
  styleUrl: 'adt-text-field.scss',
  shadow: true,
})
export class AdtTextField implements AppearanceProps {
  @Prop() placeholder: string;

  @Prop() value: string;

  @Prop() color?: AdTechComponentColors | AdTechStatusColors | AdTechNumericColors;

  @Prop() sharp?: boolean;

  @Prop() rounded?: boolean;

  @State() innerValue: string;

  @State() classes: string[] = [];

  @Event() valueChanged: EventEmitter<string>;

  @Watch('rounded')
  @Watch('sharp')
  @Watch('color')
  computeClasses() {
    this.classes = ['flex', 'br-default', ...getBrClasses({ rounded: this.rounded, sharp: this.sharp }), ...getColorFormOutlineClasses(this.color as AppearanceProps['color'])];
  }

  input!: HTMLInputElement;

  handleChange(event) {
    this.innerValue = event.target.value;
    this.valueChanged.emit(this.innerValue);
  }

  mouseDown(event: MouseEvent) {
    event.preventDefault();
    this.input.focus();
  }

  componentWillRender() {
    this.computeClasses();
  }

  render() {
    return (
      <Host class={this.classes.join(' ')}>
        <div onMouseDown={event => this.mouseDown(event)}>
          <slot name="left"></slot>
        </div>
        <input
          type="text"
          class="input"
          value={this.innerValue}
          placeholder={this.placeholder}
          onInput={event => this.handleChange(event)}
          ref={el => (this.input = el as HTMLInputElement)}
        />
        <div onMouseDown={event => this.mouseDown(event)}>
          <slot name="right"></slot>
        </div>
      </Host>
    );
  }
}
