'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='flex items-center space-x-2'>
      <Switch
        id='theme-switch'
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <Label htmlFor='theme-switch' className='sr-only'>
        Toggle theme
      </Label>
      {theme === 'dark' ? (
        <IconMoon className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <IconSun className='h-[1.2rem] w-[1.2rem]' />
      )}
      <span className='sr-only'>
        {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      </span>
    </div>
  );
}
