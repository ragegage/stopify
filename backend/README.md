# notes

<!-- playlists table: -->
create_table :playlists do |t|
  t.string :name, null: false
  t.integer :user_id, null: false
  t.img_src :string

  t.timestamps
end

<!-- registering keyboard shortcuts in electron -->
const electron = require('electron')
const app = electron.app
const dialog = electron.dialog
const globalShortcut = electron.globalShortcut

app.on('ready', function () {
  globalShortcut.register('CommandOrControl+Alt+K', function () {
    dialog.showMessageBox({
      type: 'info',
      message: 'Success!',
      detail: 'You pressed the registered global shortcut keybinding.',
      buttons: ['OK']
    })
  })
})

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})
