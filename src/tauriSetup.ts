import { appWindow } from '@tauri-apps/api/window';
import { register } from '@tauri-apps/api/globalShortcut';

// tauri setup on external function
export default async function tauriSetup() {

  await register('CommandOrControl+Shift+F', async () => {
    console.log('Shortcut triggered');
    await appWindow.setFullscreen(true);
  });

}