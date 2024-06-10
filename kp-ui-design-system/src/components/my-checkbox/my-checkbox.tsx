import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'my-checkbox',
  styleUrl: 'my-checkbox.css',
  shadow: true
})
export class MyCheckbox {
  @Prop() className: string;
  @Prop() id: string;
  @Prop() dataTestId: string;
  @Prop() label: string;
  @Prop() name: string;
  @Prop() value: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @Prop() disabled: boolean;

  @State() isChecked: boolean;

  @Event() onChange: EventEmitter;

  componentWillLoad() {
    this.isChecked = this.checked;
  }

  private handleToggle = () => {
    if (!this.disabled) {
      this.isChecked = !this.isChecked;
      this.checked = this.isChecked;
      this.onChange.emit({
        checked: this.isChecked,
        value: this.value
      });
    }
  }

  render() {
    const checkboxClass = classNames(this.className, 'checkbox-container', {
      'checkbox-checked': this.isChecked,
      'checkbox-disabled': this.disabled
    });

    return (
      <div
        id={this.id}
        class={checkboxClass}
        data-testid={this.dataTestId}
        role="checkbox"
        aria-checked={this.isChecked ? 'true' : 'false'}
        aria-disabled={this.disabled ? 'true' : 'false'}
        onClick={this.handleToggle}
      >
        <input
          type="checkbox"
          name={this.name}
          value={this.value}
          checked={this.isChecked}
          disabled={this.disabled}
          onChange={this.handleToggle}
        />
        <label>{this.label}</label>
      </div>
    );
  }
}
