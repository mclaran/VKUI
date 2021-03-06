import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('handles change', () => {
    const CheckboxController = () => {
      const [checked, setChecked] = useState(false);
      return <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>check</Checkbox>;
    };
    render(<CheckboxController />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    userEvent.click(screen.getByText('check'));
    expect(screen.getByRole('checkbox')).toBeChecked();
    userEvent.click(screen.getByText('check'));
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
});
