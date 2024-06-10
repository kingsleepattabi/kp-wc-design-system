import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'my-toggle',
  styleUrl: 'my-toggle.css',
  shadow: true
})
export class MyToggle {
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
    const toggleClass = classNames(this.className, 'toggle-container', {
      'toggle-checked': this.isChecked,
      'toggle-disabled': this.disabled
    });

    return (
      <div
        id={this.id}
        class={toggleClass}
        data-testid={this.dataTestId}
        role="switch"
        aria-checked={this.isChecked ? 'true' : 'false'}
        aria-disabled={this.disabled ? 'true' : 'false'}
        onClick={this.handleToggle}
      >
        <input
          type="radio"
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
