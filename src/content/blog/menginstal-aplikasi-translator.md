---
title: "Menginstal Aplikasi Translator"
description: "Catatan Menginstal Aplikasi Translator."
publishDate: "Apr 16 2024"
tags: ["Explor"]
---

Aku mulai memaksa diri untuk mencoba menulis apapun itu. Karena masih awal dan memang jarang
menulis tentu aku sangat bingung apa yang harus aku tulis. Lalu aku mencoba menggunakan `Chat GPT`
untuk memberikan beberapa konten dalam bahasa inggris. Kenapa dalam bahasa inggris? karena aku
ingin melatih kosa kataku yang dulu pernah aku hafalkan dan ternyata banyak yang terlupakan.

Lalu aku menggunakan Translator yang sudah terinstal di Linuxku, untuk menerjemahkan kalimat-kalimat
yang tidak aku ketahui artinya. Tetapi aplikasi Translator yang aku pakai membutukan koneksi
internet yang mana kadang koneksi internetku tidak stabil. Lalu aku mencari di google aplikasi
Translator yang bisa berjalan secara Offline.

Aku menemukannya di github yaitu [Argos-Translate](https://github.com/argosopentech/argos-translate).
Kemudian aku coba menginstalnya karena setelah baca tutorialnya terlihat mudah. Aku memilih cara
untuk menginstal ke dalam virtualenv. Setelah selesai instalasi aku tinggal mendownload paket
bahasa yang akun gunakan dengan perintah :

```bash
argospm install translate-en_id
argospm install translate-id_en
```
Setelah selesai aku bisa menggunakannya secara offline, dengan perintah:

```bash
argos-translate --from id --to en "siapa namamu?"
argos-translate --from en --to id "How are you?"
```
Tetapi ada sedikit delay ketika menjalankan perintah tersebut, entah karena Spesifikasi komputerku
yang jadul atau karna memang hal lain. Bagiku tidak jadi masalah selama aplikasi berjalan lancar.

Karena aku menggunakan neovim aku mencoba menambahkan fungsi Translator itu supaya bisa jalan
ketika aku sedang menulis. Karena penginstalan menggunakan virtualenv tentu perintah
`argos-translate` tidak bisa di akses secara global. Jadi aku harus membuat symlink binary file
tersebut ke `~/.local/bin/`

```bash
ln -sf /home/hudamnhd/Documents/argos-translate/env/bin/argos-translate  ~/.local/bin/argos-translate
```

Sekarang aku tinggal bisa memanggil perintah `argos-translate` secara global. Di konfigurasi
neovimku aku menulis function untuk memanggil perintah `argos-translate`.

```lua
vim.api.nvim_create_user_command("Translate", function(opts)
  if #opts.fargs < 3 then
    vim.api.nvim_echo({
      {
        "Too few arguments ("
        .. #opts.fargs
        .. "): 'translate <source language> <target language> <text>'",
        "WarningMsg",
      },
    }, false, {})
    return
  end

  if vim.fn.executable("argos-translate") == 0 then
    vim.api.nvim_echo({
      { "'argos-translate' was not found in path!", "warningmsg" },
    }, false, {})
    return
  end

  local source, target = unpack(opts.fargs)
  local text = string.sub(opts.args, #(source .. " " .. target .. " ") + 1)

  local command = "read !argos-translate --from " .. source .. " --to " .. target .. ' "' .. text .. '"'
  create_floating_window(command)
end, {
  nargs = "*",
  complete = function(lead, line, _)
    local arg = #vim.split(line, " ", {}) - 1
    if arg < 3 then
      return vim.tbl_filter(function(e)
        return e:sub(1, #lead) == lead
      end, { "en", "id" })
    end

    return {}
  end,
  desc = "translate",
})

local feedkeys = require("utils.keymap").feedkeys

local function enter_translate_cmd(text)
  feedkeys("<esc>", "n")
  local go_left = vim.api.nvim_replace_termcodes("<left>", true, false, true)
  vim.api.nvim_feedkeys(
    ":Translate  " .. text .. string.rep(go_left, vim.str_utfindex(text) + 1),
    "n",
    true
  )
end
```

Sekarang aku bisa menerjemahkan kata atau kalimat, ketika aku sedang menggunakan neovim. Aku cukup
menyeleksi kata atau kalimat dan hasil terjemahan muncul pop up.
