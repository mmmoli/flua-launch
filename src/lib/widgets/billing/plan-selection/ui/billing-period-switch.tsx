'use client';

import { Label } from '@ui/label';
import { Switch } from '@ui/switch';
import { FC, useCallback } from 'react';

export interface BillingPeriodSwitchProps {
  annualBilling: boolean;
  onChange: (isAnnual: boolean) => void;
}

export const BillingPeriodSwitch: FC<BillingPeriodSwitchProps> = ({ onChange, annualBilling }) => {
  const handleCheckedChange = useCallback(
    (checked: boolean) => {
      onChange(checked);
    },
    [onChange]
  );

  return (
    <div className='flex items-center justify-center gap-4 text-sm'>
      <Label>Pay Monthly</Label>
      <Switch
        checked={annualBilling}
        onCheckedChange={handleCheckedChange}
        className='data-[state=unchecked]:bg-foreground'
      />
      <Label>Pay Annually</Label>
    </div>
  );
};
