import { Component, Host, h, State } from '@stencil/core';
import { AllAdTechColors } from '../enums';
import { getAllColorsAsArray } from '../utils';

interface myItem {
  id: number;
  text: string;
}

@Component({
  tag: 'adt-demo',
  styleUrl: '../global/global.scss',
  shadow: true,
})
export class AdtDemo {
  @State() color: AllAdTechColors = AllAdTechColors.primary;
  @State() selectedItem = null;
  @State() textFieldValue = '';
  @State() count = 0;

  render() {
    return (
      <Host class="flex-column gap-m">
        <header class="flex">
          <h1>AdTech Component Library</h1>
          <p class="ml-auto mr-m flex-align-center">Select Color</p>
          <select onChange={e => (this.color = (e as any).target.value)}>
            {getAllColorsAsArray().map(color => (
              <option value={color}>{color}</option>
            ))}
          </select>
        </header>

        <h2>AdTech Menu</h2>
        <div class="flex gap-m">
          <adt-menu
            class="flex-1"
            color={this.color}
            items={[
              { id: 1, text: 'Item 1' },
              { id: 2, text: 'Item 2' },
              { id: 3, text: 'Item 3' },
            ]}
            template={(item: myItem) => (
              <header>
                {item.id} - {item.text}
              </header>
            )}
            stringify={item => item.id}
            onValueChanged={e => (this.selectedItem = e.detail)}
          ></adt-menu>
          <p class="flex-1 br-default secondary-border border-default flex-justify-center flex-align-center">Selected Item: {JSON.stringify(this.selectedItem)}</p>
        </div>
        <h2>AdTech Text Field</h2>
        <div class="flex gap-m">
          <adt-text-field class="flex-1" color={this.color} value={this.textFieldValue} onValueChanged={e => (this.textFieldValue = e.detail)}></adt-text-field>
          <p class="flex-1 br-default secondary-border border-default flex-justify-center flex-align-center">{this.textFieldValue}</p>
        </div>
        <h2>AdTech Button</h2>
        <div class="flex gap-m">
          <adt-button class="flex-1" color={this.color} onClick={() => this.count++}>
            Click me!
          </adt-button>
          <p class="flex-1 br-default secondary-border border-default flex-justify-center">{this.count}</p>
        </div>
      </Host>
    );
  }
}
